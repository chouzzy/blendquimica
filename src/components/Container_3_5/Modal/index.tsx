import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Slide, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'

export function Container_2_Modal(modalContent) { 

   const isDesktopVersion = useBreakpointValue( { 
      base: false,
      sm: false,
      md:false,
      lg:true,
      xl:true,
    } )
   
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      
         <> 
            <Image onClick={onOpen} cursor='pointer'  _hover={{border: "1px solid #00000010"}} borderRadius='5px'  my='50px' src={modalContent.image} alt='Banner inicial' />

            {isDesktopVersion?

               <Modal closeOnOverlayClick={true} size='full' isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent m='80px' border='1px solid #00000040'  backgroundColor='#3397da10'>
                     <ModalCloseButton  color='white' />
                     <ModalBody>
                        <Image borderRadius={5}  mx='auto' objectFit='cover' src={modalContent.image} alt='Banner inicial' />
                     </ModalBody>
                  </ModalContent>
               </Modal>
            :
            <Modal closeOnOverlayClick={true} size='xl' isOpen={isOpen} onClose={onClose}>
               <ModalOverlay />
               <ModalContent my='auto' backgroundColor='#00000000'>
                  <ModalCloseButton  color='white' />
                  <ModalBody>
                     <Image borderRadius={5} maxWidth='90%' mx='auto' objectFit='cover' src={modalContent.image} alt='Banner inicial' />
                  </ModalBody>
               </ModalContent>
            </Modal>
            }
         </>

   )
}