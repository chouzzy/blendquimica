import { Box, Container, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { BsArrowUpCircle } from "react-icons/bs";
import { ModalVideo } from "./ModalVideo";

export function Container_4() { 

   const videoModal = useDisclosure()
   const title = 'Nossa história começou em 1987'
   const subTitle = <>A jornada se iniciou na cidade de Jardinópolis - SP em 2005. Inauguramos a Blend Química, indústria de cosméticos como parte do grupo Daterra.<br></br> Nossa indústria nasceu com a ideia de criar uma marca de cosméticos própria do grupo e com o passar do tempo, a Blend Química se destacou no desenvolvimento de cosméticos , criando produtos de alto valor agregado, frutos da experiência de 30 anos.<br></br> A partir disso, decidimos compartilhar e abraçar projetos diferentes e inovadores por meio da terceirização de cosméticos. Criando produtos personalizados para diferentes clientes. Portanto, além da produção e desenvolvimento próprio, a indústria trabalha para que nossos clientes também possam ter sua linha exclusiva de cosméticos, sempre prezando por um serviço de qualidade, com segurança e eficácia.</>

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