import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="contact" className="py-24 lg:py-32 bg-white">
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
              Get in Touch
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
              Contact Us Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Have questions or need to schedule a ride? We're here to help. 
              Reach out to us and we'll respond as soon as possible.
            </p>
            
            {/* CTA Button to Open Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 h-14 px-10 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all hover:shadow-strong"
            >
              Send Us a Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              variants={fadeInUp}
            >
              <div className="p-8 bg-gradient-to-br from-muted/30 to-white border border-border/50 rounded-2xl h-full">
                <h3 className="text-xl font-semibold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Phone</p>
                      <a href="tel:+17692238440" className="text-muted-foreground hover:text-accent transition-colors">
                        +1 (769) 223-8440
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Email</p>
                      <a href="mailto:info@geoflexsolutions.com" className="text-muted-foreground hover:text-accent transition-colors">
                        info@geoflexsolutions.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Fax</p>
                      <p className="text-muted-foreground">+1 (346) 245-8277</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              variants={fadeInUp}
            >
              <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 rounded-2xl h-full">
                <h3 className="text-xl font-semibold text-primary mb-6">Office Locations</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-primary mb-2">Spring, Texas</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      6710 Spring Stuebner Rd, Ste 709<br />
                      Spring, TX 77389
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-2">Madison, Mississippi</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      272 Calhoun Station Pkwy<br />
                      Madison, MS 39110
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
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
                    Send Us a Message
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                  >
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Body - Form */}
                <form className="p-6 space-y-5">
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-semibold text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="block text-sm font-semibold text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-semibold text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-message" className="block text-sm font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 h-12 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 h-12 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all"
                    >
                      Send Message
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