import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
}

export default function About() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    } else {
      navigate(href)
    }
  }

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="container-rosenfeld">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT: Placeholder Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInLeft}
            className="w-full lg:w-2/5 flex-shrink-0"
          >
            <div className="h-[400px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground font-medium">Image Placeholder</p>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            variants={fadeInUp}
            className="flex-1 space-y-6 text-left"
          >
            <p className="text-sm font-semibold text-accent tracking-wider uppercase">
              About Geoflex Solutions
            </p>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
              Bridging the Gap Between Patients and Healthcare
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed">
              Geoflex Solutions LLC is a premier provider of Non-Emergency Medical 
              Transportation services, dedicated to ensuring safe, reliable, 
              and comfortable transportation for individuals requiring medical 
              appointments, treatments, and other non-emergency healthcare needs.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              Our mission is to improve patient outcomes by providing exceptional 
              service that ensures timely arrivals, comfort, and peace of mind for 
              patients and their families.
            </p>
            
            {/* Two CTAs - Drive With Us + Become a Partner */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/careers" 
                onClick={(e) => handleNavClick(e, '/careers')}
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
              >
                Drive With Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a 
                href="#partners"
                onClick={(e) => handleNavClick(e, '#partners')}
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
              >
                Become a Partner
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}