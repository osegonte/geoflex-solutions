import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const articles = [
  {
    title: 'Why Non-Emergency Medical Transportation Matters',
    excerpt: 'Discover how reliable NEMT services improve patient outcomes and reduce missed appointments in healthcare systems.',
    date: 'March 15, 2025',
    category: 'Patient Care',
    readTime: '5 min read',
    image: 'from-primary/10 to-accent/5' // gradient placeholder
  },
  {
    title: 'What to Expect as a Medical Transport Driver',
    excerpt: 'Learn about the daily responsibilities, challenges, and rewards of working in non-emergency medical transportation.',
    date: 'March 10, 2025',
    category: 'Careers',
    readTime: '7 min read',
    image: 'from-accent/10 to-primary/5'
  },
  {
    title: 'Healthcare Transportation Safety Best Practices',
    excerpt: 'Essential safety protocols and guidelines that ensure secure and comfortable transportation for patients with medical needs.',
    date: 'March 5, 2025',
    category: 'Safety',
    readTime: '6 min read',
    image: 'from-primary/5 to-accent/10'
  },
  {
    title: 'The Role of Technology in Modern Medical Transport',
    excerpt: 'How GPS tracking, route optimization, and digital communication enhance the reliability of NEMT services.',
    date: 'February 28, 2025',
    category: 'Technology',
    readTime: '5 min read',
    image: 'from-accent/5 to-primary/10'
  },
  {
    title: 'Supporting Elderly Patients During Transportation',
    excerpt: 'Compassionate care techniques and accessibility considerations for safely transporting senior patients.',
    date: 'February 20, 2025',
    category: 'Patient Care',
    readTime: '6 min read',
    image: 'from-primary/10 to-accent/10'
  },
  {
    title: 'Building Partnerships with Healthcare Facilities',
    excerpt: 'How transportation providers and medical facilities collaborate to improve patient access to care.',
    date: 'February 15, 2025',
    category: 'Partnerships',
    readTime: '8 min read',
    image: 'from-accent/10 to-primary/10'
  }
]

export default function Insights() {
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
              Insights & Resources
            </p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              Knowledge Hub
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore articles, guides, and insights about non-emergency medical transportation, 
              patient care, and the healthcare transportation industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-rosenfeld">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="h-full flex flex-col bg-gradient-to-br from-muted/30 to-white border border-border/50 rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  {/* Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${article.image} flex items-center justify-center`}>
                    <p className="text-muted-foreground/50 font-medium text-sm">Article Image</p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4 text-sm">
                      <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full">
                        {article.category}
                      </span>
                      <span className="text-muted-foreground">{article.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 rounded-2xl">
              <div className="flex items-center gap-3 justify-center mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <h3 className="text-xl font-semibold text-primary">More Articles Coming Soon</h3>
              </div>
              <p className="text-muted-foreground">
                We're regularly publishing new insights about healthcare transportation and patient care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-primary/5">
        <div className="container-rosenfeld">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary mb-6">
              Have Questions or Topics You'd Like Us to Cover?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Reach out to us with your questions or suggestions for future articles.
            </p>
            <a 
              href="/#contact"
              className="inline-flex items-center gap-2 h-14 px-10 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-medium transition-all"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}