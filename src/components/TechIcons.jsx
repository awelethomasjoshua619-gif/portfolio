import React from 'react'

export function ReactIcon({ size = 28, ...props }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} {...props}>
      <title>React</title>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  )
}

export function JSIcon({ size = 28, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <title>JavaScript</title>
      <path d="M0 0h24v24H0z" fill="#F7DF1E"/>
      <path d="M1.5 1.5v21h21v-21h-21zm14.7 15.2c-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-1.8h1.5c0 .4.1.7.3.9.2.2.6.3 1 .3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.2-.2-.6-.3-1.1-.5-.7-.2-1.3-.5-1.7-.8-.4-.3-.6-.8-.6-1.4 0-.6.2-1.2.7-1.6.5-.4 1.1-.6 1.9-.6.7 0 1.3.2 1.8.6.5.4.7 1 .7 1.7h-1.5c0-.4-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3-.3 0-.5.1-.7.2-.2.1-.2.3-.2.5 0 .2.1.4.3.5.2.1.6.3 1.2.5.7.2 1.2.5 1.6.8.4.3.6.8.6 1.4 0 .7-.2 1.3-.7 1.7-.6.5-1.3.7-2 .7zm-4.7-2.6c0 .7-.2 1.3-.7 1.7-.5.5-1.2.7-2.1.7-.8 0-1.4-.2-1.9-.6-.5-.4-.7-1-.7-1.7h1.5c0 .4.1.7.3.9.2.2.5.3.9.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.8V10h1.6v5.6z" fill="#000000"/>
    </svg>
  )
}

export function TSIcon({ size = 28, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <title>TypeScript</title>
      <path d="M0 0h24v24H0z" fill="#3178C6"/>
      <path d="M12.3 14.2c0 .4-.1.8-.3 1-.2.3-.5.4-.9.4-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.9H8.5c0 .7.2 1.3.7 1.7.5.5 1.2.7 2 .7.8 0 1.4-.2 1.9-.6.5-.4.7-1 .7-1.7V10H12.3v4.2zm6.2-4.2h-2.1v6.5h-1.6V11h-2.1V9.7h5.8V11z" fill="#FFFFFF"/>
    </svg>
  )
}

export function HTMLIcon({ size = 28, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <title>HTML5</title>
      <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.438L1.5 0z" fill="#E34F26"/>
      <path d="M12 2.18v19.67l6.83-1.94L20.32 3.86H12z" fill="#EF652A"/>
      <path d="M12 9.29H7.66l.3 3.39H12v2.99l-4.14-1.07-.27-3.09H4.91l.48 5.48L12 19.46V9.29z" fill="#EBEBEB"/>
      <path d="M12 9.29v7.18l4.14-1.07.54-6.11H12zm0-5.43v2.99h7.45l-.26 2.97H12v2.99h4.51l-.52 5.86L12 19.46v-3.79l.52-5.86H12z" fill="#FFFFFF"/>
    </svg>
  )
}

export function CSSIcon({ size = 28, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <title>CSS3</title>
      <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.438L1.5 0z" fill="#1572B6"/>
      <path d="M12 2.18v19.67l6.83-1.94L20.32 3.86H12z" fill="#33A9DC"/>
      <path d="M12 9.29H7.66l.3 3.39H12v2.99l-4.14-1.07-.27-3.09H4.91l.48 5.48L12 19.46V9.29z" fill="#EBEBEB"/>
      <path d="M12 9.29v7.18l4.14-1.07.54-6.11H12zm0-5.43v2.99h7.45l-.26 2.97H12v2.99h4.51l-.52 5.86L12 19.46v-3.79l.52-5.86H12z" fill="#FFFFFF"/>
    </svg>
  )
}

export function TailwindIcon({ size = 28, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <title>Tailwind CSS</title>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
    </svg>
  )
}

export function FigmaIcon({ size = 28, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <title>Figma</title>
      <path d="M12 0C8.685 0 6 2.685 6 6v3c0 3.315 2.685 6 6 6h3V6c0-3.315-2.685-6-6-6z" fill="#F24E1E"/>
      <path d="M6 12c0-3.315 2.685-6 6-6s6 2.685 6 6-2.685 6-6 6-6-2.685-6-6z" fill="#FF7262"/>
      <path d="M12 12c0-3.315 2.685-6 6-6s6 2.685 6 6-2.685 6-6 6-6-2.685-6-6z" fill="#1ABC9C"/>
      <path d="M12 15c-3.315 0-6 2.685-6 6s2.685 6 6 6 6-2.685 6-6v-3h-6z" fill="#0ACF83"/>
      <path d="M18 15v3c0 3.315-2.685 6-6 6s-6-2.685-6-6 2.685-6 6-6h6z" fill="#A259FF"/>
    </svg>
  )
}

export function GitIcon({ size = 28, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <title>Git</title>
      <path d="M23.384 11.41L12.59.616a1.686 1.686 0 0 0-2.388 0L9.05 1.77l3.197 3.197a1.69 1.69 0 0 1 2.392 2.392l2.91 2.91a1.69 1.69 0 0 1 2.104 2.52l-2.91-2.91v4.887a1.69 1.69 0 0 1-1.077 1.562V11.23a1.69 1.69 0 0 1-1.076-1.562V9.45a1.69 1.69 0 0 1-1.185-1.562v-2.98L7.337 7.037v5.526a1.69 1.69 0 0 1 .536 1.222c0 .93-.755 1.684-1.684 1.684a1.69 1.69 0 0 1-1.684-1.684c0-.756.5-1.4 1.185-1.583V6.892c-.685-.183-1.185-.827-1.185-1.583 0-.93.755-1.684 1.684-1.684.756 0 1.4.5 1.583 1.185L10.2 2.98a1.69 1.69 0 0 0 0 2.388l10.796 10.796a1.686 1.686 0 0 0 2.388 0z" fill="#F05032"/>
    </svg>
  )
}

export function GitHubIcon({ size = 28, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717"/>
    </svg>
  )
}

const icons = {
  react: ReactIcon,
  javascript: JSIcon,
  typescript: TSIcon,
  html5: HTMLIcon,
  css3: CSSIcon,
  tailwindcss: TailwindIcon,
  figma: FigmaIcon,
  git: GitIcon,
  github: GitHubIcon
}

export default function TechIcon({ name, ...props }) {
  const IconComponent = icons[name.toLowerCase()]
  if (!IconComponent) return null
  return <IconComponent {...props} />
}
