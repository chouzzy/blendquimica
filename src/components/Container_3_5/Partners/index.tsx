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

export function Partners() {

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
      xl: 4
   })

   const lines = [
      {id:1,image: 'static/img/fotos-blend/partner-1.jpg', text:'MATERA', subText:'Os melhores ativos para fazer os melhores produtos'},
      {id:2,image: 'static/img/fotos-blend/partner-2.jpg', text:'DARVORE', subText:'Fragrâncias diversas para perfumar o ambiente de forma natural e agradável'},
      {id:3,image: 'static/img/fotos-blend/partner-3.jpg', text:'Adê Bronze', subText:'Vamos repaginar a rotina de Skin Care dos seus clientes'},
      {id:4,image: 'static/img/fotos-blend/partner-4.jpg', text:'DESPLAC', subText:'Os melhores produtos para um cronograma capilar perfeito'}
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
      templateColumns={['repeat(1, 1fr)']}>
         <Flex py={4}>
            <Heading fontWeight={200} color='datDarkBlue' w='100%' textAlign={'center'} textTransform='uppercase'>Nossos parceiros</Heading>
         </Flex>
      
      <GridItem maxW={'96vw'} mx='auto' color='gray.800'>
         <Swiper
            spaceBetween={40}
            slidesPerView={slides}
            navigation
            autoplay
            speed={2000}
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

