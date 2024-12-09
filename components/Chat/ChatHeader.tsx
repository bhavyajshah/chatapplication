import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function ChatHeader() {
  const { user, signOut } = useAuth()

  return (
    <div className="border-b p-4 flex justify-between items-center bg-card">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={user?.photoURL || ''} />
          <AvatarFallback>{user?.email?.[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">{user?.displayName || user?.email}</h2>
          <p className="text-sm text-muted-foreground">Online</p>
        </div>
      </div>
      <Button variant="ghost" onClick={signOut}>Sign Out</Button>
    </div>
  )
}