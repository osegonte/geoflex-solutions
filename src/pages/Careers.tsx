import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Competitive Pay',
    description: 'Industry-leading compensation with regular raises and performance bonuses'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Scheduling',
    description: 'Choose shifts that work with your lifestyle - full-time and part-time available'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Health Benefits',
    description: 'Comprehensive health, dental, and vision insurance for you and your family'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Training & Development',
    description: 'Ongoing professional development and certification assistance'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Supportive Team',
    description: 'Join a compassionate team dedicated to making a difference'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Modern Fleet',
    description: 'Drive well-maintained, comfortable vehicles with the latest safety features'
  }
]

const requirements = [
  'Valid driver\'s license (Class C minimum)',
  'Clean driving record (no major violations in past 3 years)',
  'High school diploma or GED equivalent',
  'CPR and First Aid certification (or willingness to obtain)',
  'Pass drug screening and background check',
  'Excellent communication and customer service skills',
  'Physical ability to assist passengers as needed',
  'Reliable and punctual with strong work ethic'
]

const processSteps = [
  {
    number: '1',
    title: 'Submit Application',
    description: 'Complete our online application form with your information and experience'
  },
  {
    number: '2',
    title: 'Initial Screening',
    description: 'Our team reviews your application and contacts qualified candidates within 48 hours'
  },
  {
    number: '3',
    title: 'Interview',
    description: 'Meet with our hiring team to discuss your experience and learn more about the role'
  },
  {
    number: '4',
    title: 'Background Check',
    description: 'Complete drug screening, background check, and driving record verification'
  },
  {
    number: '5',
    title: 'Training',
    description: 'Participate in our comprehensive training program covering safety, procedures, and customer service'
  },
  {
    number: '6',
    title: 'Start Driving',
    description: 'Begin your rewarding career helping patients get to their medical appointments safely'
  }
]

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // FormSubmit.co will handle the actual submission
    const form = e.currentTarget
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      
      // Show success message
      alert('Thank you for your application! We will review it and contact you within 48 hours.')
      form.reset()
    } catch (error) {
      alert('There was an error submitting your application. Please try emailing us directly at info@geoflexsolutions.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* SECTION 1: HERO */}
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
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Make a meaningful difference in people's lives while building a rewarding career 
              in non-emergency medical transportation. We're looking for compassionate, 
              reliable drivers to join our growing team.
            </p>
            <a 
              href="#application"
              className="inline-flex items-center gap-2 h-14 px-10 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all"
            >
              Apply Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: BENEFITS */}
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
            <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">
              Why Join Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
              Benefits & Perks
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                variants={fadeInUp}
              >
                <div className="h-full p-8 bg-gradient-to-br from-muted/30 to-white border border-border/50 rounded-2xl hover:shadow-medium transition-all duration-300">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: REQUIREMENTS */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-muted/30">
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
              Qualifications
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
              Driver Requirements
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white border border-border/50 rounded-xl">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-foreground leading-relaxed">{requirement}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: APPLICATION PROCESS */}
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
            <p className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
              Application Process
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="h-full p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 rounded-2xl">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connector Arrow (hidden on mobile, last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent/30">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DRUG-FREE WORKPLACE POLICY */}
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
                  <p className="text-foreground leading-relaxed mb-4">
                    All applicants must successfully pass a comprehensive drug screening as part 
                    of the hiring process. We conduct random drug testing throughout employment 
                    and maintain a zero-tolerance policy for drug and alcohol use during work hours 
                    or while operating company vehicles.
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    This policy ensures the safety of our drivers, passengers, and community while 
                    maintaining the highest standards of professional medical transportation services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: APPLICATION FORM */}
      <section id="application" className="py-24 lg:py-32 bg-white">
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
              Ready to Join?
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight mb-6">
              Driver Application Form
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete the form below and we'll get back to you within 48 hours. 
              All fields marked with * are required.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <form 
              action="https://formsubmit.co/info@geoflexsolutions.com"
              method="POST"
              onSubmit={handleSubmit}
              className="p-8 lg:p-12 bg-gradient-to-br from-muted/30 to-white border border-border/50 rounded-2xl space-y-6"
            >
              {/* Hidden FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Driver Application - Geoflex Solutions" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-primary mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* License Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="licenseNumber" className="block text-sm font-semibold text-primary mb-2">
                    Driver's License Number *
                  </label>
                  <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="DL123456"
                  />
                </div>

                <div>
                  <label htmlFor="licenseState" className="block text-sm font-semibold text-primary mb-2">
                    License State *
                  </label>
                  <select
                    id="licenseState"
                    name="licenseState"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  >
                    <option value="">Select state</option>
                    <option value="TX">Texas</option>
                    <option value="MS">Mississippi</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Vehicle Ownership */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  Do you own a vehicle? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasVehicle"
                      value="yes"
                      required
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-foreground">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasVehicle"
                      value="no"
                      required
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-foreground">No</span>
                  </label>
                </div>
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-primary mb-2">
                  Years of Driving Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="">Select experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              {/* Medical Transport Experience */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  Do you have medical transportation experience?
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="medicalExperience"
                      value="yes"
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-foreground">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="medicalExperience"
                      value="no"
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-foreground">No</span>
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-primary mb-2">
                  Tell us why you'd be a great fit (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Share your relevant experience, skills, or what excites you about this opportunity..."
                />
              </div>

              {/* Resume Upload Note */}
              <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Note:</strong> After submitting this form, please email your resume to{' '}
                  <a href="mailto:info@geoflexsolutions.com" className="text-accent hover:underline">
                    info@geoflexsolutions.com
                  </a>{' '}
                  with the subject line "Driver Application - [Your Name]"
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you acknowledge our drug-free workplace policy 
                and consent to background and drug screening checks.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}