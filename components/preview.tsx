interface Props {
  instagram?: string
}

const Preview: React.FC<Props> = ({ instagram = 'prayclub' }) => (
  <div>
    <svg
      viewBox="0 0 1080 1920"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full border-2 border-black"
    >
      <rect width="1080" height="1920" fill="white" />
      <text
        fill="#FF0000"
        font-family="Inter"
        font-size="48"
        font-weight="900"
        letter-spacing="0.05em"
      >
        <tspan x="60" y="1823.95">
          PRAY&#10;
        </tspan>
        <tspan x="60" y="1866.95">
          CLUB.
        </tspan>
      </text>
      <text
        fill="#707070"
        font-family="Inter"
        font-size="48"
        font-weight="500"
        letter-spacing="0.05em"
      >
        <tspan x="745" y="1840.95">
          @{instagram}
        </tspan>
      </text>
    </svg>
  </div>
)

export default Preview
