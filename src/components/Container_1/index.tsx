import { Box, Container, Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Lines } from "../Container_2/Lines";
import { Container_1_5 } from "../Container_1_5";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])


export function Container_1() {
   // useEffect( () => alert('Site em construção 🚜'),[])
   return (

      <>

         <Container id='#Home' maxW='100vw' h='100vh' bg='gray.500' p='0' m='0' centerContent>
            <Navbar />
            <Flex maxW={'100vw'} h='100%'>
               <Swiper
                  spaceBetween={40}
                  slidesPerView={1}
                  navigation
                  autoplay
                  speed={2000}
                  loop
                  // onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
               >
                  <SwiperSlide >
                     <Banner />
                  </SwiperSlide>
                  <SwiperSlide >
                     <Container_1_5 />
                  </SwiperSlide>

               </Swiper>
            </Flex>
            {/* Grid 5 images */}
         </Container>
      </>
   )
}