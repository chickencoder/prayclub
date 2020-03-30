import { Heading, Text } from '../components/typography'
import Page from '../components/page'

const Tips: React.FC = () => (
  <Page>
    <div className="max-w-md mx-auto p-4">
      <Heading>About Us</Heading>
      <Text>
        <b>Pray Club</b> is about exploring new methods of prayer.
      </Text>
      <Text>
        Right now, we're trying to work out how we can use Instagram to
        encourage people to pray. And not just quiet, thoughtless prayers but
        big, daring prayers. We believe our God listens to us and wants us to
        pray.
      </Text>
    </div>
  </Page>
)

export default Tips
