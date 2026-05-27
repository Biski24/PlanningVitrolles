import { ReactNode } from 'react';
import { Sidebar } from './sidebar';
export function LayoutShell({children}:{children:ReactNode}){return <div className='min-h-screen md:flex'><Sidebar/><main className='flex-1 p-4 md:p-8'>{children}</main></div>}
