import { Button, useBreakpointValue, Grid, GridItem,Link, Image, Box, HStack, SimpleGrid} from "@chakra-ui/react"

import {Link as Slink} from 'react-scroll'
import { ModalMenu } from "./Modal";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { NavItem } from "./NavItem";

export function Navbar() {
   const isMobile = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   })

   const navItems= [
   {id:'#Home', text:'Home', active:'active'},
   {id:'#segmentos', text:'Segmentos'},
   {id:'#serviços', text:'Serviços'},
   {id:'#sobre', text:'Quem somos'}, 
   {id:'#footer', text:'Fale conosco'}]

   return (
         <Grid
            py={2}
            position='relative'
            bg='white'
            boxShadow='xl'
            templateColumns={['','','','repeat(12,1fr)','repeat(12,1fr)']}
            w='100%'
            fontFamily='Heebo'
            fontWeight='400'
            textAlign='center'
            bgColor='white.50'
            alignItems='end'
            color='gray.600'
         >

         <GridItem mr={['auto','','','','auto']} ml={[4,4,'',4,8]}  colStart={[0,0,1,1,1]} colEnd={[0,0,3,3,3]}>
            <Image mx='auto' src='static/img/blend-logo.png' maxW={['116px','116px','116px','116px']} alt='Logo Blendquimica'/>
         </GridItem>

         {isMobile?
            <ModalMenu navItems={navItems}/>
         : 
         <>
            <GridItem colStart={[3,3,3,3,3]} colEnd={[10,10,10,11,11]} >
            <HStack justifyContent='center' textTransform='uppercase' spacing={[0,0,0,4,16]} fontSize={['1rem','1rem','1rem','0.9rem']}>
                     {navItems.map(item => {
                        return (
                           <NavItem key={item.text} id={item.id} text={item.text} activeClass={item.active}/>
                        )
                     })}
                  
               </HStack>
            </GridItem>

            <GridItem colStart={[10,10,10,11,11]} colEnd={13}>
               <HStack justifyContent='center' alignItems='baseline' spacing={2} fontSize='1.3rem' color='datBlue'>
                  <Link _hover={{color: "teal.400"}} href='https://www.instagram.com/blendquimica_cosmeticos/'> <BsInstagram /> </Link>
                  <Link  _hover={{color: "teal.400"}} href='https://www.linkedin.com/company/blend-qu%C3%ADmica/'> <SiLinkedin/> </Link>
                  <Link _hover={{fontSize:"3rem", transition:'200ms'}} color='#6cd474'fontSize='2.4rem' href='https://wa.me/5516991790291?text=Olá, tudo bem? Acessei o site da Blend Química e gostaria de falar com um atendente.'> <RiWhatsappFill/> </Link>
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
