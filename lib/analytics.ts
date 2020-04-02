import ReactGA from 'react-ga'

export function initGA() {
  console.log('GA init')
  ReactGA.initialize('UA-162609285-1')
}

export function logPageView() {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export function logEvent(category = '', action = '') {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export function logException(description = '', fatal = false) {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
