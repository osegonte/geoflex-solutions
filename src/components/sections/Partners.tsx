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
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      
      alert('Thank you for your partnership inquiry! We will contact you within 48 hours.')
      form.reset()
      setIsInquiryModalOpen(false)
    } catch (error) {
      alert('There was an error submitting your inquiry. Please try emailing us directly at info@geoflexsolutions.com')
    } finally {
      setIsSubmitting(false)
    }
  }

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
                      {/* TO REPLACE WITH LOGO: Swap the span below with:
                          <img src={`/partners/${partner.id}.svg`} alt={partner.name} className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
                      */}
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
                      {/* TO REPLACE WITH LOGO: Swap the span below with:
                          <img src={`/partners/${partner.id}.svg`} alt={partner.name} className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
                      */}
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

      {/* Partner Inquiry Modal */}
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
            >
              <div className="bg-white rounded-2xl shadow-strong max-w-lg w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
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

                {/* Modal Body - Form */}
                <form 
                  action="https://formsubmit.co/info@geoflexsolutions.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="p-6 space-y-5"
                >
                  {/* Hidden FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New Partnership Inquiry - Geoflex Solutions" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div>
                    <label htmlFor="facility-name" className="block text-sm font-semibold text-primary mb-2">
                      Facility/Organization Name *
                    </label>
                    <input
                      type="text"
                      id="facility-name"
                      name="facilityName"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Memorial Hospital"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-person" className="block text-sm font-semibold text-primary mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contact-person"
                      name="contactPerson"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="partner-email" className="block text-sm font-semibold text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="partner-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@hospital.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="partner-phone" className="block text-sm font-semibold text-primary mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="partner-phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="facility-type" className="block text-sm font-semibold text-primary mb-2">
                      Facility Type *
                    </label>
                    <select
                      id="facility-type"
                      name="facilityType"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    >
                      <option value="">Select facility type</option>
                      <option value="hospital">Hospital</option>
                      <option value="clinic">Clinic</option>
                      <option value="care-center">Care Center</option>
                      <option value="dialysis">Dialysis Center</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location-state" className="block text-sm font-semibold text-primary mb-2">
                      Location/State *
                    </label>
                    <select
                      id="location-state"
                      name="locationState"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    >
                      <option value="">Select state</option>
                      <option value="TX">Texas</option>
                      <option value="MS">Mississippi</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="partner-message" className="block text-sm font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="partner-message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your partnership needs..."
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsInquiryModalOpen(false)}
                      className="flex-1 h-12 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 h-12 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}