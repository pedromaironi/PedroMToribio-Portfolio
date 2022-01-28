import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layout/main'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}


export default Website