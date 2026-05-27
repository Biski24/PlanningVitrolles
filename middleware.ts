export { auth as middleware } from '@/lib/auth';
export const config = { matcher: ['/dashboard/:path*','/planning/:path*','/employees/:path*','/time-entries/:path*','/vacations/:path*','/settings/:path*'] };
