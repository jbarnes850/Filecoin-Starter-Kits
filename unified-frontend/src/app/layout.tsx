import { ThemeProvider } from "@/components/theme-provider"
import { Toast } from "@/components/ui/toast"
import { Toaster } from '@/components/ui/toast'
import "./globals.css"

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