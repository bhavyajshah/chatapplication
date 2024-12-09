'use client'

import { useState } from 'react'
import { Login } from '@/components/Login/login'
import { Signup } from '@/components/Signup/signup'
import { firebaseConfig } from '@/db/firebase'

export function AuthView() {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome</h1>
          <p className="text-muted-foreground">
            {showLogin ? 'Sign in to continue' : 'Create an account to get started'}
          </p>
        </div>
        
        <div className="bg-card bg-opacity-50 backdrop-blur-lg rounded-lg shadow-xl">
          {showLogin ? (
            <Login
              onSwitchToSignup={() => setShowLogin(false)}
              firebaseConfig={firebaseConfig}
            />
          ) : (
            <Signup onSwitchToLogin={() => setShowLogin(true)} />
          )}
        </div>
      </div>
    </main>
  )
}