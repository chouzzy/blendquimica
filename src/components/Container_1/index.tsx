import { Box, Container, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

export function Container_1() { 
   // useEffect( () => alert('Site em construção 🚜'),[])
   return (
      
      <>
         
         <Container id='#Home' maxW='100vw' bg='gray.500' p='0' m='0' centerContent>
            <Navbar/>
            <Banner/>
         {/* Grid 5 images */}
         </Container> 
      </>
   )
}