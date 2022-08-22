import { Box, Button, Collapse, Container, Grid, GridItem, HStack, Image, ScaleFade, SlideFade, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";

export function ModalVideo(teamProps) { 
   const iframeHeight = useBreakpointValue({
      base: '300px', 
      sm: '400px', 
      md: '500px',
      lg: '500px',
      xl: '500px'
   })
   return (
      <>
         <Grid w='100%' justifyContent='center'>

            <GridItem mx='auto'>
               <Button boxShadow='lg' fontSize='1.8rem' color='datDarkBlue' border='1px solid #00000018' size='lg' w={16} p={2}  _hover={{bg:'datGreen'}} onClick={teamProps.modal.onToggle}>
                  <BsChevronDoubleDown/>
               </Button>

            </GridItem>

            <Collapse in={teamProps.modal.isOpen}>
               <Box
                  rounded='md'
                  boxSizing="border-box"
                  mt={8}
                  w='80vw'
               >
                  <iframe width="100%" height={iframeHeight} src="https://www.youtube.com/embed/Khg27HTFJ-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </Box>
            </Collapse >
         </Grid>
      </>
   )
}