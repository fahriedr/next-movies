import '../styles/globals.css'
import { UserProvider } from '../context/userProvider'
import Layout from '../layouts/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp
