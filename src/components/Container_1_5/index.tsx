import { Flex, Container, Text, useBreakpointValue, Image, Divider, HStack, VStack, Button, Link, textDecoration } from "@chakra-ui/react";
import { brindes } from "./brindesData";
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
         id='#segmentos'
         maxW='100vw'
         h='100%'
         color='white'
         bgImage={'static/img/brindes/fundo-marrom.png'}
         bgColor='#FFFFFFBB'
         px={[12,12,12, 4, 12]}
         pb={[12,12,12, 4, 12]}
         gap={8}
         m='0'
         centerContent>

         <Text
            fontSize={isMobileVersion ? '3xl' : '4xl'}
            fontWeight='300'
            textAlign='center'
            mt={10}
            textTransform='uppercase'>
            {brindes.brindesTitle}
         </Text>

         <Flex
            direction={['column', 'column', 'column', 'row']}
            justifyContent='space-between'
            alignItems={'center'}
            
            gap={8}
            >

            {isMobileVersion ?

               <Image
                  src='static/img/brindes/produtos.png'
                  alt='Produtos off-label com rótulo escrito sua marca aqui'
                  width={['100%', '100%', '64%', '36%']}
                  height='auto'
                  borderRadius={8}
                  boxShadow='xl' />
               :
               ''
            }

            <VStack
               justifyContent='space-between'
               pb={12}>

               {isMobileVersion ?
               <MobileStack isMobileVersion={isMobileVersion}/>
               :
               <HStack
                  justifyContent='center'
                  alignItems='center'>
                  <Flex
                     flexDir='column'
                     p={[5,5,5]}
                     w={['auto','25%','25%']}
                     alignItems='flex-start'>
                     <Text
                        fontSize={isMobileVersion ? 'sm' : 'md'}
                        fontWeight='bold'
                        color='datMakeGold'>
                        {brindes.saboneteLiquidoTitle}
                     </Text>
                     <Text fontSize={isMobileVersion ? 'sm' : 'md'}>
                        {brindes.saboneteLiquidoDescription}
                     </Text>
                  </Flex>

                  <Divider orientation='vertical' h={20} />

                  <Flex
                     flexDir='column'
                     p={[5,5,5]}
                     w={['auto','40%','40%']}
                     alignItems='flex-start'>
                     <Text
                        fontSize={isMobileVersion ? 'sm' : 'md'}
                        fontWeight='bold'
                        color='datPerola'>
                        {brindes.difusorAmbienteTitle}
                     </Text>
                     <Text fontSize={isMobileVersion ? 'sm' : 'md'}>
                        {brindes.difusorAmbienteDescription}
                     </Text>
                  </Flex>

                  <Divider orientation='vertical' h={20} />

                  <Flex
                     flexDir='column'
                     p={[5,5,5]}
                     w={['auto','25%','25%']}
                     alignItems='flex-start'>
                     <Text
                        fontSize={isMobileVersion ? 'sm' : 'md'}
                        fontWeight='bold'
                        color='datMakeGold'>
                        {brindes.velaAromaticaTitle}
                     </Text>
                     <Text fontSize={isMobileVersion ? 'sm' : 'md'}>
                        {brindes.velaAromaticaDescription}
                     </Text>
                  </Flex>
               </HStack>
               }

               <Link
                  href='https://drive.google.com/u/5/uc?id=1JVB0hHKLn3UCJSIePJC8lCZRX2bedMR2&export=download'
                  outline='none'
                  _hover={{ textDecoration: 'none', outline:'none' }}
                  target={'blank'}>
                  <Flex
                     color='datBrown'
                     border='1px solid'
                     bgColor='datPerola'
                     fontWeight='500'
                     borderRadius={4}
                     textAlign='center'
                     outline='none'
                     p={2}
                     px={[8,'','']}
                     mt={[8,'','']}
                     _hover={{
                        textDecoration: 'none', 
                        outline:'none',
                        color: 'datPerola',
                        transition: '400ms',
                        bgColor: 'transparent',
                        borderRadius: 8,
                        px: 8
                     }}>
                     Clique aqui e faça o download de nosso catálogo!
                  </Flex>
               </Link>
            </VStack>

            {isMobileVersion ?

               ''
               :
               <Image
                  src='static/img/brindes/produtos.png'
                  alt='Produtos off-label com rótulo escrito sua marca aqui'
                  width={['80%', '80%', '36%', '36%']}
                  height='auto'
                  borderRadius={8}
                  boxShadow='xl' />
            }
         </Flex>

      </Container >
   );
}