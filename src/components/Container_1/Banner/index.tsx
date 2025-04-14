import { Box, Button, Flex, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import { GiClick } from "react-icons/gi";
import { whatsappLink } from "../../../utils";

export function Banner() {

   const iframeHeight = useBreakpointValue({
      base: '300px',
      sm: '400px',
      md: '500px',
      lg: '500px',
      xl: '500px'
   })

   const buttonLink = 'https://api.whatsapp.com/send/?phone=5516991790291&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+Google%21+Pode+me+ajudar%3F+%5BFavor+n%C3%A3o+apagar+essa+mensagem+para+identifica%C3%A7%C3%A3o%5D&type=phone_number&app_absent=0'
   const isMobileVersion = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   });

   return (
      <>

         <Flex w='100vw' fontFamily='Heebo' h='100%' boxShadow='lg' justifyContent='center' color='white' bgImage={['static/v2/blue-banner-2.png']} bgSize='cover' bgPos={'center'}>
            {/* <VStack p={8} my='auto' borderRadius='lg' textShadow='1px 1px 1px #0000003a'>

            <Box textAlign='center'>
               <Heading fontSize='2.6rem' fontWeight='400' mx='auto'>Indústria de cosméticos</Heading>
               <Heading fontSize='3.4rem' color='#3b6cd5' textShadow='1px 1px 1px #000000b0' mx='auto' >BLEND QUÍMICA</Heading>
               <Text maxW={['95%','60%','60%','60%','60%']} my={4} fontSize='1.6rem' mx='auto' textAlign='center' textShadow='1px 1px 1px #000000b0'>
               Desenvolvemos e produzimos <b> cosméticos personalizados </b>, do seu jeito, com a <b>sua</b> marca.

               </Text>
            </Box>

            <Box>
               <Text mt={24} fontSize='1.3rem'>Clique e assista!</Text>
               <Flex fontSize='3rem' justifyContent='center'>
               <GiClick/>
               </Flex>
            </Box>
         </VStack> */}

            <Flex w='100%' >
               <Flex mx='auto' justifyContent={'center'} alignItems='center' maxW={1120} p={8}>

                  <Flex flexDir={'column'} justifyContent={'center'} alignItems='start' textAlign={'start'} gap={4} p={4}>
                     <Text fontSize={['lg', 'lg', 'lg', '2xl', '2xl']}>
                        Indústria de cosméticos Blend Química
                     </Text>
                     <Text fontSize={['lg', 'lg', 'lg', '4xl', '4xl']} fontWeight='semibold'>
                        Cosméticos personalizados do seu jeito, com a sua marca. Da fórmula à embalagem.
                     </Text>
                     <Text >
                        A Blend Química te fornece total suporte na criação do seu cosmético, colocando todas as suas ideias em prática. Você tem um sonho? Nós temos a fórmula.
                     </Text>
                     <Link href={whatsappLink(useRouter().pathname)} target='_blank' isExternal>
                        <Button id={'zap-tag'} color='white' bgColor='green.500' _hover={{ bgColor: 'datBlue' }} borderRadius={2} px={8}>
                           ENTRAR EM CONTATO
                        </Button>
                     </Link>
                  </Flex>
                  {isMobileVersion ?
                     '' :
                     <Flex justifyContent={'center'} alignItems='center'>
                        <Image src={'static/v2/banner-prod-1.spng'} objectFit='contain' objectPosition={'center'} maxW={400} />
                     </Flex>
                  }
               </Flex>
            </Flex>
         </Flex>

         {/* <Modal finalFocusRef={null} closeOnOverlayClick={true} size='full' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent my={['28vh', '100px', '40px', '40px']} backgroundColor='#00000000'>
               <ModalCloseButton color='white' />
               <ModalBody alignItems='center' py={12}>
                  <iframe width="100%" height={iframeHeight} src="https://www.youtube.com/embed/Khg27HTFJ-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </ModalBody>
            </ModalContent>
         </Modal> */}
      </>
   )
}