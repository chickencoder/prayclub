// spacers invaders

interface Props {
  size?: number
}

const Spacer: React.FC<Props> = ({ size = 1 }) => (
  <div className={`h-${size * 4}`} />
)

export default Spacer
