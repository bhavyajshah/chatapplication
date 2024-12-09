import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

interface LoginProps {
  onSwitchToSignup: () => void
}

export function Login({ onSwitchToSignup }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Login attempt:', email, password)
  }

  return (
    <Card className="w-[350px]">
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <Form>
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
      </Form>
      </Formik>
    </Card>
  )
}

