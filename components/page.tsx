import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { initGA, logPageView } from '../lib/analytics'
import { Theme } from '../lib/themes'

declare global {
  interface Window {
    GA_INITIALIZED: boolean
  }
}

interface PageProps {
  children: React.ReactNode
  title?: string
  includeNav?: boolean
  theme?: Theme
}

const Page: React.FC<PageProps> = ({
  title = 'Pray Club',
  children,
  includeNav = true,
  theme
}) => {
  if (process.browser) {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {includeNav && <Nav fg={theme && theme.text} bg={theme && theme.bg} />}
      {children}
      <Footer />
    </>
  )
}

export default Page
