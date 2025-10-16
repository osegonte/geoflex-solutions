import { motion } from 'framer-motion'

export default function Header() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link (scroll anchor), prevent default and smooth scroll
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50"
    >
      <div className="container-rosenfeld h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="Geoflex Solutions" 
            className="h-32 w-auto"
          />
        </a>
        
        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <a 
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          
          <a 
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          
          <a 
            href="/careers"
            className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            Careers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          
          <a 
            href="#partners"
            onClick={(e) => handleNavClick(e, '#partners')}
            className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            Partners
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          
          <a 
            href="/insights"
            className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            Insights
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>
        
        {/* Right: Contact */}
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Contact</span>
        </a>
      </div>
    </motion.header>
  )
}