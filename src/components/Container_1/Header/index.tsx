import { Box, Flex, Grid, GridItem, HStack, IconButton, Image, Link, SimpleGrid, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";



export function Header() { 
   
   const [display, changeDisplay] = useState('none')
   return (
      <Grid w='90vw' py='5' alignItems='baseline' 
      templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(8, 1fr)']} 
      gap={0} textAlign='center' color='datBlue' fontWeight='400'>

         <GridItem colSpan={1} >
            <Link href=''>
               <Image  src={"static/img/blend-logo.png"} maxW={['110px','120px','120px','100%']} alt='Dan Abramov' />
            </Link>
         </GridItem>

         <GridItem colStart={2} colEnd={8} mt='auto' display={['none', 'none', 'none','GridItem']} >
            <GridItem mx='auto' mt='auto' pb={1} fontSize={['1rem','1rem','1rem','1.2rem']}>
                  <HStack spacing={2}>
                     
                     <Slink activeClass="active" to="#Home" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1'> Home</Box>
                     </Slink>
                     
                     <Slink to="#sobre" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1'>| Sobre nós</Box>
                     </Slink>
                     
                     <Slink to="#segmentos" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1'>| Nossos segmentos</Box>
                     </Slink>
                     
                     <Slink to="#serviços" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1'>| Nossos serviços</Box>
                     </Slink>
                     
                     <Slink to="#footer" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1'>| Fale conosco</Box>
                     </Slink>
                  
                  </HStack>

            </GridItem>
         </GridItem>

         <GridItem mt='auto' display={['none', 'none', 'none','GridItem']} >

            <SimpleGrid ml='auto' w='9rem' columns={4} pb={3} mt='auto' fontSize='1.6rem'>
               <Link _hover={{color: "teal.400"}} mt='auto' href='https://www.instagram.com/farmaciadaterra/'> <BsInstagram /> </Link>
               <Link  _hover={{color: "teal.400"}} mt='auto' href='https://www.facebook.com/daterraoficial?ref=hl'> <ImFacebook2/> </Link>
               <Link  _hover={{color: "teal.400"}} mt='auto' href='https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos'> <SiLinkedin/> </Link>
               <Link _hover={{fontSize:"3rem", transition:'200ms'}} color='#6cd474'fontSize='2.8rem' href='https://wa.me/5516992469499'> <RiWhatsappFill/> </Link>
               {/* <Image w='70px' src='images/zap.png' alt='Dan Abramov' /> */}
            </SimpleGrid >
         </GridItem>
         
         {/* Mobile button */}
         <IconButton
               aria-label="Open Menu"
               size="lg"
               ml='auto'
               mt='auto'
               bg='datBlue'
               icon={
                  <RiMenuLine color='white' />
               }
               onClick={() => changeDisplay('flex')}
               display={['flex', 'flex', 'flex', 'none']}
         />
         {/* Mobile menu content  */}
         <Flex
            w='100vw'
            display={display}
            bgColor="green.50"
            zIndex={20}
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
         >
            <Flex justify="flex-end">
               <IconButton
                  mt={2}
                  mr={2}
                  aria-label="Open Menu"
                  size="lg"
                  bg='datBlue'
                  icon={
                  <RiMenuLine color='white' />
                  }
                  onClick={() => changeDisplay('none')}
               />
            </Flex>

            <Flex
               flexDir="column"
               align="left"
               fontSize='1.3rem'
            >
               <VStack>
                  <Slink to="#Home" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1' onClick={() => changeDisplay('none')}>Home </Box>
                  </Slink>
                  <Slink to="#sobre" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1' onClick={() => changeDisplay('none')}>Sobre Nós </Box>
                  </Slink>
                  <Slink to="#segmentos" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1' onClick={() => changeDisplay('none')}>Segmentos de Atuação</Box>
                  </Slink>
                  <Slink to="#serviços" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1' onClick={() => changeDisplay('none')}>Nossos Serviços</Box>
                  </Slink>
                  <Slink to="#footer" spy={true} smooth={true} offset={0} duration={500}>
                        <Box cursor='pointer' _hover={{color: "teal.400"}} flex='1' onClick={() => changeDisplay('none')}>Fale Conosco</Box>
                  </Slink>
               </VStack>

               <SimpleGrid mx='auto' w='9rem' columns={4} py={3} mt='auto' fontSize='1.6rem'>
                  <Link _hover={{color: "teal.400"}} mt='auto' href='https://www.instagram.com/farmaciadaterra/'> <BsInstagram /> </Link>
                  <Link  _hover={{color: "teal.400"}} mt='auto' href='https://www.facebook.com/daterraoficial?ref=hl'> <ImFacebook2/> </Link>
                  <Link  _hover={{color: "teal.400"}} mt='auto' href='https://br.linkedin.com/company/daterra---farm%C3%A1cia-de-manipula%C3%A7%C3%A3o-e-cosm%C3%A9ticos'> <SiLinkedin/> </Link>
                  <Link color='#6cd474'fontSize='1.6rem' href='https://wa.me/5516992469499'> <RiWhatsappFill/> </Link>
                  {/* <Image w='70px' src='images/zap.png' alt='Dan Abramov' /> */}
               </SimpleGrid >
            </Flex>

         </Flex>

      </Grid>
   )
}