import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import BackgroundLogo from '../ui/BackgroundLogo'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
}

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Background Logo */}
      <BackgroundLogo />
      
      {/* Content on LEFT 50% */}
      <div className="container-rosenfeld w-full relative z-10">
        <div className="w-full lg:w-1/2" style={{ marginTop: '-80px' }}>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Main Headline - TWO TONE */}
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-left"
            >
              <span className="text-primary">Reliable Non-Emergency</span>
              <br />
              <span className="text-primary">Medical Transportation</span>
              <br />
              <span className="text-accent">With Care That Moves You</span>
            </motion.h1>
            
            {/* Tagline */}
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-xl text-muted-foreground font-medium text-left ml-8"
            >
              Safe · Punctual · Compassionate
            </motion.p>
            
            {/* CTAs - ONLY "JOIN US AS A DRIVER" BUTTON */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-start pt-4"
            >
              <motion.button
                onClick={() => navigate('/careers')}
                whileHover={{ 
                  y: -2, 
                  boxShadow: '0 10px 25px rgb(241 119 50 / 0.25)' 
                }}
                whileTap={{ scale: 0.98 }}
                className="h-14 px-10 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all text-base"
              >
                Join Us as a Driver
              </motion.button>
            </motion.div>
            
            {/* Supporting Text */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-sm text-muted-foreground font-medium text-left"
            >
              Serving Texas & Mississippi
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}