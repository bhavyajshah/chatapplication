'use client'

import { useState } from 'react'
import { Login } from '@/components/Login/login'
import { Signup } from '@/components/Signup/signup'
import { firebaseConfig} from '@/db/firebase'

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8">
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
  )
}

