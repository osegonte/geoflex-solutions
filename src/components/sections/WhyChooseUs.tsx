import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
}

const reasons = [
  {
    title: 'Safety First',
    description: 'Our drivers are thoroughly vetted, trained, and certified to ensure the highest standards of safety and professionalism.'
  },
  {
    title: 'Timely Service',
    description: 'We adhere to strict scheduling protocols to ensure that patients arrive at their appointments on time.'
  },
  {
    title: 'Compassionate Care',
    description: 'Our staff is dedicated to providing compassionate and respectful service, recognizing the unique needs of each individual.'
  },
  {
    title: 'State-of-the-Art Technology',
    description: 'Our use of advanced technology, including GPS and real-time tracking, enhances the efficiency and reliability of our services.'
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="container-rosenfeld">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInUp}
            className="flex-1 space-y-8"
          >
            <div>
              <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">
                Why Choose Us
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
                Excellence in Every Journey
              </h2>
            </div>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Image - UPDATED */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            variants={fadeInRight}
            className="w-full lg:w-2/5 flex-shrink-0"
          >
            <div className="h-[500px] rounded-2xl overflow-hidden shadow-medium">
              <img 
                src="/images/why-choose-us.jpg" 
                alt="Geoflex Solutions modern medical transport fleet"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}