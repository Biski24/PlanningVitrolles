import { signIn } from '@/lib/auth';
export default function Login(){
  return <div className='min-h-screen grid place-items-center p-4'><form action={async (formData)=>{'use server'; await signIn('credentials',Object.fromEntries(formData));}} className='w-full max-w-sm rounded-xl bg-white p-6 shadow space-y-4'><h1 className='text-2xl font-semibold'>Connexion</h1><input name='email' type='email' placeholder='Email' className='w-full border p-2 rounded'/><input name='password' type='password' placeholder='Mot de passe' className='w-full border p-2 rounded'/><button className='w-full rounded bg-blue-600 text-white py-2'>Se connecter</button></form></div>
}
