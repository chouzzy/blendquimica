import { useDisclosure, Box, Button, Collapse, useBreakpointValue, Grid, GridItem, Image, Heading, Text, VStack, Flex, Link, HStack} from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { NavItem } from "../NavItem";
import { SocialMedia } from "./Social Media";

export function ModalMenu(ModalMenuProps) {
   const socialMediaLinks = {
      'instagram':'https://www.instagram.com/farmaciadaterra/',
      'facebook':'https://www.facebook.com/daterraoficial?ref=hl',
      'linkedin':'https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos',
      'whatsapp':'https://wa.me/5516992469499'
   }
   const { isOpen, onToggle } = useDisclosure()

   return (
      <>
         <Button  w='50px' right='0' mr={[4,4,12,0,12]} fontSize='1.4rem' top='0' mt={[14,16,16,16,16]} position='absolute' bg='datBlue' color='white' onClick={onToggle}><RiMenuLine/></Button>
         <Collapse in={isOpen} animateOpacity>
            <Box
               w='100vw'
               color='datBlue'
               rounded='md'
               shadow='md'
            >
               <VStack textTransform='uppercase' fontFamily='Heebo' fontSize='1.05rem' pt={4}>

                  {ModalMenuProps.navItems.map( item => {
                     return (
                        <NavItem key={item.id} id={item.id} text={item.text} activeClass={item.active} color={item.color} href=''/>
                     )
                  })}
                  <HStack p={2} fontSize='1.6rem' spacing={3} textAlign='center' borderTop='1px solid #b8d432' w='36vw' justifyContent='center'>
                        <SocialMedia color='#E1306C' icon={<BsInstagram/>} mediaLink={socialMediaLinks.instagram}/>
                        <SocialMedia color='#4267B2' icon={<ImFacebook2/>} mediaLink={socialMediaLinks.facebook}/>
                        <SocialMedia color='#4267B2' icon={<SiLinkedin/>} mediaLink={socialMediaLinks.linkedin}/>
                        <SocialMedia color='#25D366' icon={<RiWhatsappFill/>} mediaLink={socialMediaLinks.whatsapp}/>
                  </HStack>
               </VStack>
            </Box>
         </Collapse>
         </>
      )}