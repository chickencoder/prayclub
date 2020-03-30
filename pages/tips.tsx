import Button from '../components/button'
import { Heading, Text } from '../components/typography'
import Page from '../components/page'

const Tips: React.FC = () => (
  <Page>
    <div className="max-w-md mx-auto p-4">
      <Heading>Tips for Writing Prayer Club Cards</Heading>
      <Text>
        <ol className="list-inside list-decimal">
          <li>Keep it Short</li>
          <li>Keep it Simple</li>
          <li>Keep it Biblical</li>
        </ol>
      </Text>
      <Text>
        It's usually a good idea to focus on <b>one</b> theme for your prayer
        and base it around scripture.
      </Text>
      <Text>
        Use simple sentences and easy words to have the biggest possible reach
        and impact on others.
      </Text>
      <Button href="/create" className="block mt-8">
        Create a Card
      </Button>
    </div>
  </Page>
)

export default Tips
