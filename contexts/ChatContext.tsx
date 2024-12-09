import { createContext, useEffect, useState, ReactNode } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { Message } from '@/types/chat'

interface ChatContextType {
  messages: Message[]
  loading: boolean
}

export const ChatContext = createContext<ChatContextType>({
  messages: [],
  loading: true,
})

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'))
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[]
      
      setMessages(messages)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <ChatContext.Provider value={{ messages, loading }}>
      {children}
    </ChatContext.Provider>
  )
}