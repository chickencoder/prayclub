import { Theme } from '../lib/themes'
import { RefObject } from 'react'

export enum CardType {
  Story,
  Post
}

interface TextProps {
  text?: string
  fill: string
}
interface PreviewProps {
  text?: string
  theme: Theme
  svgRef: RefObject<SVGSVGElement>
  width: number
  height: number
}

function formatText(text: string): Array<string> {
  return text
    .toUpperCase()
    .replace(/(?![^\n]{1,19}$)([^\n]{1,19})\s/g, '$1\n')
    .split('\n')
}

export const Text: React.FC<TextProps> = ({ text = '', fill }) => {
  const offsetY = 200
  const lineHeight = 90
  const output = formatText(text)

  return (
    <>
      <text
        fill={fill}
        fontFamily="Inter"
        fontSize="64"
        fontWeight="900"
        letterSpacing="0.1em"
      >
        {output &&
          output.map((text, index) => {
            return (
              <tspan key={index} x="50" y={index * lineHeight + offsetY}>
                {text}
              </tspan>
            )
          })}
      </text>
    </>
  )
}

const Preview: React.FC<PreviewProps> = ({
  text = '',
  theme,
  svgRef,
  width,
  height
}) => {
  return (
    <div>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full border-2 border-black"
      >
        <rect width={width} height={height} fill={theme.bg} />
        <Text text={text} fill={theme.text} />
        <text
          fill={theme.footer}
          fontFamily="Inter"
          fontSize="48"
          fontWeight="900"
          letterSpacing="0.05em"
        >
          <tspan x="50" y={height - 95}>
            PRAY&#10;
          </tspan>
          <tspan x="50" y={height - 50}>
            CLUB.
          </tspan>
        </text>
        <text
          fill={theme.footer}
          fontFamily="Inter"
          fontSize="42"
          fontWeight="500"
          letterSpacing="0.05em"
        >
          <tspan x="790" y={height - 60}>
            @prayclub
          </tspan>
        </text>
      </svg>
    </div>
  )
}
export default Preview
