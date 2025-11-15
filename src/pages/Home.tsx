import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Partners from '../components/sections/Partners'
import ServiceAreas from '../components/sections/ServiceAreas'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Partners />
      <ServiceAreas />
      <Contact />
    </>
  )
}