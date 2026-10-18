'use client';
import { useEffect, useState } from 'react';
import { site } from '@/data/site';
import { copy } from '@/data/copy';
import { withBasePath } from '@/data/paths';

export function Navbar() {
  const [dark, setDark] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved ? saved === 'dark' : preferred;
    setDark(initial); document.documentElement.dataset.theme = initial ? 'dark' : 'light';
    let last = window.scrollY;
    const onScroll = () => { const y=window.scrollY; setVisible(y<40 || y<last || y-last<4); last=y; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const toggle = () => { const next=!dark; setDark(next); document.documentElement.dataset.theme=next?'dark':'light'; localStorage.setItem('portfolio-theme',next?'dark':'light'); };
  return <header className={`navbar ${visible?'':'navbar-hidden'}`}><nav className="nav-inner wrap" aria-label={copy.accessibility.mainNavigation}><a className="wordmark" href={withBasePath('/#home')} aria-label={`${site.name}, home`}><span className="wordmark-mark">{site.name[0]}</span><span>{site.brand}<span className="wordmark-dot">.</span></span></a><div className="nav-links"><a href={withBasePath('/#projects')}>{copy.nav.work}</a><a href={withBasePath('/#about')}>{copy.nav.about}</a><a href={withBasePath('/#experience')}>{copy.nav.experience}</a><a href={withBasePath('/#contact')}>{copy.nav.contact}</a></div><div className="nav-end"><button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${dark?'light':'dark'} mode`}>{dark?'☼':'☾'}</button><a className="nav-cta" href={`mailto:${site.email}`}>{copy.nav.talk} <span>↗</span></a></div></nav></header>;
}
