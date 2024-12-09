import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {  createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-hot-toast'
import { auth } from '@/db/firebase'



interface SignupProps {
  onSwitchToLogin: () => void
}

export function Signup({ onSwitchToLogin }: SignupProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully.
        toast.success('User signed up successfully!');
        onSwitchToLogin();
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
        toast.error(`Error signing up: ${errorMessage}`);
      });
  }

  return (
    <>
      <Card className="w-[350px] shadow-lg rounded-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
          <CardDescription className="text-center">Create a new account to get started</CardDescription>
        </CardHeader>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">Sign Up</Button>
            <Button variant="link" onClick={onSwitchToLogin} className="w-full">
              Already have an account? Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}

