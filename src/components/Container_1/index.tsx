import { Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { slugify } from "../../utils";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

interface Container_1Props {
   id: string
   ids: string[]
}
export function Container_1({ id, ids }: Container_1Props) {
   // useEffect( () => alert('Site em construção 🚜'),[])

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