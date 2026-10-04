import Nav     from './components/Nav'
import Hero    from './components/Hero'
import About   from './components/About'
import Stats   from './components/Stats'
import Work    from './components/Work'
import Contact from './components/Contact'
import Footer  from './components/Footer'
import LagosLife from './components/LagosLife'

export default function App() {
  if (window.location.pathname === '/game' || window.location.pathname === '/game/') {
    return <LagosLife />
  }

  return (
    <>
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
