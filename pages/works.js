import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnail from '../components/thumbnail'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <WorkGridItem
          id="inkSales"
          title="InkSales"
          thumbnail={thumbInkSales}
        >

        </WorkGridItem>
      </SimpleGrid>
    </Container>
  )
}

export default Works
