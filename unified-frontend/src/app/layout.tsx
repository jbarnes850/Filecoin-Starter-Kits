import { ThemeProvider } from "@/components/theme-provider"
import { Toast } from "@/components/ui/toast"
import dynamic from 'next/dynamic'

const Toaster = dynamic(
  () => import('@/components/ui/toast').then((mod) => mod.Toaster),
  { ssr: false }
)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}