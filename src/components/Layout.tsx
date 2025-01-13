import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}
