import { Container, Box, Heading } from '@chakra-ui/react'
import Logo from '../components/logo'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="red"
        align="center"
        p={3}
        text-align="center"
        mb={3}
        mt={1}
      >
        Hello, I&apos;m a front-end developer based in Republica Dominicana!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pedro Maironi Toribio
          </Heading>
          <p>Junior Developer (Developer / Designer / Programmer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
