import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

interface PageProps {
  children: React.ReactNode
  title?: string
  includeNav?: boolean
}

const Page: React.FC<PageProps> = ({
  title = 'Pray Club',
  children,
  includeNav = true
}) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
    </Head>
    {includeNav && <Nav />}
    {children}
    <Footer />
  </>
)

export default Page
