import { Box, Container, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { BsArrowUpCircle } from "react-icons/bs";
import { ModalVideo } from "./ModalVideo";

export function Container_4() { 

   const videoModal = useDisclosure()
   const title = 'Nossa historia começou em 1987'
   const subTitle = <>A Blend Química Indústria de Cosméticos iniciou sua jornada na cidade de Jardinópolis - SP em 2005, fazendo parte do grupo Daterra, fundado em 1987 como farmácia de manipulação.  O objetivo era desenvolver e fabricar produtos da nossa marca própria (Daterra). Com o passar do tempo, a Blend Química se destacou no desenvolvimento de cosméticos, criando produtos de alto valor agregado, e a partir disso, decidimos compartilhar e abraçar projetos diferentes e inovadores por meio da terceirização, criando cosméticos personalizados para diversos clientes. Portanto, além da produção e desenvolvimento próprio, a indústria trabalha para que nossos parceiros também possam ter sua linha exclusiva de cosméticos, sempre prezando por um serviço de qualidade, com segurança e eficácia.</>

   return (
      <Container id='#sobre' maxW='100vw' minH='64vh' color='gray.50'
      bgGradient='linear(to-b, datDarkBlue 20%, #263b66 80%)' p={12} mx='0' centerContent>
         <VStack maxW='80vw' spacing={8} my='auto'>
         <Heading fontWeight='300' textAlign='center'> {title} </Heading>
         <Text textAlign='justify' lineHeight={6}>{subTitle}</Text>
         <ModalVideo 
            image='static/img/team/danilo-icon-inv.png'
            modal={videoModal} 
         />
         </VStack>
      </Container> 
   )
}