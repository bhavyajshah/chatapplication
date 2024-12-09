import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { useChat } from '@/hooks/useChat'

export function ChatInput() {
  const [message, setMessage] = useState('')
  const { sendMessage } = useChat()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    await sendMessage(message)
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t bg-card">
      <div className="flex space-x-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}