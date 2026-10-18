import { site } from '@/data/site';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import { Reveal } from '@/components/reveal';
import { HeroPhone } from '@/components/hero-phone';
import { copy } from '@/data/copy';
import { publicAssetExists } from '@/data/project-assets';

export default function Home() {
  return <main>
    <section className="hero wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> {copy.hero.eyebrow}</p>
        <h1>{copy.hero.headline[0]} <em>{copy.hero.headline[1]}</em></h1>
        <p className="hero-role">{site.role}</p>
        <p className="hero-pitch">{site.pitch}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">{copy.hero.viewProjects} <span aria-hidden="true">↘</span></a>
          <a className="button secondary" href={`mailto:${site.email}`}>{copy.hero.email} <span aria-hidden="true">↗</span></a>
          <a className="resume-link" href={site.resume} download>{copy.hero.downloadResume} <span aria-hidden="true">↓</span></a>
        </div>
        <div className="stats mobile-stats" aria-label={copy.accessibility.selectedResults}>{site.stats.map((stat)=><div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        <div className="proof-row"><div className="proof-mark" aria-hidden="true">✓</div><p>{copy.hero.proofFirst}<br/><strong>{copy.hero.proofSecond}</strong></p></div>
      </div>
      <HeroPhone projects={projects.filter(project=>publicAssetExists(project.cover))} />
    </section>
    <section className="stats wrap desktop-stats" aria-label={copy.accessibility.selectedResults}>{site.stats.map((stat)=><div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section>
    <section id="projects" className="wrap section projects-section"><Reveal><p className="section-kicker">{copy.projects.kicker}</p><div className="section-heading"><h2>{copy.projects.heading}</h2><p>{copy.projects.intro}</p></div></Reveal>
      {projects.filter(p=>p.featured).map(p=><Reveal className="featured-project" key={p.slug}>{publicAssetExists(p.cover) && <a className="featured-visual" href={`/projects/${p.slug}`}><Image src={p.cover} alt={`${p.title} app screen`} width={420} height={820} /><span className="view-case">{copy.projects.caseStudy} <span>↗</span></span></a>}<div className="featured-copy"><p className="project-meta">{copy.projects.featured}</p><h3><a href={`/projects/${p.slug}`}>{p.title}</a></h3><p className="project-tagline">{p.tagline}</p><ul className="impact-list">{p.impact.map(x=><li key={x}>{x}</li>)}</ul><div className="tag-list">{p.stack.map(x=><span key={x}>{x}</span>)}</div><a className="text-link" href={`/projects/${p.slug}`}>{copy.projects.explore} <span>↗</span></a></div></Reveal>)}
      <div className="project-list">{projects.filter(p=>!p.featured).map((p,i)=><Reveal className="project-row" key={p.slug} delay={i*.04}><div className="project-index">0{i+2}</div><div className="project-row-main"><h3><a href={`/projects/${p.slug}`}>{p.title}</a></h3><p>{p.tagline}</p></div><div className="project-row-result">{p.impact[0]}</div><a className="row-arrow" href={`/projects/${p.slug}`} aria-label={`${copy.accessibility.viewProject} ${p.title}`}>↗</a></Reveal>)}</div>
    </section>
    <section className="about-band" id="about"><div className="wrap about-inner"><Reveal><p className="section-kicker">{copy.about.kicker}</p><h2>{copy.about.heading}</h2><p className="about-copy">{copy.about.paragraph}</p></Reveal><div className="about-services">{copy.about.services.map((service,i)=><article className="about-service" key={service.title}><span>0{i+1}</span><div><h3>{service.title}</h3><p>{service.detail}</p></div></article>)}</div></div></section>
    <section className="wrap section experience-section" id="experience"><Reveal><p className="section-kicker">{copy.experience.kicker}</p><div className="section-heading"><h2>{copy.experience.heading}</h2><p>{copy.experience.intro}</p></div></Reveal><div className="timeline">{experience.map((job,i)=><Reveal className="timeline-row" key={`${job.company}-${job.period}`} delay={i*.04}><div className="timeline-date">{job.period}</div><div className="timeline-marker"><i/></div><div className="timeline-content">{job.location && <p>{job.location}</p>}<h3>{job.role}</h3><h4>{job.companyUrl ? <a href={job.companyUrl} target="_blank" rel="noreferrer">{job.company} ↗</a> : job.company}</h4>{job.highlights.length > 0 && <ul>{job.highlights.map(item=><li key={item}>{item}</li>)}</ul>}</div></Reveal>)}</div></section>
    <section className="skills-band" id="skills"><div className="wrap section skills-section"><Reveal><p className="section-kicker">{copy.skills.kicker}</p><div className="section-heading"><h2>{copy.skills.heading}</h2><p>{copy.skills.intro}</p></div></Reveal><div className="skills-list">{skills.map((group,i)=><Reveal className="skill-row" key={group.group} delay={i*.03}><h3>{group.group}</h3><div>{group.items.map(item=><span key={item}>{item}</span>)}</div></Reveal>)}</div></div></section>
    <section className="wrap education-section"><Reveal><div><p className="section-kicker">{copy.education.kicker}</p><h2>{copy.education.degree}</h2></div><p>{copy.education.school}<br/>{copy.education.period}</p></Reveal></section>
    <section className="contact-section" id="contact"><div className="wrap contact-inner"><Reveal><p className="section-kicker">{copy.contact.kicker}</p><h2>{copy.contact.heading}</h2><p>{copy.contact.intro}</p><div className="contact-actions"><a className="button primary" href={`mailto:${site.email}`}>{copy.hero.email} <span>↗</span></a><a className="button secondary" href={site.linkedin} target="_blank" rel="noreferrer">{copy.contact.linkedin} <span>↗</span></a></div></Reveal><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<span>↗</span></a></div></section>
    <footer className="wrap footer"><a className="wordmark" href="#home"><span className="wordmark-mark">{site.name[0]}</span><span>{site.brand}<span className="wordmark-dot">.</span></span></a><span>{copy.footer.signature} {site.name}</span><a href="#home">{copy.footer.top} ↑</a></footer>
  </main>;
}
import Image from 'next/image';
