import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Lines } from "./Lines";

export function Container_2() { 

   const isMobileVersion = useBreakpointValue({ 
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
    })

   return (
      <Container id='#segmentos' maxW='100vw' color='white' bg='white' p='0' m='0' centerContent>
         <Lines/>
      </Container> 
   )
}