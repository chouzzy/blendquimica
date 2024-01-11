import { Box, Container, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
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
import { BrindesStatic } from "./BrindesStatic";
import { BrindesDownloadButton } from "../Container_1_5/BrindesDownloadButton";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])


export function Container_1() {
   // useEffect( () => alert('Site em construção 🚜'),[])

   const isMobileVersion = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   });

   return (

      <>

         <Container id='#Home' maxW='100vw' h='100%' bg='gray.500' p='0' m='0' centerContent>
            <Navbar />
            <Flex maxW={'100%'} h='100%'>
            <Banner />
               {/* <Swiper
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

                     {isMobileVersion ?
                        <Container_1_5 />
                        :
                        <BrindesStatic />
                     }
                  </SwiperSlide>

               </Swiper> */}
            </Flex>
            {/* Grid 5 images */}
         </Container>
      </>
   )
}