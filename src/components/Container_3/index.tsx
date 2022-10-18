import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { OurServices } from "./OurServices";

export function Container_3() { 

   return (
      <Container id='#serviços' maxW='100vw'
      bgGradient={['white','white','linear(to-br, #15274c3a 15%, #15274c98 90%)','linear(to-br, #15274c3a 15%, #15274c98 90%)']} p='0' m='0' centerContent>
         <OurServices/>
      </Container> 
   )
}