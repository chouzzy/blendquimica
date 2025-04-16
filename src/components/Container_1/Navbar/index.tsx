import { Button, useBreakpointValue, Grid, GridItem, Link, Image, Flex, HStack, SimpleGrid } from "@chakra-ui/react"

import { Link as Slink } from 'react-scroll'
import { ModalMenu } from "./Modal";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { NavItem } from "./NavItem";
import { slugify, whatsappLink } from "../../../utils";
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { useRouter } from "next/router";

interface NavbarProps {
   ids: string[]
}

export function Navbar({ ids }: NavbarProps) {

   const whatsapp = whatsappLink(useRouter().pathname)

   const isMobile = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   })

   const navItems = [
      { id: '#Home', text: 'Home', active: 'active' },
      { id: '#Brindes', text: 'Brindes' },
      { id: '#segmentos', text: 'Segmentos' },
      { id: '#serviços', text: 'Serviços' },
      { id: '#sobre', text: 'Quem somos' },
      { id: '#footer', text: 'Fale conosco' }]

   return (
      <Grid
         py={2}
         position='relative'
         bg='white'
         boxShadow='xl'
         templateColumns={['', '', '', 'repeat(12,1fr)', 'repeat(12,1fr)']}
         w='100%'
         fontFamily='Heebo'
         fontWeight='400'
         textAlign='center'
         bgColor='white.50'
         alignItems='end'
         color='gray.600'
      >

         <GridItem mr={['auto', '', '', '', 'auto']} ml={[4, 4, '', 4, 8]} colStart={[0, 0, 1, 1, 1]} colEnd={[0, 0, 3, 3, 3]}>
            <Image mx='auto' src='static/img/blend-logo.png' maxW={['116px', '116px', '116px', '116px']} alt='Logo Blendquimica' />
         </GridItem>

         {isMobile ?
            <ModalMenu navItems={navItems} />
            :
            <>
               <GridItem colStart={[3, 3, 3, 3, 3]} colEnd={[10, 10, 10, 11, 11]} >
                  <HStack justifyContent='center' textTransform='uppercase' spacing={[0, 0, 0, 4, 16]} fontSize={['1rem', '1rem', '1rem', '0.9rem']}>
                     {ids.map((item, idx) => {
                        return (
                           <NavItem key={item + idx} id={slugify(item)} text={item} activeClass={item} />
                        )
                     })}

                  </HStack>
               </GridItem>

               <GridItem colStart={[10, 10, 10, 11, 11]} colEnd={13}>
                  <HStack justifyContent='center' alignItems='baseline' spacing={2} fontSize='1.8rem' color='datBlue'>
                     <Link _hover={{ color: "pink.400" }} href='https://www.instagram.com/blendquimica_cosmeticos/'> <InstagramLogo weight="fill" /> </Link>
                     <Link _hover={{ color: "teal.400" }} href='https://www.linkedin.com/company/blend-qu%C3%ADmica/'> <LinkedinLogo weight="fill" /> </Link>
                     <Link id='#zap-tag' _hover={{ fontSize: "3rem", transition: '200ms' }} color='#6cd474' fontSize='2.4rem' href={whatsapp}> <WhatsappLogo weight="fill" /> </Link>
                     {/* <Image w='70px' src='images/zap.png' alt='Dan Abramov' /> */}
                  </HStack >
               </GridItem>

               {/* <GridItem colStart={11} colEnd={13} mb={2}>
                  <Button borderRadius={3} _hover={{boxShadow:'lg'}} bg='datGreen' color='white'>Loja Daterra</Button>
            </GridItem> */}
            </>
         }
      </Grid>
   )
}
