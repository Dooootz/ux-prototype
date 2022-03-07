// import global stylesheet
// import each css file from each component here
import '../globals.css'
import '../src/components/BottomNav/BottomNav.css'
import '../src/components/TopNav/TopNav.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
