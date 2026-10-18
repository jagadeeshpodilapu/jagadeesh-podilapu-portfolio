import Link from 'next/link';
import { copy } from '@/data/copy';
export default function NotFound() { return <main className="not-found wrap"><p className="section-kicker">{copy.notFound.kicker}</p><h1>{copy.notFound.heading}</h1><p>{copy.notFound.body}</p><Link className="button primary" href="/">{copy.notFound.home} <span>↗</span></Link></main>; }
