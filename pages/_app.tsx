import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
    
  )
}

export default MyApp
