import { Flex, Container, Text, useBreakpointValue, Image, Divider, HStack, VStack, Button, Link, textDecoration } from "@chakra-ui/react";
import { brindes } from "./brindesData";
import { BrindesDownloadButton } from "./BrindesDownloadButton";
import { MobileStack } from "./mobileStack";

export function Container_1_5() {
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
         maxW='100vw'
         h='100%'
         color='white'
         bgImage={'static/img/brindes/fundo-azul.png'}
         bgPos='center'
         bgSize={'cover'}
         bgColor='#FFFFFFBB'
         px={[12, 12, 12, 4, 12]}
         pb={[1, 12, 12, 4, 12]}
         gap={6}
         m='0'
         centerContent>

         <Text
            fontSize={isMobileVersion ? '3xl' : '4xl'}
            fontWeight='400'
            letterSpacing={2}
            textAlign='center'
            mt={10}
            textTransform='uppercase'
            bgColor={'datGreenBrindes'}
         >
            {brindes.brindesTitle}
         </Text>

         <Flex
            direction={['column', 'column', 'column', 'row']}
            justifyContent='space-between'
            alignItems={'center'}

            gap={6}
         >
            <Image
               src='static/img/brindes/produtos-2.png'
               alt='Produtos off-label com rótulo escrito sua marca aqui'
               width={['90%', '100%', '64%', '36%']}
               height='auto'
               borderRadius={8} />
            <VStack
               justifyContent='space-between'
               pb={12}>
               <MobileStack isMobileVersion={isMobileVersion} />

               <BrindesDownloadButton />
            </VStack>
         </Flex>

      </Container >
   );
}