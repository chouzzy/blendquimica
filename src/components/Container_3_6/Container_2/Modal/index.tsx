import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Slide, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'

export function SeloModal(modalContent) { 

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
               <Modal closeOnOverlayClick={true} size='full' isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent m='80px' border='1px solid #00000040'  backgroundColor='#3397da10'>
                     <ModalCloseButton  color='white' />
                     <ModalBody>
                        <Image borderRadius={5}  mx='auto' objectFit='cover' src={modalContent.image} alt='Banner inicial' />
                     </ModalBody>
                  </ModalContent>
               </Modal>
         </>

   )
}