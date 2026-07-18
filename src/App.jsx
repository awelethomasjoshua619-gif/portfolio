import Nav     from './components/Nav'
import Hero    from './components/Hero'
import About   from './components/About'
import Stats   from './components/Stats'
import Work    from './components/Work'
import Contact from './components/Contact'
import Footer  from './components/Footer'
import Cursor  from './components/Cursor'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <div className="divider" />
      <About />
      <Stats />
      <Work />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  )
}
