import '../styles/globals.css'
import '../styles/buttons.css'

const MyApp = ({Component, pageProps}) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
      <Component {...pageProps} />
  )
}

export default MyApp
