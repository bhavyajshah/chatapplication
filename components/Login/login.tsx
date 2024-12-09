import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/db/firebase'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface LoginProps {
  onSwitchToSignup: () => void,
  firebaseConfig: {
  }
}



export function Login({ onSwitchToSignup }: LoginProps) {
  const history = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Login attempt:', email, password);

    // Check if email and password are provided
    if (!email || !password) {
      toast.error('Email and password are required.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully.
        console.log('User signed in:', userCredential.user);
        toast.success('Login successful!');
        setEmail('');
        setPassword('');
        if (isMounted) {
          history.push('/chat');
        }
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error signing in:', errorCode, errorMessage);
        toast.error('Error signing in: ' + errorMessage);
      });
  }

  if (!isMounted) return null;

  return (
    <Card className="w-[350px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
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
          <Button type="submit" className="w-full">Login</Button>
          <Button variant="link" onClick={onSwitchToSignup} className="w-full">
            Don't have an account? Sign up
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

