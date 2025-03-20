import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { slugify } from "../../utils";
import { Differences } from "./Differences";
import { OurServices } from "./OurServices";

interface Container_3Props {
   id: string
}

export function Container_3({ id }: Container_3Props) {

   return (
      <Container id={slugify(id)} maxW='100vw' color='white' bg='white' p='0' m='0' centerContent>
         {/* <OurServices /> */}
         <Differences />
      </Container>
   )
}