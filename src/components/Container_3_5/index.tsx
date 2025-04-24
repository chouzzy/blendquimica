import { Button, Container, Flex, Link, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { slugify, whatsappLink } from "../../utils";
import { Partners } from "./Partners";
import { Products } from "./Products";

interface Container_3_5Props {
   id: string
}

export function Container_3_5({ id }: Container_3_5Props) {

   const isMobileVersion = useBreakpointValue({
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
   })

   return (

      <Container id={slugify(id)} maxW='100vw' bg='white' p='0' m='0' centerContent>
         {/* <Partners/> */}
         <Flex flexDir={'column'} w='100%' justifyContent={'center'} alignItems='center'>
            <Products />
         </Flex>
         <Flex w='100%' p={8} alignItems='center' justifyContent={'center'}>
            <Link href={whatsappLink(useRouter().pathname)} target='_blank' isExternal>
               <Button id={'zap-tag'} color='white' bgColor='green.500' _hover={{ bgColor: 'datBlue' }} borderRadius={16} px={8}>
                  ENTRAR EM CONTATO
               </Button>
            </Link>
         </Flex>
         <Flex w='100%' p={8} alignItems='center' justifyContent={'center'}>
            <Link href={whatsappLink(useRouter().pathname)} target='_blank' isExternal>
               <Button id={'zap-tag'} color='white' bgColor='green.500' _hover={{ bgColor: 'datBlue' }} borderRadius={16} px={8}>
                  ENTRAR EM CONTATO
               </Button>
            </Link>
         </Flex>
      </Container >
   )
}