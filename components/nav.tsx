import Link from 'next/link'

const Nav: React.FC = () => (
  <nav className="p-4 text-center bg-blood text-white mb-4">
    <Link href="/">
      <a>
        <h1 className="font-black text-2xl tracking-wide">PRAY CLUB.</h1>
      </a>
    </Link>
  </nav>
)

export default Nav
