import { Heading, Text } from '../components/typography'
import Page from '../components/page'
import Link from 'next/link'
import Warning from '../components/warning'
import Spacer from '../components/spacer'

const Tips: React.FC = () => (
  <Page>
    <div className="max-w-md mx-auto p-4">
      <Heading>What is PrayClub?</Heading>
      <Text>
        The idea is simple; create a prayer card{' '}
        <Link href="/create">
          <a className="font-bold underline">here</a>
        </Link>
        {` `}
        and post it on your Instagram. Be intentional about what you write so
        that it provokes others to think and pray.{' '}
      </Text>
      <Spacer />
      <Warning />
      <Spacer />
      <Text>
        We ask that you make a habbit of sharing prayers regularly to encourage
        others.
      </Text>
      <Text>
        In our experience, small public acts of faith can have a considerable
        impact on those around us. Often, a simple instagram post is all that's
        needed to start a conversation.
      </Text>
    </div>
  </Page>
)

export default Tips
