import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

export function LineItem(LineItemProps) {
   return (
               <Flex mx='auto' maxW={['60vw','90%','90%','200px']}
               h={['380px','440px']} position='relative' justifyContent='center'  py={5}>

                  <Image borderRadius={8} border='1px solid #00000020' mx='auto'objectFit='cover' src={LineItemProps.image} alt='Banner inicial' boxShadow='xl' />

                  <Grid px={[4,4,4,4,4]} pb={[4,4,8,4,4]} pt={4} w='100%' borderRadius='0 0 8px 8px' bottom='10'  position='absolute' >
                     <Text textAlign='center' color='white'fontSize='1.9rem'
                     textShadow=' 1.3px 1.3px 1.3px #000000c0' fontWeight='400'>
                        {LineItemProps.text}
                     </Text>
                  </Grid>

               </Flex>
   )
}

