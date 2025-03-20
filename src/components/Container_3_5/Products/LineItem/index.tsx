import { Box, Collapse, Flex, Grid, Image, Text, useDisclosure, ModalOverlay } from "@chakra-ui/react";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

export function LineItem(LineItemProps) {

   const modalPartner = useDisclosure()

   return (
      <>
         <Flex mx='auto' m={4} position='relative' bg='whiteAlpha.600' _hover={{ opacity: 0.8, transition: '500ms' }} minW='300px' h={['440px']} justifyContent='center' flexDir={'column'} boxShadow='md'
            onMouseLeave={modalPartner.onToggle} onMouseEnter={modalPartner.onToggle} p={2} border='1px solid #00000008'>
            <Image borderRadius={1} position='relative' h='100%' objectFit='cover' objectPosition={'top'} src={LineItemProps.image} alt='Banner inicial'
            />

            {/* <Collapse in={modalPartner.isOpen} unmountOnExit={true}> */}

            {/* </Collapse> */}

            <Flex flexDir={'column'} opacity={1} bg='#ffffff' w='100%' p={4} position='absolute' bottom='0' left='0' right='0' fontFamily={'Roboto'} h={44} minH={44}>
               <Text textAlign='start' color='#000000bb' fontSize='2xl'>
                  {LineItemProps.text}
               </Text>
               <Text textAlign='start' color='#000000bb' fontSize='sm' fontWeight={'light'}>
                  {LineItemProps.subText}
               </Text>
            </Flex >
         </Flex>

      </>
   )
}

