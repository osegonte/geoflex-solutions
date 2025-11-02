import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const partners = {
  driverApps: [
    { name: 'iMedXpress', id: 'imedxpress' },
    { name: 'MediRoutes', id: 'mediroutes' }
  ],
  healthcarePartners: [
    { name: 'MTM', id: 'mtm' },
    { name: 'Humana', id: 'humana' },
    { name: 'Texas Children\'s Hospital', id: 'texas-childrens' },
    { name: 'Mississippi Children\'s Hospital', id: 'mississippi-childrens' },
    { name: 'Community Health', id: 'community-health' }
  ]
}

export default function Partners() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false)

  return (
    <>
      <section id="partners" className="py-16 lg:py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container-rosenfeld">
          {/* Section Header - Compact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-3">
              Our Partners & Affiliations
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary leading-tight">
              <span className="underline decoration-accent decoration-2 underline-offset-4">
                Trusted by Leading Healthcare Providers
              </span>
            </h2>
          </motion.div>

          {/* Driver Integration Apps */}
          <div className="mb-12">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              variants={fadeInUp}
              className="text-sm font-semibold text-accent tracking-wider uppercase mb-4 text-center"
            >
              Driver Integration Apps
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-xl mx-auto">
              {partners.driverApps.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="w-full"
                >
                  <div className="p-4 bg-primary rounded-2xl hover:shadow-medium transition-all duration-300 group cursor-pointer">
                    <div className="w-40 h-16 flex items-center justify-center mx-auto">
                      <span className="text-base font-semibold text-white group-hover:text-accent font-sans transition-colors duration-300">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Healthcare Network Partners */}
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              variants={fadeInUp}
              className="text-sm font-semibold text-accent tracking-wider uppercase mb-4 text-center"
            >
              Healthcare Network Partners
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {partners.healthcarePartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: (index + 2) * 0.1 }}
                  variants={fadeInUp}
                >
                  <div className="h-full p-4 bg-primary rounded-2xl hover:shadow-medium transition-all duration-300 group cursor-pointer">
                    <div className="w-32 h-16 flex items-center justify-center mx-auto">
                      <span className="text-sm font-semibold text-white group-hover:text-accent font-sans text-center leading-tight transition-colors duration-300">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partnership Inquiry CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Interested in partnering with Geoflex Solutions?
            </p>
            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="inline-flex items-center gap-2 h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all"
            >
              Submit Partnership Inquiry
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Partner Inquiry Modal - ABSOLUTELY NO SCROLLBAR */}
      <AnimatePresence>
        {isInquiryModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInquiryModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsInquiryModalOpen(false)
                }
              }}
            >
              <div className="bg-white rounded-2xl shadow-strong w-full max-w-2xl h-[85vh] flex flex-col overflow-hidden relative">
                {/* Modal Header - FIXED */}
                <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0 bg-white relative z-10">
                  <h3 className="text-2xl font-serif font-semibold text-primary">
                    Partnership Inquiry
                  </h3>
                  <button
                    onClick={() => setIsInquiryModalOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                  >
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Body - IFRAME WITH OVERLAY TO HIDE SCROLLBAR */}
                <div className="flex-1 relative overflow-hidden rounded-b-2xl">
                  {/* Iframe container with hidden scrollbar */}
                  <div 
                    className="absolute inset-0 overflow-y-scroll pr-4"
                    style={{
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      WebkitOverflowScrolling: 'touch'
                    }}
                  >
                    <style>
                      {`
                        .iframe-scroll-container::-webkit-scrollbar {
                          display: none;
                        }
                      `}
                    </style>
                    <div className="iframe-scroll-container">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd1HtgnE4-EiV82S14AmxzXD_7-tnILUyHU8UsGwnWjZxxkAQ/viewform?embedded=true"
                        width="100%" 
                        height="1600"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        className="w-full"
                        title="Partnership Inquiry Form"
                        style={{ 
                          border: 'none',
                          display: 'block'
                        }}
                      >
                        Loading…
                      </iframe>
                    </div>
                  </div>
                  
                  {/* White overlay to cover scrollbar area on the right */}
                  <div className="absolute top-0 right-0 w-4 h-full bg-white pointer-events-none rounded-br-2xl z-20" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}