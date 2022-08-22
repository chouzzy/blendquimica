import { Link, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export function FooterRights() { 

   return (
         <Text textAlign='left' w='90vw' py={3} fontSize='0.8rem'>Todos os direitos reservados - created by <Link color='#F55F5E' href='https://www.awer.co' _hover={{color: "teal.400"}}> awer.co</Link></Text>
   )
}