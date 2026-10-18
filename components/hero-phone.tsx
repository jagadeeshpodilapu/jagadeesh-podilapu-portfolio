'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { Project } from '@/data/projects';
import { copy } from '@/data/copy';
import { site } from '@/data/site';

export function HeroPhone({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || projects.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % projects.length), 4200);
    return () => window.clearInterval(timer);
  }, [reduced, projects]);
  const project = projects[active];
  if (!project) return null;
  return <div className="hero-visual" aria-label={copy.accessibility.rotatingPreviews}>
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
    <div className="phone"><div className="phone-island"/><div className="phone-screen">
      <div className="screen-top"><span>9:41</span><span>•••</span></div><div className="screen-brand"><span className="brand-mark">i</span><span>{project.title}</span><span className="screen-menu">•••</span></div>
      <p className="screen-label">{copy.phone.preview} · 0{active+1}</p><h2>{project.title}</h2><p className="screen-sub">{project.tagline}</p>
      <div className="phone-preview-wrap"><Image key={project.cover} className="phone-preview" src={project.cover} alt={`${project.title} app screen`} width={420} height={820} priority /></div>
      <div className="progress-label"><span>{copy.phone.outcome}</span><b>{active+1} of {projects.length}</b></div><div className="progress"><i style={{width:`${((active+1)/projects.length)*100}%`}}/></div><div className="continue">{project.impact[0]} <span>→</span></div><p className="screen-foot">{copy.phone.footer}</p>
    </div></div><div className="float-note note-top"><span className="note-icon">✓</span><span><b>{site.callouts[0].value}</b><small>{site.callouts[0].label}</small></span></div><div className="float-note note-bottom"><span className="note-icon blue">↗</span><span><b>{site.callouts[1].value}</b><small>{site.callouts[1].label}</small></span></div>
  </div>;
}
