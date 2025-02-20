"use client"

import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@radix-ui/react-separator';

//react icons
import { FaGithub, FaGoogleDrive} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import Link from 'next/link';

const SignIn = () => {
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
          <form action="" className='space-y-3' >
                
                 
                
                  <Input
                 type="email"
                 disabled={false}
                 placeholder='Email'
                 value={""}
                  onChange={() => {}}
                  required
                 
                 />
                 
                 <Button className='w-full'
                 size="lg"
                 disabled={false}
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
