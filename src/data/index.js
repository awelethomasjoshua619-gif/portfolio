export const PROJECTS = [
  {
    num: '01',
    name: 'Weather App',
    type: 'Weather dashboard',
    desc: 'A live weather dashboard for city search and local forecasts, with current conditions, a five-day outlook, temperature units, location lookup, and saved favorite cities.',
    tags: ['React', 'TypeScript', 'Vite', 'WeatherAPI', 'Lucide React'],
    challenge: 'Forecast dates could shift by a day across time zones. I adjusted the date handling so the weekday labels stay aligned with the forecast.',
    href: 'https://weather-app-indol-theta-75.vercel.app/',
  },
  {
    num: '02',
    name: 'HermioneHair',
    type: 'E-commerce platform',
    desc: 'A hair-care storefront and order platform, with product browsing, customer accounts, order tracking, and an admin dashboard for products, orders, and discounts.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'TypeScript API', 'PostgreSQL', 'Prisma', 'Paystack'],
    challenge: 'Checkout needed to stay consistent when inventory or payment steps failed. I tightened stock updates and cart handling, added a rollback for failed Paystack starts, and cleaned up stale pending orders.',
    href: 'https://harminonehair.vercel.app/',
  },
  {
    num: '03',
    name: 'Children Hope Foundation',
    type: 'Nonprofit platform',
    desc: 'A public-facing foundation site for discovering causes and campaigns, understanding the organization’s approach, and following verified campaign updates.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express API', 'PostgreSQL', 'Prisma'],
    challenge: 'The client and API sit in a monorepo. I corrected the Vercel client root and build configuration so the frontend could build from its own package while the API remained a separate deployment target.',
    href: 'https://children-hope-foundation.vercel.app/',
  },
  {
    num: '04',
    name: 'CHEEF KEEF',
    type: 'Restaurant website',
    desc: 'A bold restaurant experience with a photo-led home page, menu and specials, gallery, table reservations, and a cart-backed menu flow.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'GSAP', 'Framer Motion'],
    challenge: 'Next.js rejected the menu photography because its remote image host was not allowed. I configured the image host and repaired the menu route so the image-rich menu could load.',
    href: 'https://cheef-keef.vercel.app/',
  },
  {
    num: '05',
    name: 'MarketMate',
    type: 'Seller commerce platform',
    desc: 'A calm seller studio concept for independent shops to present their work, manage orders, and give customers a simple place to shop. The deployed preview includes account entry and a sample-shop path.',
    tags: ['React', 'JavaScript', 'Vite', 'CSS', 'Browser storage'],
    challenge: 'The deployed preview does not have a shop database connected. It clearly labels sample data as device-only, so visitors know account and order data are not yet persistent.',
    href: 'https://marketmate-seven.vercel.app/',
  },
]

export const SKILLS = [
  { name: 'React', icon: 'react' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
]

export const CONTACT_LINKS = [
  {
    label: 'Awelethomasjoshua619@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=Awelethomasjoshua619@gmail.com',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348134018568',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/awele-thomas-joshua-926b543a9?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/awelethomasjoshua619-gif',
  },
]

export const STATS = [
  { 
    num: '1', 
    suffix: '+', 
    label: 'Year of Experience',
    desc: 'Building responsive interfaces and clean React applications.'
  },
  { 
    num: '4', 
    suffix: '+', 
    label: 'Public Repositories',
    desc: 'Open-source projects, UI libraries, and code bases hosted on GitHub.'
  },
  { 
    num: '4',
    suffix: '+', 
    label: 'Production Web Apps',
    desc: 'Active commercial sites, client platforms, and deployed applications.'
  },
]


