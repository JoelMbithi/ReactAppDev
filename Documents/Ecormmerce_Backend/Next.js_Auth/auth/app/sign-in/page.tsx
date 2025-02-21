"use client"

import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@radix-ui/react-separator';
import {useRouter} from 'next/navigation'
import { toast } from 'sonner';
//react icons
import { FaGithub, FaGoogleDrive} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';


const SignIn = () => {
  const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [pending,setPending] = useState(false)
     const router = useRouter()

    const handleSubmit = async (e:React.FormEvent) => {
e.preventDefault()
setPending(true)
const res = await signIn("credentials", {
  redirect: false,
  email,
  password
});
if (res?.ok) {
  router.push('/')
  toast.success("Login successfull")

}else if(res?.status === 400){
 
}
 else {
  console.log('Sign-in successful');
}
    }
  
  return (
    <div className="h-full flex items-center justify-center bg-[#1b0918]">
      <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground">
            Use email or service to sig in
          </CardDescription>
        </CardHeader>
        <CardContent className='px-2 sm:px-6'>
          <form onSubmit={handleSubmit} className='space-y-3' >
                
                 
                
                  <Input
                 type="email"
                 disabled={pending}
                 placeholder='Email'
                 value={email}
                  onChange={(e) =>  setEmail(e.target.value)}
                  required
                 
                 />
                 <Input
                 type="password"
                 disabled={pending}
                 placeholder='password'
                 value={email}
                  onChange={(e) =>  setPassword(e.target.value)}
                  required
                 
                 />
                 
                 <Button className='w-full'
                 size="lg"
                 disabled={pending}
                  >
                    continue
                          
                 </Button>
          </form>
          <Separator className="my-2 flex justify-evenly mx-auto items-center" />
        
          <Button
             disabled={false}
             onClick={()=> {}}
             variant="outline"
             size="lg"
             className='bg-slate-300 hover:bg-slate-500 hover:scal-110'
             >
              <FaGoogle className="size-8 left-2.5 top-2.5" color="#4285F4"/>
             </Button>
             <Button
             disabled={false}
             onClick={()=> {}}
             variant="outline"
             size="lg"
             className='bg-slate-300 hover:bg-slate-500 hover:scal-110'
             >
              <FaGithub className="size-8 left-2.5 top-2.5"/>
             </Button>
             <p className="text-center text-sm mt-2 text-muted-foreground">
            Create a account
              <Link className='text-sky-700 ml-4 hover:underline cursor-pointer' href="/sign-up">Sign Up</Link>
             </p>
          <Input placeholder="Enter your email" className="w-full" />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
