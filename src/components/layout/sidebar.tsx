import { useState } from "react"
import { NavLink, useLocation, Link } from "react-router-dom"
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
  { name: "Schedules", href: "/schedules", icon: Contact },
  { name: "Potty Training", href: "/potty-training", icon: BookOpen },
  { name: "Loose Leash", href: "/loose-leash", icon: BookOpen },
  { name: "Hand Feeding", href: "/hand-feeding", icon: BookOpen },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  return (
    <div className={cn(
      "hidden lg:flex flex-col h-screen bg-card border-r border-border transition-all duration-300",
      isCollapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img src={familyLogo} alt="Family Dog Training" className="h-12 w-12 rounded-full" />
              <div>
                <span className="font-bold text-lg text-gradient block">
                  Family Dog Training
                </span>
                <span className="text-xs text-muted-foreground">@ Mont Kiara & Kota Kemuning</span>
              </div>
            </Link>
          </div>
        )}
        {isCollapsed && (
          <div className="flex items-center justify-center w-full">
            <Heart className="h-6 w-6 text-neon" />
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto"
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 sidebar-nav">
        <div className="flex-1 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-neon/10 text-neon border-l-4 border-neon shadow-soft" 
                    : "text-foreground hover:bg-accent hover:text-accent-foreground",
                  isCollapsed && "justify-center px-2"
                )}
              >
                <item.icon 
                  size={20} 
                  className={cn(
                    "transition-all duration-200",
                    isActive ? "text-neon" : "group-hover:text-neon"
                  )} 
                />
                {!isCollapsed && (
                  <span className="font-medium">{item.name}</span>
                )}
              </NavLink>
            )
          })}
        </div>
        
        {/* Contact Us Link - Always at Bottom */}
        <NavLink
          to="/contact"
          className="contact-link"
        >
          <Contact size={20} />
          {!isCollapsed && <span>Contact Us</span>}
        </NavLink>
      </nav>

      {/* Theme Toggle */}
      <div className={cn(
        "p-4 border-t border-border",
        isCollapsed ? "flex justify-center" : "flex justify-end"
      )}>
        <ThemeToggle />
      </div>
    </div>
  )
}