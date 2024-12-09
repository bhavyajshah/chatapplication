'use client'

import { useEffect, useState } from 'react'
import { ChatHeader } from '@/components/Chat/ChatHeader'
import { ChatInput } from '@/components/Chat/ChatInput'
import { MessageList } from '@/components/Chat/MessageList'
import { useRouter } from 'next/navigation'
import { ChatProvider } from '@/contexts/ChatContext'
import { auth } from '@/db/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function ChatPage() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (!user) {
        router.push('/')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [auth, router])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <ChatProvider>
      <div className="flex flex-col h-screen bg-background">
        <ChatHeader />
        <div className="flex-1 overflow-hidden">
          <MessageList />
        </div>
        <ChatInput />
      </div>
    </ChatProvider>
  )
}