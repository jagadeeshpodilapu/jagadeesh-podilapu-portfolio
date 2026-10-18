import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { site } from '@/data/site';
import { copy } from '@/data/copy';
import { publicAssetExists } from '@/data/project-assets';
import { withBasePath } from '@/data/paths';

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((item) => item.slug === slug);
    return project ? { title: `${project.title} — ${site.name}`, description: project.tagline, openGraph: { title: `${project.title} — ${site.name}`, description: project.tagline, images: [`${site.url}/og-image.png`] } } : {};
  });
}
const externalLinks = [['live',copy.projectLinks.live],['appStore',copy.projectLinks.appStore],['playStore',copy.projectLinks.playStore],['github',copy.projectLinks.github]] as const;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const links = externalLinks.filter(([key]) => project.links[key]);
  const screenshots = project.screenshots.filter(publicAssetExists);
  const hasCover = publicAssetExists(project.cover);
  return <main className="detail-page">
    <section className="detail-hero wrap"><Link className="back-link" href="/#projects">← {copy.projectPage.back}</Link><p className="section-kicker">{project.featured ? copy.projectPage.featured : copy.projectPage.selected}</p><h1>{project.title}</h1><p className="detail-tagline">{project.tagline}</p><div className="detail-meta"><span><small>{copy.projectPage.role}</small>{project.role}</span>{project.year && <span><small>{copy.projectPage.year}</small>{project.year}</span>}<span><small>{copy.projectPage.stack}</small>{project.stack.join(' · ')}</span></div></section>
    {hasCover && <section className="detail-cover wrap"><div className="detail-device"><Image src={withBasePath(project.cover)} alt={`${project.title} screen`} width={420} height={820} priority /></div></section>}
    <section className="wrap detail-body"><div className="detail-impact"><p className="section-kicker">{copy.projectPage.results}</p><h2>{copy.projectPage.impact}</h2>{project.impact.map((item,i)=><div className="impact-stat" key={item}><span>0{i+1}</span><p>{item}</p></div>)}</div>
      {project.caseStudy && <div className="case-study"><p className="section-kicker">{copy.projectPage.caseStudy}</p>{(['problem','solution','result'] as const).map((key)=><div key={key}><h3>{copy.caseLabels[key]}</h3><p>{project.caseStudy?.[key]}</p></div>)}</div>}
      <div className="detail-stack"><p className="section-kicker">{copy.projectPage.technology}</p><h2>{copy.projectPage.tools}</h2><div className="tag-list">{project.stack.map((item)=><span key={item}>{item}</span>)}</div></div>
    </section>
    {screenshots.length > 0 && <section className="wrap gallery-section"><p className="section-kicker">{copy.projectPage.screens}</p><h2>{copy.projectPage.gallery}</h2><div className="screenshot-gallery">{screenshots.map((src,i)=><div className="gallery-device" key={`${src}-${i}`}><Image src={withBasePath(src)} alt={`${project.title} app screen ${i+1}`} width={420} height={820} /></div>)}</div></section>}
    {links.length>0 && <section className="wrap detail-links"><p className="section-kicker">{copy.projectPage.explore}</p><div>{links.map(([key,label])=><a key={key} href={project.links[key]} target="_blank" rel="noreferrer">{label} ↗</a>)}</div></section>}
    <section className="next-project wrap"><p className="section-kicker">{copy.projectPage.next}</p><Link href={`/projects/${next.slug}`}><span>{next.title}</span><span>↗</span></Link></section>
  </main>;
}
