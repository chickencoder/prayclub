interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export const Heading: React.FC<TypographyProps> = ({
  children,
  className = ''
}) => <h2 className={`${className} font-bold text-3xl mb-4`}>{children}</h2>

export const Text: React.FC<TypographyProps> = ({
  children,
  className = ''
}) => <p className={`${className} mb-4 leading-loose`}>{children}</p>
