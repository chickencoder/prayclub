import Link from 'next/link'

interface NavProps {
  fg: string
  bg: string
}

const Nav: React.FC<NavProps> = ({ fg = '', bg = '' }) => (
  <nav
    style={{ backgroundColor: bg, color: fg }}
    className="p-4 text-center bg-blood text-white mb-4"
  >
    <Link href="/">
      <a>
        <h1 className="font-black text-2xl tracking-wide">PRAY CLUB.</h1>
      </a>
    </Link>
  </nav>
)

export default Nav
