
import { Box, Button, Collapse, Grid, GridItem, List } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { ServiceListItem } from "./ServiceListItem";
import animationData from "../../../../../../public/animations/production.json";
import dynamic from "next/dynamic";


export function ModalProjectTypes(Props) {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice"
      }
   }

   const Lottie = dynamic(() => import('lottie-react'), {
      ssr: false, // Desabilita a renderização no servidor
   });

   return (
      <>
         <Grid w='100%' justifyContent='center' p={0}>

            <GridItem mx='auto'>
               <Button fontSize='1.4rem' bg='none' p={0} color='datGreen' _hover={{ color: 'datBlue', transition: '200ms' }} onClick={Props.modal.onToggle}>
                  <BsChevronDoubleDown />
               </Button>

            </GridItem>

            <Collapse in={Props.modal.isOpen}>
               <Box w={['100%', '100%', '40vw', '28vw']} mx='auto' mt={8}>
                  {Props.list ?
                     ''
                     :
                     <Box p={6}>
                        <Lottie animationData={animationData} />
                     </Box>
                  }
                  <List spacing={2} my={8} px={[8, 8, 4, 8]} justifyContent='center' textAlign='left'>
                     {Props.list?.map(item => {
                        return (
                           <ServiceListItem key={item.text} text={item.text} />
                        )
                     })
                     }
                  </List>
               </Box>
            </Collapse >
         </Grid>
      </>
   )
}