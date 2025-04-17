import { useDisclosure, Box, Button, Collapse, VStack, HStack} from "@chakra-ui/react"
import { useRouter } from "next/router";
import { FacebookLogo, InstagramLogo, LinkedinLogo, List, WhatsappLogo } from "phosphor-react";

import { RiMenuLine } from "react-icons/ri";
import { whatsappLink } from "../../../../utils";
import { NavItem } from "../NavItem";
import { SocialMedia } from "./Social Media";

export function ModalMenu(ModalMenuProps) {
   const socialMediaLinks = {
      'instagram':'https://www.instagram.com/farmaciadaterra/',
      'facebook':'https://www.facebook.com/daterraoficial?ref=hl',
      'linkedin':'https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos',
      'whatsapp':whatsappLink(useRouter().pathname)
   }
   const { isOpen, onToggle } = useDisclosure()

   return (
      <>
         <Button  w='50px' right='0' mr={[4,4,12,0,12]} fontSize='1.4rem' top='0' mt={[14,16,16,16,16]} position='absolute' bg='datBlue' color='white' onClick={onToggle}><List/></Button>
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
                        <SocialMedia color='#E1306C' icon={<InstagramLogo/>} mediaLink={socialMediaLinks.instagram}/>
                        <SocialMedia color='#4267B2' icon={<FacebookLogo/>} mediaLink={socialMediaLinks.facebook}/>
                        <SocialMedia color='#4267B2' icon={<LinkedinLogo/>} mediaLink={socialMediaLinks.linkedin}/>
                        <SocialMedia color='#25D366' icon={<WhatsappLogo id='zap-tag' weight="fill"/>} mediaLink={socialMediaLinks.whatsapp}/>
                  </HStack>
               </VStack>
            </Box>
         </Collapse>
         </>
      )}