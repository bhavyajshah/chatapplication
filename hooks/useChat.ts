import { useContext } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ChatContext } from '@/contexts/ChatContext'
import { useAuth } from '@/hooks/useAuth'
import { getFirestore } from 'firebase/firestore'
import { firestore } from '@/db/firebase'

export function useChat() {
  const { messages } = useContext(ChatContext)
  const { user } = useAuth()

  const sendMessage = async (content: string) => {
    if (!user) return

    try {
      await addDoc(collection(firestore, 'messages'), {
        content,
        userId: user.uid,
        userEmail: user.email,
        userPhotoURL: user.photoURL,
        timestamp: serverTimestamp(),
      })
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return { messages, sendMessage }
}