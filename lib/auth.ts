import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Credentials({
    credentials: { email: {}, password: {} },
    async authorize(credentials) {
      const user = await prisma.user.findUnique({ where: { email: credentials.email as string } });
      if (!user) return null;
      const ok = await bcrypt.compare(credentials.password as string, user.passwordHash);
      return ok ? { id: user.id, email: user.email, role: user.role } as any : null;
    }
  })],
  pages: { signIn: '/login' },
  session: { strategy: 'jwt' },
  callbacks: {
    jwt({ token, user }) { if (user) token.role = (user as any).role; return token; },
    session({ session, token }) { (session.user as any).role = token.role; return session; }
  }
});
