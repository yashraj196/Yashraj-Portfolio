import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, ArrowUp, Menu, X, ShieldCheck, Github, Linkedin, Mail, Download, Network, Code2, Sparkles } from "lucide-react";
import { profile, interests, skillGroups, projects, experience, certifications } from "./content";

const nav = ["About", "Skills", "Projects", "Experience", "Certifications", "Resume", "Contact"];

function NetworkArt() {
  const nodes = [[200,200],[80,90],[320,80],[340,300],[70,320],[200,50],[380,190],[30,200]];
  return <div className="network-card blueprint">
    <div className="figure-label">FIG.01 — SECURE_TOPOLOGY.SVG</div>
    <div className="monitor">● monitoring</div>
    <svg viewBox="0 0 400 400" role="img" aria-label="Abstract secure network topology diagram">
      <circle cx="200" cy="200" r="150" className="orbit" /><circle cx="200" cy="200" r="95" className="orbit"/>
      {nodes.slice(1).map(([x,y],i)=><path key={i} d={`M200 200 L${x} 200 L${x} ${y}`} className="flowline"/>)}
      {nodes.map(([x,y],i)=><g key={i}>{i===0?<><rect x={x-34} y={y-34} width="68" height="68" rx="16" className="core"/><path d="M200 184l14 6v10c0 9-6 15-14 18-8-3-14-9-14-18v-10z" className="shield"/></>:i<5?<><rect x={x-22} y={y-14} width="44" height="28" rx="8" className="nodebox"/><text x={x} y={y+4} textAnchor="middle" className="nodetext">{["","FW","SRV","AP","SW"][i]}</text></>:<circle cx={x} cy={y} r="5" className="dot"/>}</g>)}
    </svg>
    <div className="network-caption">NETWORK / SECURITY / SYSTEMS</div>
  </div>
}

function Section({id,eyebrow,title,children,soft=false}:{id:string;eyebrow:string;title:string;children:React.ReactNode;soft?:boolean}) {
  return <section id={id} className={`section ${soft?"soft":""}`}><div className="container"><div className="section-head reveal"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{children}</div></section>
}

