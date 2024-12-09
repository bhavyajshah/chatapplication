import { format } from 'date-fns'
import { useAuth } from '@/hooks/useAuth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import type { Message as MessageType } from '@/types/chat'

interface MessageProps {
  message: MessageType
}

export function Message({ message }: MessageProps) {
  const { user } = useAuth()
  const isOwn = message.userId === user?.uid

  return (
    <div className={cn('flex items-end gap-2', isOwn && 'flex-row-reverse')}>
      <Avatar className="h-8 w-8">
        <AvatarImage src={message.userPhotoURL || ''} />
        <AvatarFallback>{message.userEmail[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className={cn(
        'rounded-lg p-3 max-w-[70%]',
        isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'
      )}>
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-50">
          {format(message.timestamp, 'HH:mm')}
        </span>
      </div>
    </div>
  )
}