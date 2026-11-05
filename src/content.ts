// Update your personal details and portfolio content in this file.
export const profile = {
  name: "Yashraj Waghchaure",
  fullName: "Yashraj Santosh Waghchaure",
  headline: "Cybersecurity Student & Tech + Creative Professional",
  intro: "I build secure, thoughtful digital experiences — combining cybersecurity fundamentals, hands-on IT work and creative technology to make things that are both safe and engaging.",
  email: "yashrajwaghchaure777@gmail.com", // REPLACE with your email
  whatsapp: "+91 8275760603", // REPLACE with country code + number, digits only
  linkedin: "https://www.linkedin.com/in/yashraj-waghchaure-06bb2b3b0/",
  github: "https://github.com/yashraj196",
  resume: "/resume.pdf",
  certifications: "/certifications1.jpg",
};

export const interests = ["Cybersecurity", "Ethical Hacking", "Penetration Testing", "Networking", "Cloud Security", "Python", "Digital Creation"];

export const skillGroups = [
  { code: "SEC", title: "Cybersecurity & Networking", items: ["Kali Linux", "Wireshark", "Cisco Packet Tracer", "Networking Fundamentals", "Ethical Hacking (learning)"] },
  { code: "DEV", title: "Programming & Web", items: ["Python", "C", "C++", "HTML", "CSS", "JavaScript", "Linux"] },
  { code: "CRE", title: "Creative & Productivity", items: ["Canva", "Adobe Express", "CapCut", "VN Editor", "AI-assisted Content Creation"] }
];

export const projects = [
  { title: "Campus Network Topology", status: "Concept / Design", description: "A campus network design covering routers, switches, wireless access points, a firewall and servers — exploring fiber backbone and Cat6/Cat6a cabling concepts.", tags: ["Packet Tracer", "Networking", "Topology"] },
  { title: "Secure Notes Application", status: "In Progress", description: "An academic mini-project currently in the planning and documentation stage, exploring how a notes app could protect user data. Not yet implemented.", tags: ["Academic", "Security Design", "Documentation"] },
  { title: "AI Video Advertisements & Creative Campaigns", status: "Creative Work", description: "Short-form ad concepts built end to end: scripting, AI generation, voiceover planning, editing and motion graphics.", tags: ["AI Video", "CapCut", "Motion"] },
  { title: "Digital Marketing & AI Posters", status: "Ongoing", description: "Poster and social creatives for digital marketing, mixing AI-generated imagery with clean layout design.", tags: ["Canva", "Adobe Express", "AI Imagery"] }
];

export const experience = {
  role: "Intern",
  company: "Bits and Bytes Services (OPC) Pvt Ltd",
  location: "Nashik",
  duration: "6-month internship",
  points: [
    "Supported day-to-day IT tasks and troubleshooting in a working business environment.",
    "Contributed to digital content work for the company's projects.",
    "Gained client-facing exposure — communicating requirements and supporting delivery."
  ]
};

// Add only genuine certifications: { name: "...", issuer: "...", year: "...", url: "...", image: "..." }
export const certifications: {name:string; issuer:string; year?:string; url?:string; image?:string}[] = [
  {
    name: "Comptia network+",
    issuer: "linkedin learning",
    year: "2026",
    url: "https://lnkd.in/p/dzbBHrzj",
    image: profile.certifications
  },
  {
    name: "AI Tools",
    issuer: "IIDE",
    image: "/ai%20tools.jpg"
  },
  {
    name: "Ads on Instagram",
    issuer: "IIDE",
    image: "/ads%20on%20instagram.jpg"
  },
  {
    name: "IIDE Certificate",
    issuer: "IIDE",
    image: "/iide1.jpg",
    url: "/iide.pdf"
  },
  {
    name: "Cyber Ninja Bootcamp",
    issuer: "NITS Cyber Gyan & Netleap IT Training and Solutions",
    year: "2026",
    image: "/Yashraj%20Waghchaure%20Certificate.jpg"
  }
];