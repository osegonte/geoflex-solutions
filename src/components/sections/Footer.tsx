export default function Footer() {
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
    <footer className="bg-primary text-white">
      <div className="container-rosenfeld py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img src="/logo.svg" alt="Geoflex Solutions" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/70 text-sm leading-relaxed">
              Premier non-emergency medical transportation services across Texas and Mississippi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/careers" 
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#partners" 
                  onClick={(e) => handleNavClick(e, '#partners')}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a 
                  href="/insights" 
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Insights
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">Medical Appointments</li>
              <li className="text-white/70">Dialysis & Treatment</li>
              <li className="text-white/70">Discharge Transportation</li>
              <li className="text-white/70">Wheelchair Services</li>
              <li className="text-white/70">Special Needs Transport</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+17692238440" className="text-white/70 hover:text-accent transition-colors">
                  +1 (769) 223-8440
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@geoflexsolutions.com" className="text-white/70 hover:text-accent transition-colors">
                  info@geoflexsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 Geoflex Solutions LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}