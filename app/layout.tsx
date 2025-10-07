import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'KEYAM SPORTS',
  description: '24/7 AI — Never Miss Anything ⚡️'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white border-b">
          <div className="max-w-6xl mx-auto p-4 flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="KEYAM SPORTS" width={160} height={40} />
            </div>
            <nav className="flex gap-4 ml-4">
              <Link href="/" className="text-sm font-semibold">Home</Link>
              <Link href="/basketball" className="text-sm">Basketball</Link>
              <Link href="/baseball" className="text-sm">Baseball</Link>
              <Link href="/soccer" className="text-sm">Soccer</Link>
              <Link href="/livescores" className="text-sm">Live Scores</Link>
              <Link href="/odds" className="text-sm">Odds</Link>
              <Link href="/about" className="text-sm">About</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-6xl mx-auto p-6">
          {children}
        </main>

        <footer className="border-t">
          <div className="max-w-6xl mx-auto p-4 text-sm text-gray-600">
            © {new Date().getFullYear()} KEYAM SPORTS — 24/7 AI — Never Miss Anything ⚡️
          </div>
        </footer>
      </body>
    </html>
  )
}
