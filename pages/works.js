import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkSales from '../public/images/works/frame-banner.png'
import carminerproject from '../public/images/works/carminer-project.png'
import inkProjectSales from '../public/images/works/inkProjectSales.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1]} gap={6}>
        <Section>
          <WorkGridItem
            id="InkSales"
            title="InkSales"
            thumbnail={inkProjectSales}
          >
            Easily manage, account for and manage your company from wherever you
            are. Start your 15 days for free.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="inkSales"
            title="InkSales"
            thumbnail={thumbInkSales}
          >
            A Sales app with charts, cross-platform and encrypted data sync
            report
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="CarMiner"
            title="CarMiner"
            thumbnail={carminerproject}
          >
            Application to determine the value of your vehicle in dollars and
            Dominican pesos
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
