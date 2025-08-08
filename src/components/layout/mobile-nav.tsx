import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { 
  Home, 
  Info, 
  BookOpen, 
  Camera, 
  Star, 
  Contact,
  Menu,
  X,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import familyLogo from "@/assets/logo.png"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Trainer", href: "/trainer", icon: Info },
  { name: "Society Food", href: "/society-food", icon: BookOpen },
  { name: "twentyfive7 Map", href: "/map", icon: Camera },
  { name: "FAQ", href: "/faq", icon: Star },
  { name: "Gallery", href: "/gallery", icon: Camera },
  { name: "Contact Us", href: "/contact", icon: Contact },
  { name: "Schedules", href: "/schedules", icon: Contact },
  { name: "Potty Training", href: "/potty-training", icon: BookOpen },
  { name: "Loose Leash", href: "/loose-leash", icon: BookOpen },
  { name: "Hand Feeding", href: "/hand-feeding", icon: BookOpen },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-card border-b border-border">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={familyLogo} alt="Family Dog Training" className="h-12 w-12 rounded-full" />
            <div>
              <span className="font-bold text-lg text-gradient block">Family Dog Training</span>
              <span className="text-xs text-muted-foreground">@ Mont Kiara & Kota Kemuning</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
                  <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="fixed top-0 right-0 h-full w-[280px] max-w-[85vw] bg-card border-l border-border shadow-xl animate-fade-in-right">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <Heart className="h-6 w-6 text-neon" />
                <span className="font-bold text-gradient">Menu</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-4 rounded-lg transition-all duration-200 group",
                      isActive 
                        ? "bg-neon/10 text-neon border-l-4 border-neon shadow-soft" 
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <item.icon 
                      size={22} 
                      className={cn(
                        "transition-all duration-200",
                        isActive ? "text-neon" : "group-hover:text-neon"
                      )} 
                    />
                    <span className="font-medium text-lg">{item.name}</span>
                  </NavLink>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}