export default function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [showTop,setShowTop] = useState(false);
  const [formStatus,setFormStatus] = useState("");
  const [errors,setErrors] = useState<Record<string,string>>({});

  useEffect(()=>{
    const onScroll=()=>setShowTop(window.scrollY>600);
    window.addEventListener("scroll",onScroll,{passive:true});
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
    return ()=>{window.removeEventListener("scroll",onScroll);observer.disconnect()};
  },[]);

  function submitForm(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const next:Record<string,string>={};
    const name=String(data.get("name")||"").trim(), email=String(data.get("email")||"").trim(), message=String(data.get("message")||"").trim();
    if(!name)next.name="Please enter your name";
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))next.email="Enter a valid email";
    if(message.length<10)next.message="Message should be at least 10 characters";
    setErrors(next);
    setFormStatus(Object.keys(next).length?"":"Form validated — email delivery is not configured yet. Please contact me through LinkedIn or email.");
  }

  return <div id="top">
    <header className="header"><div className="nav-wrap">
      <a className="brand" href="#top"><span className="brand-mark">YW</span> Yashraj<span className="pink">.</span></a>
      <nav className={menuOpen?"nav-links open":"nav-links"}>{nav.map(n=><a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{n}</a>)}</nav>
      <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
    </div></header>

    <main>
      <section className="hero blueprint">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow hero-tag"><i/> {`B.SC. CYBER & DIGITAL SCIENCE · NASHIK`}</span>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.headline}</p>
            <p className="intro">{profile.intro}</p>
            <div className="actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href={profile.resume} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a><a className="button secondary" href={profile.resume} download>Download resume <Download size={16}/></a></div>
            <div className="hero-meta"><div><small>FOCUS</small><b>Security</b></div><div><small>BASE</small><b>Nashik, IN</b></div><div><small>MODE</small><b>Learning</b></div></div>
          </div>
          <div className="reveal"><NetworkArt/></div>
        </div>
        <div className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14}/></div>
      </section>

      <Section id="about" eyebrow="01 / ABOUT" title="Curious about systems — and how to protect them.">
        <div className="about-grid reveal"><div className="about-copy"><p>I'm a B.Sc. Cyber and Digital Science student at K.K. Wagh, Nashik, focused on understanding how systems work — and how to keep them secure.</p><p>My interests span cybersecurity, ethical hacking, penetration testing, networking and cloud security, alongside Python programming. Outside the terminal, I enjoy digital creation: designing visuals and producing AI-assisted video content.</p></div><div className="info-card"><small>EDUCATION</small><h3>B.Sc. Cyber and Digital Science</h3><p>K.K. Wagh, Nashik</p><small className="interest-label">INTERESTS</small><div className="chips">{interests.map(x=><span key={x}>{x}</span>)}</div></div></div>
      </Section>

      <Section id="skills" eyebrow="02 / SKILLS" title="A toolkit built around curiosity." soft>
        <div className="skills-grid">{skillGroups.map((g,i)=><article className="skill-card reveal" key={g.code}><div className="card-top"><span className={i===2?"code pink-bg":"code"}>{g.code}</span><small>0{i+1}</small></div><h3>{g.title}</h3><ul>{g.items.map(s=><li key={s}>{s}</li>)}</ul></article>)}</div>
      </Section>

      <Section id="projects" eyebrow="03 / PROJECTS" title="Selected work.">
        <div className="projects-grid">{projects.map((p,i)=><article className="project-card reveal" key={p.title}><div className="project-top"><small>PRJ-0{i+1}</small><span className={p.status==="In Progress"?"status in-progress":"status"}>{p.status}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="chips">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
      </Section>

      <Section id="experience" eyebrow="04 / EXPERIENCE" title="Where I've worked." soft>
        <div className="experience-card reveal"><div><span className="status">{experience.duration}</span><h3>{experience.role}</h3><b>{experience.company}</b><p>{experience.location}</p></div><ul>{experience.points.map(p=><li key={p}>{p}</li>)}</ul></div>
      </Section>

      <Section id="certifications" eyebrow="05 / LEARNING" title="Certifications & continued learning.">
        <div className="cert-grid">{certifications.map(c=><article className="cert-card" key={c.name}>{c.image&&<img src={c.image} alt={`${c.name} certificate`} style={{width:"100%",maxHeight:220,objectFit:"contain",marginBottom:16,borderRadius:8,background:"#f8faff"}}/>}<h3>{c.name}</h3><p>{c.issuer} {c.year&&`· ${c.year}`}</p>{(c.url||c.image)&&<a className="button secondary" href={c.url||c.image} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={16}/></a>}</article>)}{Array.from({length:Math.max(0,3-certifications.length)}).map((_,i)=><article className="cert-placeholder" key={i}><span>+</span><b>Add certification</b><small>Edit src/content.ts</small></article>)}</div>
      </Section>

      <section id="resume" className="resume-section"><div className="container"><div className="resume-banner reveal"><div><span>06 / RESUME</span><h2>Get the full picture.</h2><p>Download my latest resume as a PDF.</p></div><div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}><a className="button secondary" href={profile.resume} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a><a className="button secondary" href={profile.resume} download>Download resume <Download size={16}/></a></div></div></div></section>

      <Section id="contact" eyebrow="07 / CONTACT" title="Let's build something secure.">
        <div className="contact-grid"><div className="contact-links reveal">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><span><small>LINKEDIN</small><b>in/yashraj-waghchaure</b></span><Linkedin/></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><span><small>GITHUB</small><b>@yashraj196</b></span><Github/></a>
          <a href={`mailto:${profile.email}`}><span><small>EMAIL</small><b>{profile.email}</b></span><Mail/></a>
          <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><span><small>WHATSAPP</small><b>Message me</b></span><ArrowUpRight/></a>
        </div><form className="contact-form reveal" onSubmit={submitForm} noValidate>
          {(["name","email"] as const).map(n=><label key={n}>{n}<input name={n} type={n==="email"?"email":"text"} aria-invalid={!!errors[n]}/>{errors[n]&&<em>{errors[n]}</em>}</label>)}
          <label>Message<textarea name="message" rows={5} aria-invalid={!!errors.message}/>{errors.message&&<em>{errors.message}</em>}</label>
          <button className="button primary" type="submit">Send message <ArrowUpRight size={16}/></button>{formStatus&&<p className="form-status">{formStatus}</p>}
        </form></div>
      </Section>
    </main>

    <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.fullName}</span><span>SECURE · CURIOUS · CREATIVE</span></div></footer>
    {showTop&&<a className="back-top" href="#top" aria-label="Back to top"><ArrowUp/></a>}
  </div>;
}