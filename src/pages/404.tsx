import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
// import Lottie from 'react-lottie'
import animationData from '../../public/animations/404.json';

export default function NotFound () {

   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

   return (
      <Container maxW='100vw' minH='100vh' p={5} m='0' bg='datBlue' color='datGreen' centerContent>

         <Box maxW={['100vw','90vw','75vw','50vw']} my='auto' >
            <Flex>
               <Text mx='auto' fontSize={['1.6rem','1.5rem','2rem','2rem']} display='inline'>
                  Erro 404
               </Text>
            </Flex>
            {/* <Lottie 
               options={defaultOptions}
               cursor='none'
            /> */}
         </Box>
            <Link _hover={{color: "datGreen"}} color='white' mx='auto' cursor='pointer'  border='1px' borderRadius={4} p={2} href='/'>
               Clique aqui para voltar
            </Link>
      </Container>

   )
}