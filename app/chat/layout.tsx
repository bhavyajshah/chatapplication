import { AuthGuard } from '@/components/Auth/AuthGuard'

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthGuard>{children}</AuthGuard>
}