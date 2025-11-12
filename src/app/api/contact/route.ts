// app/api/contact/route.ts

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // nodemailer requires node runtime (not edge)

// Simple in-memory rate limiter (per IP). For production use Redis or an external store.
const rateMap = new Map<string, { count: number; firstSeen: number }>();
const LIMIT = Number(process.env.CONTACT_RATE_LIMIT_COUNT ?? 6); // default: 6 requests
const WINDOW_MS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 60 * 60 * 1000); // default: 1 hour

function getClientIp(req: Request) {
    // Try common forwarded headers (Vercel supplies x-forwarded-for)
    const xfwd = req.headers.get("x-forwarded-for");
    if (xfwd) return xfwd.split(",")[0].trim();
    return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
    try {
        const ip = getClientIp(request);

        // rate limiting (in-memory)
        const now = Date.now();
        const record = rateMap.get(ip);
        if (record) {
            if (now - record.firstSeen < WINDOW_MS) {
                if (record.count >= LIMIT) {
                    return NextResponse.json(
                        { error: `Rate limit exceeded. Try again later.` },
                        { status: 429 }
                    );
                }
                record.count += 1;
            } else {
                // window expired
                rateMap.set(ip, { count: 1, firstSeen: now });
            }
        } else {
            rateMap.set(ip, { count: 1, firstSeen: now });
        }

        // parse body
        const body = await request.json().catch(() => null);
        if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

        const { name, email, message } = body;
        if (
            !name ||
            typeof name !== "string" ||
            !email ||
            typeof email !== "string" ||
            !message ||
            typeof message !== "string"
        ) {
            return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
        }

        // simple sanitization (trim)
        const safeName = name.trim().slice(0, 200);
        const safeEmail = email.trim().slice(0, 200);
        const safeMessage = message.trim().slice(0, 2000);

        // create transporter with SMTP credentials from env
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT ?? 465),
            secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });


        // verify transporter (optional, helpful for debugging)
        // await transporter.verify();

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECIPIENT || process.env.SMTP_USER,
            subject: `New portfolio message from ${safeName} <${safeEmail}>`,
            text: `${safeMessage}\n\n---\nFrom: ${safeName} <${safeEmail}>\nIP: ${ip}`,
            html: `<p>${safeMessage.replace(/\n/g, "<br/>")}</p><hr/><p>From: ${safeName} &lt;${safeEmail}&gt;</p><p>IP: ${ip}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Contact API error:", err);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}

