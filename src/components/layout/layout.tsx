import { Sidebar } from "./sidebar"
import { MobileNav } from "./mobile-nav"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <MobileNav />
          <main className="flex-1 px-4 sm:px-6 lg:px-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}