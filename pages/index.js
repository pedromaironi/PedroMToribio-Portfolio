import NextLink from 'next/link'

import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Logo from '../components/logo'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        align="center"
        p={3}
        text-align="center"
        mb={6}
        mt={3}
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
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/pedro.png"
            alt="Pedro Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Pedro is a freelance and a front-end developer based in Dominican
          Republic with a passion for building a web/mobile applications from
          planning and designing all the way to solving real-life problems with
          code. When not online, he love play video games. Currently, he is
          living off of his own product called{' '}
          <NextLink href="/work/inksales">
            <Link>inksales</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Dominican Republic, Santiago de los Caballeros
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at CC Software Group, S.R.L.
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Work as a
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music,{' '}
          <Link href="https://github.com/pedromaironi" target="_blank">
            Coding
          </Link>
          , Play Video Games,{' '}
        </Paragraph>
      </Section>
      
    </Container>
  )
}

export default Page
