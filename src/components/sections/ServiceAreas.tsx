import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const locations = [
  {
    state: 'Texas',
    city: 'Spring',
    address: '6710 Spring Stuebner Rd, Ste 709',
    zipCode: 'Spring, TX 77389',
    phone: '+1 (769) 223-8440'
  },
  {
    state: 'Mississippi',
    city: 'Madison',
    address: '272 Calhoun Station Pkwy',
    zipCode: 'Madison, MS 39110',
    phone: '+1 (769) 223-8440'
  }
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 lg:py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="container-rosenfeld">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">
            Service Areas
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
            Proudly Serving Texas & Mississippi
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide reliable non-emergency medical transportation across our service regions, 
            ensuring patients get to their appointments safely and on time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.state}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
              variants={fadeInUp}
            >
              <div className="h-full p-8 bg-white border-2 border-border/50 rounded-2xl hover:border-accent/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-primary mb-1">
                      {location.city}, {location.state}
                    </h3>
                    <p className="text-sm text-accent font-medium">Service Location</p>
                  </div>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p>{location.address}</p>
                      <p>{location.zipCode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="font-medium">{location.phone}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          variants={fadeInUp}
          className="rounded-2xl overflow-hidden border border-border/50 shadow-medium"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.234567890123!2d-95.55217990000001!3d30.078889900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2s6710%20Spring%20Stuebner%20Rd%2C%20Spring%2C%20TX%2077389!5e1!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Geoflex Solutions - Spring, Texas Office"
          />
        </motion.div>
      </div>
    </section>
  )
}