import { useEffect, useState } from 'react'
import './LagosLife.css'

const districts = [
  { id: 'lekki', name: 'Lekki', tag: 'The new Lagos', icon: '🌴', tone: 'lekki', desc: 'Beach mornings, big plans and a city that never sits still.', rent: '₦35k' },
  { id: 'ikeja', name: 'Ikeja', tag: 'The mainland hub', icon: '🚉', tone: 'ikeja', desc: 'Find your people, build your career, catch the next danfo.', rent: '₦22k' },
  { id: 'yaba', name: 'Yaba', tag: 'Ideas live here', icon: '💡', tone: 'yaba', desc: 'A little code, a little suya, a lot of possibility.', rent: '₦18k' },
  { id: 'lagos-island', name: 'Lagos Island', tag: 'Old soul, new moves', icon: '🏙️', tone: 'island', desc: 'Trade, culture and the city’s most storied streets.', rent: '₦28k' },
]

const activities = {
  lekki: [
    { id: 'freelance', icon: '💻', title: 'Take a freelance gig', detail: 'A quick design job for a local business', cost: 0, pay: 42000, energy: -18, mood: 3, result: 'The client loves it. ₦42,000 lands in your account.' },
    { id: 'beach', icon: '🌊', title: 'Unwind by the water', detail: 'Clear your head at Landmark Beach', cost: 8000, pay: 0, energy: 17, mood: 14, result: 'The breeze does you good. You feel lighter already.' },
    { id: 'market', icon: '🛍️', title: 'Visit the craft market', detail: 'Pick up something for your new place', cost: 12000, pay: 0, energy: -4, mood: 7, result: 'You find a handmade piece that feels like home.' },
  ],
  ikeja: [
    { id: 'shift', icon: '🧾', title: 'Work a full shift', detail: 'Help out at a busy local shop', cost: 0, pay: 30000, energy: -22, mood: 1, result: 'A solid day’s work. Your wallet is a little heavier.' },
    { id: 'food', icon: '🍲', title: 'Eat a proper meal', detail: 'A warm plate of jollof and chicken', cost: 6500, pay: 0, energy: 18, mood: 10, result: 'Good food, good company. You’re recharged.' },
    { id: 'network', icon: '🤝', title: 'Meet people at a café', detail: 'Make connections around Ikeja', cost: 5000, pay: 8000, energy: -8, mood: 8, result: 'A new contact shares a small paid opportunity.' },
  ],
  yaba: [
    { id: 'build', icon: '🧑🏽‍💻', title: 'Build a side project', detail: 'Turn a weekend idea into something real', cost: 0, pay: 26000, energy: -20, mood: 8, result: 'Your little project gets its first paying customer.' },
    { id: 'learn', icon: '📚', title: 'Learn a new skill', detail: 'Invest in a short practical class', cost: 10000, pay: 0, energy: -9, mood: 11, result: 'You pick up a skill that opens a new door.' },
    { id: 'suya', icon: '🍢', title: 'Get suya with friends', detail: 'Catch up under the evening lights', cost: 4500, pay: 0, energy: 7, mood: 14, result: 'Laughter, pepper and stories from the week.' },
  ],
  'lagos-island': [
    { id: 'trade', icon: '📦', title: 'Help at the market', detail: 'A busy morning moving goods', cost: 0, pay: 35000, energy: -24, mood: 2, result: 'You earn a fair day’s pay and a trader’s respect.' },
    { id: 'gallery', icon: '🎨', title: 'See local art', detail: 'Take in a new exhibition', cost: 7000, pay: 0, energy: 4, mood: 15, result: 'A fresh perspective stays with you all evening.' },
    { id: 'errand', icon: '🛵', title: 'Run a quick delivery', detail: 'Help a neighbour get a parcel across town', cost: 2500, pay: 16000, energy: -13, mood: 4, result: 'One happy neighbour and ₦16,000 earned.' },
  ],
}

const initial = { name: 'Newcomer', district: 'lekki', cash: 185000, energy: 76, mood: 68, day: 1, ownedHome: false, log: ['You arrive in Lagos with a plan and ₦185,000. Your story starts today.'] }
const money = (amount) => `₦${Math.max(0, amount).toLocaleString('en-NG')}`

