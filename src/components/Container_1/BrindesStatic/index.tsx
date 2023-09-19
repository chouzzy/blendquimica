import { Flex, Container, Text, useBreakpointValue, Image, Divider, HStack, VStack, Button, Link, textDecoration } from "@chakra-ui/react";
import { BrindesDownloadButton } from "../../Container_1_5/BrindesDownloadButton";


export function BrindesStatic() {
   const isMobileVersion = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   });

   return (
      <Container
         id='#Brindes'
         position={'relative'}
         maxW='100vw'
         h='100%'
         color='white'
         bgImage={'static/img/brindes/banner-blend7.png'}
         bgColor='#FFFFFFBB'
         bgPos={'center'}
         bgSize={'fit'}
         px={[12, 12, 12, 4, 12]}
         pb={[12, 12, 12, 4, 12]}
         gap={8}
         m='0'
         centerContent>

         <BrindesDownloadButton
            position= 'absolute'
            left= '0'
            right= '0'
            bottom= '2'
            mr= '30%'
            ml= '30%'
         />

      </Container >
   );
}