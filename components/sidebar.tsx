import Link from 'next/link';
const items=[['Dashboard','/dashboard'],['Planning','/planning'],['Employés','/employees'],['Temps','/time-entries'],['Vacances','/vacations'],['Paramètres','/settings']];
export function Sidebar(){return <aside className='w-full md:w-56 bg-white border-r p-4'><nav className='grid gap-2'>{items.map(([l,h])=><Link className='rounded px-3 py-2 hover:bg-slate-100' key={h} href={h}>{l}</Link>)}</nav></aside>}
