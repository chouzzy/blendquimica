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
import { slugify } from "../../utils";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

interface Container_1Props {
   id: string
   ids: string[]
}
export function Container_1({ id, ids }: Container_1Props) {
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

         <Container id={slugify(id)} maxW='100vw' h='100%' bg='gray.500' p='0' m='0' centerContent>
            <Navbar ids={ids} />
            <Flex maxW={'100%'} h='100%'>
               <Banner />
            </Flex>
            {/* Grid 5 images */}
         </Container>
      </>
   )
}