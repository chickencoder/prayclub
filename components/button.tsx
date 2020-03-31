import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  href: string
}

const Button: React.FC<ButtonProps> = ({ children, className = '', href }) => (
  <Link href={href}>
    <a
      role="button"
      className={`${className} text-center text-lg px-8 py-2 border-2 hover:bg-black hover:text-white border-black font-medium mb-4`}
    >
      {children}
    </a>
  </Link>
)

export default Button
