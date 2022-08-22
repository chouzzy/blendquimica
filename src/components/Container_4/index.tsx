import { Box, Container, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { BsArrowUpCircle } from "react-icons/bs";
import { ModalVideo } from "./ModalVideo";

export function Container_4() { 

   const videoModal = useDisclosure()
   const title = 'Nossa história começou em 1987'
   const subTitle = 'Com a fundação da primeira unidade da farmácia de manipulação “Daterra”, em Sertãozinho no interior de São Paulo.Com anos de muito aprendizado, nosso objetivo se tornou ainda maior e em 2005, instauramos nossa indústria cosmética Blend Química. Desenvolvendo produtos de alto desempenho para a marca própria, a Blend Química se destacou no mercado produtivo, e a partir disso, decidimos compartilhar nossas experiências através da terceirização de cosméticos.'

   return (
      <Container id='#sobre' maxW='100vw' minH='64vh' color='gray.50'
      bgGradient='linear(to-b, datDarkBlue 20%, #263b66 80%)' p={12} mx='0' centerContent>
         <VStack maxW='80vw' spacing={8} my='auto'>
         <Heading fontWeight='300' textAlign='center'> {title} </Heading>
         <Text textAlign='center'>{subTitle}</Text>
         <ModalVideo 
            image='static/img/team/danilo-icon-inv.png'
            modal={videoModal} 
         />
         </VStack>
      </Container> 
   )
}