import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Link, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { LineItem } from "./LineItem";
import animationData from "../../../../public/animations/catalog.json";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

export function Products() {

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
      { id: 1, image: 'static/v2/skincare.jpg', text: 'Skin Care', subText: "Cuidados essenciais para a sua pele, com formulações inovadoras que promovem hidratação, nutrição e revitalização, revelando a beleza natural do seu rosto e corpo." },
      { id: 2, image: 'static/v2/haircare.jpg', text: 'Hair Care', subText: "Transforme seus cabelos com nossos tratamentos capilares de alta performance, desenvolvidos para nutrir, fortalecer e realçar o brilho e a maciez dos seus fios." },
      { id: 3, image: 'static/v2/dermocare.jpg', text: 'Dermo Care', subText: "Soluções dermo cosméticas avançadas, que combinam ciência e natureza para tratar e proteger a sua pele, promovendo saúde, bem-estar e beleza duradoura." },
      { id: 4, image: 'static/v2/homecare.jpg', text: 'Home Care', subText: "Produtos desenvolvidos para perfumar e energizar o ambiente, com fragrâncias marcantes." }
   ]


   return (
      <>
         <Flex flexDir={'column'} boxSizing='border-box' alignItems='center' color='gray.600' my={[8, 12, 12, 12, 12]} mx='auto'>
            <Flex py={4}>
               <Heading fontWeight={200} color='datDarkBlue' w='100%' textAlign={'center'} textTransform='uppercase'>Categorias de produtos</Heading>
            </Flex>

            <GridItem maxW={['100vw','100vw','100vw','100vw',1920]} mx='auto' color='gray.800'>
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

                  {lines.map(item => {
                     return (
                        <SwiperSlide key={item.id}>
                           <LineItem image={item.image} text={item.text} subText={item.subText} />
                        </SwiperSlide>
                     )
                  })}

               </Swiper>
            </GridItem>

         </Flex>
      </>
   )
}

