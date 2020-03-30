import Logo from '../components/logo'
import Link from 'next/link'
import Page from '../components/page'
import Button from '../components/button'

const Index: React.FC = () => (
  <Page includeNav={false}>
    <main className="max-w-lg mx-auto px-4 py-12 text-center flex flex-col items-center justify-center">
      <Logo />
      <div className="w-full flex flex-col">
        <Button href="/about">About Us</Button>
        <Button href="/tips">Create a Card</Button>
      </div>
    </main>
  </Page>
)

export default Index
