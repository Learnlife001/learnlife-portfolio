export type Project = {
    slug: string;
    title: string;
    short: string;
    long?: string;
    stack: string[];
    liveDemo?: string;
    github?: string;
    cover?: string;
    documentation?: string;
};

export const projects: Project[] = [
    {
        slug: "cowrie-honeypot-alert-system",
        title: "Cowrie Honeypot Alert System",
        short:
            "Python-based alert system for SSH attacks using Cowrie, Grafana, GeoIP and Loki.",
        long: "A honeypot monitoring and alert pipeline using Cowrie for capture, GeoIP for location, Loki/Filebeat for logs, and Grafana for dashboards. Includes SMTP/Telegram bot alerts and throttling/limits.",
        stack: ["Python", "Cowrie", "GeoIP", "Grafana", "Azure"],
        liveDemo: "https://youtu.be/XP2Ft1XvRCI?si=Kbr4RVzaTITkAl1l",
        github: "https://github.com/Learnlife001/cowrie-geoalert-honeypot",
        cover: "/projects/cowrie-honeypot-alert-system/cowrie.png",
        documentation: "/Honeypot.pdf",
        
    },
    {
        slug: "cyberrecon",
        title: "CyberRecon",
        short:
            "Web reconnaissance & vulnerability scanner (DNS, WHOIS, ports, Nmap and tech detect).",
        long: "Modular Python CLI for reconnaissance: DNS lookups, WHOIS, port scanning, tech detection and reporting. Designed for triage and recon pipelines.",
        stack: ["Python", "Security", "Recon", "CLI"],
        liveDemo: "https://youtu.be/vRgAnWFaAzY",
        github: "https://github.com/Learnlife001/cyberrecon",
        cover: "/projects/cyberrecon/re.png",
    },
];
