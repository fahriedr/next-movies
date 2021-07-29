import '../styles/globals.css'
import { UserProvider } from '../context/userProvider'
import Layout from '../layouts/Layout'
import { useMedia } from '../utils/use-media'

function MyApp({ Component, pageProps }) {

  const mobile = useMedia('(max-width: 580px)');
  const tablet = useMedia('(max-width: 991px)');
  const desktop = useMedia('(max-width: 1280px)');
  const bigDesktop = useMedia('(min-width: 1281px)')

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} deviceType={{ mobile, tablet, desktop, bigDesktop }}/>
      </Layout>
    </UserProvider>
  )
}

export default MyApp
