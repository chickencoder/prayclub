import Preview from '../components/preview'
import Page from '../components/page'
import Button from '../components/button'
import Spacer from '../components/spacer'
import { Heading } from '../components/typography'

const Create: React.FC = () => (
  <Page>
    <div className="max-w-md mx-auto p-4">
      <Heading>Create a Card</Heading>
      <form>
        <label>
          <span className="block text-sm font-semibold tracking-wide mb-2">
            Instagram Username
          </span>
          <input
            name="instagram"
            type="text"
            placeholder="e.g. prayclub"
            className="text-lg py-1 px-2 border-2 border-black w-full"
          />
        </label>
        <Spacer size={2} />
        <label>
          <span className="block text-sm font-semibold tracking-wide mb-2">
            Card Type
          </span>
          <select
            name="instagram"
            placeholder="e.g. prayclub"
            className="text-lg py-1 px-2 border-2 border-black w-full"
          >
            <option>Instagram Story</option>
            <option>Instagram Post</option>
          </select>
        </label>
      </form>
      <Spacer size={2} />
      <label className="block text-sm font-semibold tracking-wide mb-2">
        Preview
      </label>
      <Preview />
      <Spacer size={2} />
      <Button href="/share" className="block bg-black text-white">
        Share
      </Button>
    </div>
  </Page>
)

export default Create
