import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layout/main'
import Theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={Theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}


export default Website