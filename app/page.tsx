'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { AuthView } from '@/components/Auth/AuthView'

export default function HomePage() {
  const router = useRouter()
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/chat')
      }
    })

    return () => unsubscribe()
  }, [auth, router])

  return <AuthView />
}