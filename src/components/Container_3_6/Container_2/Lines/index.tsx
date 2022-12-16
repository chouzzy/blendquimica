import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Link, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

export function Lines() {

   return (
      <>
      <Heading mt={8} color='gray.600' fontWeight={200} fontSize={'4xl'}> SUSTENTABILIDADE</Heading>

      <Grid boxSizing='border-box' alignItems='center' color='gray.800' my={8}
      templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}>

      <GridItem mx='auto' p={8} >

         <VStack p={[0,4,4,4]} spacing={12}>
            <Image src='static/img/sustentabilidade/placas_solares.gif'/>

            <Flex flexDir={'column'} justifyContent='center' align='center' gap={2} >
               
               <Heading fontWeight={200} fontSize={['3xl','3xl','3xl','3xl']}>Energia solar</Heading>
               
               <Text fontWeight={[200]} fontSize='xl' textAlign={'center'} color='black'>
               Temos o compromisso de investir em soluções sustentáveis para que o nosso planeta seja um lugar melhor para as futuras gerações. Com esse propósito, instalamos placas fotovoltaicas para que o funcionamento da Blend Química aconteça através de energia limpa e renovável.
               
               </Text>
            </Flex>

         </VStack>

         
      </GridItem>
      
      <GridItem
         h='500px' w='100%'
         position='relative'
         color='gray.800'
         borderLeft={['','1px solid #00000030','1px solid #00000030','1px solid #00000030']}
        
         _hover={{opacity:1, transition:'2500ms'}}
         >
         
            <Flex h='100%' w='90%' mx='auto'>
               <VStack p={4} my='auto'>
                  <Heading fontWeight={200}>Eureciclo</Heading>
                  <Text fontWeight={200} textAlign={'center'} fontSize='xl'>
                     Estamos sempre pensando em soluções que busquem causar menos impacto ambiental e preservar os recursos naturais. Agora, com muito orgulho, carregamos o sorriso do Eureciclo, buscando valorizar o trabalho de operadores de coleta seletiva e colaborar com o processo de compensação ambiental.
                  </Text>
               </VStack>
            </Flex>

            <Flex 
            h='100%' w='100%'
            mx='auto'
            bgColor='white' bgImage='static/img/sustentabilidade/selo_static_only.png' bgRepeat={'no-repeat'} bgPosition='center'
            _hover={{opacity:0, transition:'2500ms'}} 
            position='absolute' top='0' left='0' right='0'
            >
               <Image 
               mx='auto' 
               position='absolute' top='0' left='0' right='0'
               src={'static/img/sustentabilidade/selo_cicle_only_cutted.png'} 
               _hover={{transform:'rotate(-720deg)', transition:'2000ms'}}
               />
            <Text fontSize='sm' mx='auto' color={['gray.600']} position='absolute' bottom='0' left='0' right='0' textAlign={'center'}> Clique no selo acima e saiba mais!</Text>
            </Flex>
      </GridItem>

         </Grid>
      </>
   )
}

