import { motion } from 'framer-motion'

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
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container-rosenfeld w-full">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Headline - Centered */}
          <motion.h1 
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            Reliable Non-Emergency
            <br />
            Medical Transportation
          </motion.h1>
          
          {/* Tagline - Centered */}
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-xl text-muted-foreground font-medium mb-12"
          >
            Safe · Punctual · Compassionate
          </motion.p>
          
          {/* CTAs - Centered */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ 
                y: -2, 
                boxShadow: '0 10px 25px rgb(249 115 22 / 0.25)' 
              }}
              whileTap={{ scale: 0.98 }}
              className="h-14 px-10 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all text-base"
            >
              Book a Ride
            </motion.button>
            
            {/* Secondary CTA */}
            <motion.button
              whileHover={{ 
                y: -2, 
                backgroundColor: 'rgb(20 33 61 / 0.03)' 
              }}
              whileTap={{ scale: 0.98 }}
              className="h-14 px-10 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all text-base"
            >
              For Healthcare Partners
            </motion.button>
          </motion.div>
          
          {/* Supporting Text - Centered */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-sm text-muted-foreground font-medium mt-10"
          >
            Serving Texas & Mississippi
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}