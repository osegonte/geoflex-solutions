import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const requirements = [
  'Driver\'s License',
  'Vehicle Registration Document',
  'Drug Test',
  'Defensive Driving',
  'Driving Record',
  'CPR & First Aid Training',
  'Insurance',
  'SSN Card'
]

export default function Careers() {
  const handleEmailDocuments = () => {
    const subject = encodeURIComponent('Driver Application Documents')
    const body = encodeURIComponent(`Hello,

Please find attached my application documents:

☐ Driver's License
☐ Vehicle Registration Document
☐ Drug Test
☐ Defensive Driving Certificate
☐ Driving Record
☐ CPR & First Aid Training Certificate
☐ Insurance
☐ SSN Card

Name: 
Phone: 
Email: 

Thank you!`)
    
    window.location.href = `mailto:geoflexsolutions@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* HERO SECTION */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-white">
        <div className="container-rosenfeld">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">
              Join Our Team
            </p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              Drive With Geoflex
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our team of professional drivers making a difference in people's lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* APPLICATION FORM SECTION */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-rosenfeld">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
              Driver Application Form
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete the form below to start your application process.
            </p>
          </motion.div>

          {/* GOOGLE FORM EMBED */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl shadow-medium overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfurxfm8xbkbdCgz8GNJfqoGvz7-HAuO74GYc_1NO6JreZM1Q/viewform?embedded=true"
                width="100%" 
                height="1742"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Driver Application Form"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>

          {/* REQUIRED DOCUMENTS SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-accent/20 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif font-semibold text-primary mb-4">
                  Required Documents
                </h3>
                <p className="text-muted-foreground">
                  Please prepare the following documents to complete your application
                </p>
              </div>

              {/* Requirements List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground font-medium">{requirement}</span>
                  </div>
                ))}
              </div>

              {/* EMAIL DOCUMENTS BUTTON */}
              <div className="text-center mb-8">
                <button
                  onClick={handleEmailDocuments}
                  className="inline-flex items-center gap-3 h-16 px-12 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all text-lg hover:shadow-strong"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Your Documents
                </button>
                <p className="text-sm text-muted-foreground mt-4">
                  Click the button above to open your email client and send all required documents to:<br />
                  <a href="mailto:geoflexsolutions@gmail.com" className="text-accent font-semibold hover:underline">
                    geoflexsolutions@gmail.com
                  </a>
                </p>
              </div>

              {/* FINGERPRINT INSTRUCTIONS */}
              <div className="p-6 bg-white border-2 border-primary/20 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      Fingerprint Requirement
                    </h4>
                    <p className="text-foreground leading-relaxed mb-3">
                      Please make time for fingerprints at the sheriff county office:
                    </p>
                    <div className="space-y-2 text-foreground">
                      <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span><strong>Location:</strong> 221 N Timber St, Brandon, MS 39042</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><strong>Cost:</strong> FREE</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span><strong>Ask for:</strong> Becky</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-3">
                        Mississippi State
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DRUG-FREE WORKPLACE POLICY */}
      <section className="py-16 bg-accent/5">
        <div className="container-rosenfeld">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 lg:p-12 bg-white border-2 border-accent/20 rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                    Drug-Free Workplace Policy
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Geoflex Solutions is committed to maintaining a safe, healthy, and productive 
                    work environment for all employees and the patients we serve. As a medical 
                    transportation provider, safety is our top priority.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    All applicants must successfully pass a comprehensive drug screening as part 
                    of the hiring process.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}