"use client";

import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@radix-ui/react-separator';

// React Icons
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import { useState } from 'react';

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "" 
  });

  const [pending, setPending] = useState(false);
  const [error, setError] = useState(""); // To show errors

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(""); // Reset error

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setPending(false)
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      console.log("User Created Successfully");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-[#1b0918]">
      <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground">
            Use email or service to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className='px-2 sm:px-6'>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className='space-y-3'>
            <Input
              type="text"
              disabled={pending}
              placeholder='Full name'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              disabled={pending}
              placeholder='Email'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              type="password"
              disabled={pending}
              placeholder='Password'
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <Input
              type="password"
              disabled={pending}
              placeholder='Confirm password'
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              required
            />
            <Button className='w-full' size="lg" disabled={pending}>
              Continue
            </Button>
          </form>
          <Separator className="my-2 flex justify-evenly mx-auto items-center" />

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              disabled={false}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className='bg-white hover:bg-gray-200'
            >
              <FaGoogle className="size-6" color="#DB4437" />
            </Button>
            <Button
              disabled={false}
              onClick={() => {}}
              variant="outline"
              size="lg"
              className='bg-white hover:bg-gray-200'
            >
              <FaGithub className="size-6" />
            </Button>
          </div>

          <p className="text-center text-sm mt-2 text-muted-foreground">
            Already have an account?
            <Link className='text-sky-700 ml-1 hover:underline cursor-pointer' href="/sign-in">Sign in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
