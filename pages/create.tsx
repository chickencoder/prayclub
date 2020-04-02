import Preview from '../components/preview'
import Page from '../components/page'
import Spacer from '../components/spacer'
import Warning from '../components/warning'
import { Heading, Text } from '../components/typography'
import { useState, useRef, RefObject, useEffect } from 'react'
import { CardType } from '../components/preview'
import themes from '../lib/themes'
import canvg from 'canvg'

function downloadFile(uri, name) {
  const link = document.createElement('a')
  link.download = name
  link.href = uri
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const Create: React.FC = () => {
  const [cardType, setCardType] = useState<CardType>(CardType.Story)
  const [prayer, setPrayer] = useState<string>('')
  const [theme, setTheme] = useState<number>(0)
  const svgRef = useRef<SVGElement>() as RefObject<SVGSVGElement>
  const [height, setHeight] = useState(0)
  const width = 1080

  useEffect(() => {
    setHeight(cardType == CardType.Post ? 1080 : 1920)
  }, [cardType])

  function download() {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height

    const v = canvg.fromString(context, svgRef.current.outerHTML)
    v.start()
    downloadFile(canvas.toDataURL(), 'prayclub.png')
  }

  return (
    <Page theme={themes[theme]}>
      <div className="max-w-md mx-auto p-4">
        <Heading>Create a Card</Heading>
        <form>
          <label>
            <span className="block text-sm font-semibold tracking-wide mb-2">
              Type
            </span>
            <select
              name="instagram"
              placeholder="e.g. prayclub"
              className="text-lg py-1 px-2 border-2 border-black w-full rounded-none"
              onChange={(e) =>
                setCardType(parseInt(e.target.value) as CardType)
              }
            >
              <option value="0">Instagram Story</option>
              <option value="1">Instagram Post</option>
            </select>
          </label>
          <Spacer size={2} />
          <label>
            <span className="block text-sm font-semibold tracking-wide mb-2">
              Prayer
            </span>
            <textarea
              value={prayer}
              onChange={(e) => setPrayer(e.target.value)}
              rows={5}
              cols={5}
              wrap="hard"
              className="text-lg py-1 px-2 border-2 border-black w-full rounded-none"
              placeholder="i.e. Lord, Thank you..."
            />
          </label>
          <Spacer size={2} />
          <label>
            <span className="block text-sm font-semibold tracking-wide mb-2">
              Colours
            </span>
            <select
              name="instagram"
              className="text-lg py-1 px-2 border-2 border-black w-full rounded-none"
              onChange={(e) => setTheme(parseInt(e.target.value))}
            >
              {themes.map((theme, index) => (
                <option key={index} value={index}>
                  {theme.name}
                </option>
              ))}
            </select>
          </label>
        </form>
        <Spacer size={2} />
        <label className="block text-sm font-semibold tracking-wide mb-2">
          Preview
        </label>
        <Preview
          width={width}
          height={height}
          text={prayer}
          theme={themes[theme]}
          svgRef={svgRef}
        />
        <Spacer size={2} />
        <button
          onClick={(e) => download()}
          className="block w-full bg-black text-white text-center text-lg px-8 py-2 border-2 hover:bg-black hover:text-white border-black font-medium mb-4"
        >
          Download
        </button>
        <Spacer />
        <Warning />
      </div>
    </Page>
  )
}

export default Create
