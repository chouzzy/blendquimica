import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Link, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { LineItem } from "./LineItem";
import animationData from "../../../../public/animations/catalog.json";
import Lottie from 'react-lottie'
import { FaCloudDownloadAlt } from "react-icons/fa";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

export function Lines() {

   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

   
   const slides = useBreakpointValue({
      base: 1, 
      sm: 1, 
      md: 2,
      lg: 3,
      xl: 3
   })

   const lines = [
      {id:1,image: 'static/img/footer-menu/dermo.png', text:'Dermo Care', subText:'Os melhores ativos para fazer os melhores produtos'},
      {id:2,image: 'static/img/footer-menu/home.jpg', text:'Home Care', subText:'Fragrâncias diversas para perfumar o ambiente de forma natural e agradável'},
      {id:3,image: 'static/img/footer-menu/skin-care.jpg', text:'Skin Care', subText:'Vamos repaginar a rotina de Skin Care dos seus clientes'},
      {id:4,image: 'static/img/footer-menu/hair-care.jpg', text:'Hair Care', subText:'Os melhores produtos para um cronograma capilar perfeito'}
   ]
   const segments = {
      text:'Segmentos de atuação',
      subText:'Com o nosso time P&D e nossa linha de produção, estamos preparados para desenvolver e produzir formulações personalizadas com complexidades e formas diferentes.',
      dreamText:'Você tem um sonho? Nós temos a fórmula!',
      dreamSubText:'Cada cosmético tem sua particularidade e acreditamos que a beleza está no detalhe. Traga as ideias e deixe que a NOSSA indústria cosmética te auxilie a coloca-las em prática, criando cosméticos de alta qualidade com a sua identidade.'
      
   }

   return (
      <>
      <Grid boxSizing='border-box' alignItems='center' color='gray.600' my={[8,12,12,12,12]} 
      templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']}>

      <GridItem pr={[0,0,1,0,0]} colStart={[0,0,1,1,1]} colEnd={[0,0,2,2,2]}>
         <VStack mx='auto' maxW={['90%','90%','76%','76%','90%']} spacing={4} my={[8,8,24,24,24]} >
            <Text color='datDarkBlue' textAlign={['center','center','center','center']} fontSize='1.8rem' fontWeight='400' letterSpacing={1.4} textTransform='uppercase'>
               {segments.text}
            </Text>
            <Text textAlign={['center','center','center','center']} fontSize='1.1rem' fontWeight='400' >
               {segments.dreamText}
            </Text>
            <Text textAlign={['center','center','center','justify']}>
               {segments.dreamSubText}
            </Text>
            <Text textAlign={['center','center','center','justify']}>
               {segments.subText}
            </Text>
            <Box cursor='pointer' color='datDarkBlue' p={4} _hover={{transition:'800ms', color:'#a5d320', borderRadius:'12px'}}>
               <Link href='https://drive.google.com/u/1/uc?id=1U7C1UXQjjkB25hvirFsFu8_f8oDGKIiB&export=download'>
                  <Box maxW='102px' mx='auto'>
                     <Lottie options={defaultOptions} cursor='none' />
                  </Box>
               </Link>
               <Flex  fontSize='2rem' fontWeight='400' alignItems='center' textAlign='center'>
                  <Text px={4} pt={2} fontSize='1.2rem'>Download catálogo</Text>
               <FaCloudDownloadAlt/>
               </Flex>

            </Box>

         </VStack>
      </GridItem>
      
      <GridItem colStart={[0,0,2,2,2]} colEnd={[0,0,4,4,4]} maxW={['95vw','95vw','90%','90%']} borderRadius={8} mx='auto' color='gray.800' >
         <Swiper
            spaceBetween={0}
            slidesPerView={slides}
            navigation
            autoplay
            loop
            // onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
         >

            {lines.map( item => {
               return (
                  <SwiperSlide key={item.id}>
                     <LineItem  image={item.image} text={item.text} subText={item.subText} />
                  </SwiperSlide>
               )
            })}
           
         </Swiper>
         </GridItem>

         </Grid>
      </>
   )
}

