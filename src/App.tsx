import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Testimonials from './components/sections/Testimonials'
import ServiceAreas from './components/sections/ServiceAreas'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
    </div>
  )
}

export default App