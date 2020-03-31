import '../css/styles.css'
import { AppProps } from 'next/app'
import CookieConsent from 'react-cookie-consent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent
        style={{ background: '#FF0000' }}
        buttonStyle={{
          background: '#FFFFFF',
          color: '#000000',
          fontSize: '16px'
        }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  )
}

export default MyApp