export default function LagosLife() {
  const [game, setGame] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lagos-life-save')) || initial } catch { return initial }
  })
  const [notice, setNotice] = useState('')
  const [showName, setShowName] = useState(false)
  const district = districts.find((item) => item.id === game.district) || districts[0]

  useEffect(() => { localStorage.setItem('lagos-life-save', JSON.stringify(game)) }, [game])
  useEffect(() => {
    document.title = 'Lagos Life — Your life. Your Lagos.'
    return () => { document.title = 'Awele Thomas Joshua Ikechukwu — Full-stack Developer' }
  }, [])
  useEffect(() => {
    if (!notice) return undefined
    const timer = window.setTimeout(() => setNotice(''), 3600)
    return () => window.clearTimeout(timer)
  }, [notice])

  const update = (next, message) => {
    setGame((current) => ({ ...current, ...next, log: [message, ...current.log].slice(0, 5) }))
    setNotice(message)
  }
  const travel = (nextDistrict) => {
    if (game.district === nextDistrict.id) return
    if (game.cash < 2500) return setNotice('You need ₦2,500 for a danfo ride across town.')
    update({ district: nextDistrict.id, cash: game.cash - 2500, energy: Math.max(0, game.energy - 4), day: game.day + 1 }, `You ride into ${nextDistrict.name}. Lagos keeps moving.`)
  }
  const doActivity = (activity) => {
    if (game.cash < activity.cost) return setNotice(`You need ${money(activity.cost)} for that. Try earning a little first.`)
    if (game.energy < Math.abs(Math.min(activity.energy, 0))) return setNotice('You’re too tired for that right now. Rest up first.')
    const cash = Math.max(0, game.cash - activity.cost + activity.pay)
    const energy = Math.min(100, Math.max(0, game.energy + activity.energy))
    const mood = Math.min(100, Math.max(0, game.mood + activity.mood))
    update({ cash, energy, mood, day: game.day + 1 }, activity.result)
  }
  const rest = () => update({ energy: Math.min(100, game.energy + 32), mood: Math.min(100, game.mood + 4), day: game.day + 1 }, 'You take a quiet day to rest. Tomorrow is yours.')
  const buyHome = () => {
    if (game.ownedHome) return setNotice('You already have a place to call your own. Welcome home.')
    if (game.cash < 750000) return setNotice(`Your first home costs ₦750,000. You’re ${money(750000 - game.cash)} away.`)
    update({ cash: game.cash - 750000, ownedHome: true, mood: Math.min(100, game.mood + 22), day: game.day + 1 }, 'You get the keys to your first home. Welcome to your own corner of Lagos!')
  }
  const reset = () => {
    if (window.confirm('Start a new Lagos story? This will replace your saved game on this device.')) {
      localStorage.removeItem('lagos-life-save')
      setGame(initial)
      setNotice('A fresh start. Lagos is waiting for you.')
    }
  }

  return (
    <main className="ll-game">
      <header className="ll-topbar">
        <a className="ll-brand" href="/" aria-label="Back to Awele’s portfolio"><span className="ll-brand-mark">L</span><span>LAGOS<span className="ll-brand-light">LIFE</span><small>A city is yours to make</small></span></a>
        <div className="ll-top-meta"><span className="ll-live"><i /> Your Lagos story</span><button className="ll-profile" onClick={() => setShowName(true)}><span className="ll-avatar">{game.name.slice(0, 1).toUpperCase()}</span>{game.name}<span>⌄</span></button></div>
      </header>
      <section className="ll-intro"><div><div className="ll-overline">LAGOS, NIGERIA <span>·</span> DAY {String(game.day).padStart(2, '0')}</div><h1>Your life.<br/><em>Your Lagos.</em></h1><p>Make your way, meet your people, and build a life that feels like yours.</p></div><div className="ll-weather"><span>☀️</span><div><b>Warm & bright</b><small>Perfect day to get out there</small></div></div></section>
      <section className="ll-dashboard" aria-label="Your status">
        <div className="ll-stat"><span className="ll-stat-icon">💵</span><div><small>IN YOUR WALLET</small><strong>{money(game.cash)}</strong></div></div>
        <div className="ll-stat"><span className="ll-stat-icon">⚡</span><div><small>ENERGY</small><strong>{game.energy}<span className="ll-unit"> / 100</span><i className="ll-meter"><i style={{ width: `${game.energy}%` }} /></i></strong></div></div>
        <div className="ll-stat"><span className="ll-stat-icon">💛</span><div><small>HOW YOU FEEL</small><strong>{game.mood}<span className="ll-unit"> / 100</span><i className="ll-meter ll-meter-gold"><i style={{ width: `${game.mood}%` }} /></i></strong></div></div>
        <div className="ll-stat ll-stat-home"><span className="ll-stat-icon">🏠</span><div><small>YOUR PLACE</small><strong>{game.ownedHome ? 'Homeowner' : 'Finding a home'}</strong></div></div>
      </section>
      <div className="ll-columns">
        <section className="ll-world">
          <div className="ll-section-head"><div><span className="ll-overline">FIND YOUR WAY</span><h2>Explore the city</h2></div><span className="ll-small-note">Pick a neighbourhood</span></div>
          <div className="ll-city-scene"><div className="ll-scene-sun"/><div className="ll-skyline"><span/><span/><span/><span/><span/><span/><span/></div><div className="ll-scene-road"><i/><i/><i/></div><div className="ll-scene-caption"><span>📍</span> Lagos is calling</div><div className="ll-scene-palm palm-one">🌴</div><div className="ll-scene-palm palm-two">🌴</div><div className="ll-scene-danfo">🚐</div></div>
          <div className="ll-districts">{districts.map((item) => <button key={item.id} className={`ll-district ${game.district === item.id ? 'is-active' : ''}`} onClick={() => travel(item)}><span className={`ll-district-icon ${item.tone}`}>{item.icon}</span><span className="ll-district-copy"><b>{item.name}</b><small>{item.tag}</small></span><span className="ll-district-arrow">{game.district === item.id ? 'HERE' : '↗'}</span></button>)}</div>
          <div className="ll-neighbourhood"><div><span className="ll-overline">YOU’RE IN</span><h3>{district.icon} {district.name}</h3><p>{district.desc}</p></div><div className="ll-rent"><small>ROOMS FROM</small><b>{district.rent}<span>/ night</span></b></div></div>
          <div className="ll-home-card"><div className="ll-home-illustration">{game.ownedHome ? '🪴' : '🗝️'}</div><div className="ll-home-copy"><span className="ll-overline">A PLACE OF YOUR OWN</span><h3>{game.ownedHome ? 'You’re home.' : 'Make room for a dream.'}</h3><p>{game.ownedHome ? 'Your front door. Your rules. Your Lagos.' : 'Save up, claim your keys, and make this city feel like home.'}</p></div><button onClick={buyHome} className="ll-home-button">{game.ownedHome ? 'HOME SWEET HOME' : '₦750k · GET THE KEYS'}</button></div>
        </section>
        <aside className="ll-side">
          <div className="ll-side-title"><div><span className="ll-overline">MAKE TODAY COUNT</span><h2>What feels right?</h2></div><span className="ll-action-count">{activities[game.district].length} IDEAS</span></div>
          <div className="ll-actions">{activities[game.district].map((activity) => <article className="ll-activity" key={activity.id}><span className="ll-activity-icon">{activity.icon}</span><div className="ll-activity-main"><h3>{activity.title}</h3><p>{activity.detail}</p><div className="ll-activity-meta">{activity.pay ? <span className="ll-gain">+{money(activity.pay)}</span> : null}{activity.cost ? <span className="ll-cost">{money(activity.cost)}</span> : null}<span className={activity.energy < 0 ? 'll-energy-down' : 'll-energy-up'}>{activity.energy > 0 ? '+' : ''}{activity.energy} energy</span></div></div><button aria-label={`Do activity: ${activity.title}`} className="ll-go" onClick={() => doActivity(activity)}>→</button></article>)}</div>
          <button className="ll-rest" onClick={rest}><span>🌙</span><span><b>Take a breather</b><small>Rest up and reset your energy</small></span><span className="ll-rest-value">+32 energy</span></button>
          <div className="ll-story"><div className="ll-story-top"><span className="ll-overline">YOUR STORY SO FAR</span><span>✦</span></div>{game.log.slice(0, 3).map((item, index) => <p className={index === 0 ? 'll-latest' : ''} key={`${item}-${index}`}>{index === 0 && <i/>}{item}</p>)}</div>
          <p className="ll-save-note"><span>✓</span> Your progress saves on this device</p>
        </aside>
      </div>
      <footer className="ll-footer"><span>MADE WITH <b>♡</b> FOR LAGOS</span><a href="/">A game by Awele Thomas Joshua <span>↗</span></a><button onClick={reset}>Start a new story</button></footer>
      {notice && <div className="ll-toast" role="status">{notice}</div>}
      {showName && <div className="ll-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowName(false) }}><form className="ll-name-modal" onSubmit={(event) => { event.preventDefault(); const value = new FormData(event.currentTarget).get('playerName').toString().trim(); if (value) setGame((current) => ({ ...current, name: value.slice(0, 20) })); setShowName(false) }}><button type="button" className="ll-modal-close" aria-label="Close" onClick={() => setShowName(false)}>×</button><span className="ll-overline">MAKE IT YOURS</span><h2>What should we call you?</h2><input name="playerName" autoFocus maxLength="20" defaultValue={game.name} aria-label="Your name"/><button className="ll-home-button" type="submit">LET’S GO</button></form></div>}
    </main>
  )
}
