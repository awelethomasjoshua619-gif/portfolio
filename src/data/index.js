export const PROJECTS = [
  {
    num: '01',
    name: 'Weather App',
    type: 'Weather dashboard',
    desc: 'A responsive weather dashboard that turns a city search or device location into current conditions and a five-day forecast. It supports Celsius and Fahrenheit, location suggestions, recent searches, and saved cities.',
    work: ['Built the weather search flow with suggestions and recent locations.', 'Connected current conditions and forecast data to WeatherAPI.', 'Added browser geolocation, unit switching, and saved cities in local storage.', 'Matched forecast weekday labels to the calendar date to prevent timezone shifts.'],
    stack: [
      { area: 'Interface', tools: ['React 19', 'TypeScript', 'Vite', 'CSS'] },
      { area: 'Data & browser features', tools: ['WeatherAPI', 'Browser Geolocation', 'Local Storage'] },
      { area: 'Icons', tools: ['Lucide React'] },
    ],
    challenge: 'Forecast dates could shift by a day across time zones. I adjusted the date handling so the weekday labels stay aligned with the forecast.',
    href: 'https://weather-app-indol-theta-75.vercel.app/',
  },
  {
    num: '02',
    name: 'HermioneHair',
    type: 'E-commerce platform',
    desc: 'A full-stack hair-care store with a customer storefront and a separate administration area. Customers can browse products, manage accounts, check out, and track orders; staff can manage stock, promotions, customers, and order status.',
    work: ['Built the React storefront and customer account journeys.', 'Created a typed Express API for products, accounts, discounts, and orders.', 'Connected PostgreSQL through Prisma for structured catalog and order data.', 'Integrated Paystack checkout and payment verification.', 'Added JWT authentication and two-factor authentication for administrator access.', 'Made stock changes transactional, deduplicated cart items, and restored inventory when payment initialization fails.'],
    stack: [
      { area: 'Customer & admin interface', tools: ['React', 'JavaScript', 'Vite', 'CSS'] },
      { area: 'API & server', tools: ['Node.js', 'Express', 'TypeScript'] },
      { area: 'Data & security', tools: ['PostgreSQL', 'Prisma', 'JWT', 'TOTP 2FA'] },
      { area: 'Payments & email', tools: ['Paystack', 'Resend'] },
    ],
    challenge: 'Checkout needed to stay consistent when inventory or payment steps failed. I tightened stock updates and cart handling, added a rollback for failed Paystack starts, and cleaned up stale pending orders.',
    href: 'https://harminonehair.vercel.app/',
  },
  {
    num: '03',
    name: 'Children Hope Foundation',
    type: 'Nonprofit platform',
    desc: 'A nonprofit platform that introduces the foundation, presents its causes and active campaigns, and gives supporters a way to learn about its work. The repository includes a client application and a separately built API and database layer.',
    work: ['Built a responsive public site for the foundation, its causes, campaigns, and impact.', 'Added client-side routing and animated page details.', 'Developed an Express API for campaign, impact, contact, and administration workflows.', 'Modelled application data in PostgreSQL with Prisma and added seed data for local setup.', 'Fixed the Vercel monorepo build so the client builds from its own package; the API remains a separate deployment target.'],
    stack: [
      { area: 'Interface', tools: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion', 'Lucide React'] },
      { area: 'API & server', tools: ['Node.js', 'Express', 'TypeScript'] },
      { area: 'Data & services', tools: ['PostgreSQL', 'Prisma', 'Paystack integration', 'Resend email'] },
    ],
    challenge: 'The client and API sit in a monorepo. I corrected the Vercel client root and build configuration so the frontend could build from its own package while the API remained a separate deployment target.',
    href: 'https://children-hope-foundation.vercel.app/',
  },
  {
    num: '04',
    name: 'CHEEF KEEF',
    type: 'Restaurant website',
    desc: 'A restaurant website built around food photography and a strong visual identity. Visitors can explore the menu and gallery, add menu items to a cart, and use the reservation flow; the project also includes an administration area.',
    work: ['Created responsive landing, menu, gallery, contact, and reservation pages.', 'Built reusable menu data and cart state for adding, removing, and updating item quantities.', 'Added administrator pages for menu items and reservations.', 'Used motion for page details while keeping the core navigation usable on mobile.', 'Configured the remote image host and repaired the menu route after production image loading failed.'],
    stack: [
      { area: 'Interface & framework', tools: ['Next.js 16', 'React 18', 'TypeScript', 'Tailwind CSS'] },
      { area: 'Motion & utilities', tools: ['GSAP', 'Framer Motion', 'React Lenis', 'Lucide React'] },
      { area: 'Application services', tools: ['Firebase Authentication', 'Cloud Firestore'] },
    ],
    challenge: 'Next.js rejected the menu photography because its remote image host was not allowed. I configured the image host and repaired the menu route so the image-rich menu could load.',
    href: 'https://cheef-keef.vercel.app/',
  },
  {
    num: '05',
    name: 'MarketMate',
    type: 'Seller commerce platform',
    desc: 'A seller workspace and customer storefront for independent shops. Shop owners can manage products, prices, stock, shop details, promotions, and order progress; customers can browse a public shop, add items to a cart, and place an order with delivery details and an offline payment preference.',
    work: ['Built a seller account flow and a sample shop workspace.', 'Added product create, edit, visibility, stock, and category management.', 'Created public shop pages, customer carts, promotion checks, and order placement.', 'Validated stock at checkout, reduced inventory for accepted orders, and restored it when orders are cancelled.', 'Added order status updates and a five-second refresh path for shared shop/order state.', 'Kept the payment boundary explicit: bank transfer and pay-on-delivery are recorded as preferences; the app does not collect or verify money.'],
    stack: [
      { area: 'Interface', tools: ['React 18', 'JavaScript', 'Vite', 'CSS'] },
      { area: 'API & server', tools: ['Node.js', 'Serverless API'] },
      { area: 'Data', tools: ['Local JSON store', 'Neon Postgres adapter for hosted setup'] },
      { area: 'Authentication', tools: ['Signed sessions', 'scrypt password hashing'] },
    ],
    challenge: 'I designed the order flow to recheck stock when a customer submits an order and to restore it when the seller cancels. The current Vercel preview reports that its shop database is not connected, so hosted account and order persistence are not verified there.',
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
    num: '5',
    suffix: '',
    label: 'Portfolio Projects',
    desc: 'Five web applications featured across commerce, nonprofit, restaurant, and weather products.'
  },
]


