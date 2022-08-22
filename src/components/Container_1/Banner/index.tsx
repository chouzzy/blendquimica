import { Box, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import { GiClick } from "react-icons/gi";

export function Banner() { 
   const { isOpen, onOpen, onClose } = useDisclosure()

   const iframeHeight = useBreakpointValue({
      base: '300px', 
      sm: '400px', 
      md: '500px',
      lg: '500px',
      xl: '500px'
   })
   return (
      <>
      
      <Flex w='100%' fontFamily='Heebo' cursor='pointer' minH='80vh' boxShadow='lg' justifyContent='center' color='white' bgImage={['static/img/bequers.png','static/img/blend-4.gif','static/img/blend-4.gif','static/img/blend-4.gif']} bgSize='cover' onClick={onOpen}>
         <VStack p={8} my='auto' borderRadius='lg' textShadow='1px 1px 1px #0000003a'>

            <Box textAlign='center'>
               <Heading fontSize='2.4rem' fontWeight='400' mx='auto'>Nós somos a</Heading>
               <Heading fontSize='3.2rem' color='white' mx='auto' >BLEND QUÍMICA</Heading>
               <Text maxW={['95%','50%','50%','50%','50%']} my={4} fontSize='1.1rem' mx='auto' textAlign='center'>
                  Empresa fundada para levar comprometimento, eficácia e qualidade aos nossos clientes.
               </Text>
            </Box>

            <Box>
               <Text mt={24} fontSize='0.9rem'>Clique e assista!</Text>
               <Flex fontSize='3rem' justifyContent='center'>
               <GiClick/>
               </Flex>
            </Box>
         </VStack>
      </Flex>
      
      <Modal finalFocusRef={null} closeOnOverlayClick={true} size='full' isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent my={['28vh','100px','40px','40px']} backgroundColor='#00000000'>
            <ModalCloseButton color='white' />
            <ModalBody alignItems='center' py={12}>
               <iframe width="100%" height={iframeHeight} src="https://www.youtube.com/embed/Khg27HTFJ-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </ModalBody>
         </ModalContent>
      </Modal>
      </>
   )
}