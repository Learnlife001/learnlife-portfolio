export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  stack: string[];
  liveDemo: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Cowrie Honeypot Alert System",
    slug: "cowrie-honeypot-alert-system",
    description: "Python-based alert system for SSH attacks using Cowrie and Loki.",
    longDescription: "This project integrates Cowrie honeypot, GeoIP2, Telegram and email alerting, and logs visualized in Grafana through Loki. It demonstrates a real-world honeypot alert pipeline.",
    stack: ["Python", "Cowrie", "GeoIP", "Grafana"],
    liveDemo: "https://cowrie-learnlife.vercel.app",
    github: "https://github.com/Learnlife001/cowrie-geoalert-honeypot"
  },
  {
    title: "Learnlife Portfolio",
    slug: "learnlife-portfolio",
    description: "My portfolio site built using Next.js and Tailwind.",
    longDescription: "This site showcases all my work, including security tools, writeups, blogs, and freelance services. Built with Next.js 13+, deployed on Vercel.",
    stack: ["Next.js", "Tailwind CSS", "React"],
    liveDemo: "https://learnlife-portfolio.vercel.app",
    github: "https://github.com/Learnlife001/learnlife-portfolio"
  },
  {
  title: "CyberRecon",
  slug: "cyberrecon",
  description: "CyberRecon is a web reconnaissance & vulnerability scanner. It performs DNS lookups, IP geolocation, port scanning, WHOIS queries, and detects tech stacks, built with Python and modular design.",
  longDescription: "CyberRecon is a Python-based reconnaissance tool for ethical hackers and system admins. It automates domain fingerprinting using modules for DNS records, subdomain enumeration, IP geolocation, open port scanning, WHOIS, and technology stack detection.",
  stack: ["Python", "Security", "Recon", "CLI"],
  liveDemo: "", // optional: link to demo or CLI recording
  github: "https://github.com/Learnlife001/cyberrecon"
}

];
