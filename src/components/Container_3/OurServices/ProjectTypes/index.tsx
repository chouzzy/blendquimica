import { Flex, Grid, GridItem, Image, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { ModalProjectTypes } from "./ModalProjectTypes";

const fullServiceList = [
   {text:'Desenvolvimento da fórmula'},
   {text:'Produção'},
   {text:'Envase'},
   {text:'Compra das embalagens '},
   {text:'Compra dos rótulos'},
   {text:'Registo na ANVISA'},
   {text:'Testes de segurança e eficácia'},
   {text:'Desenv. da arte para as embalagens'},
   {text:'Criação da identidade visual'},
]
const subtitle = <>A <b>singularidade</b> de cada cliente incentiva o desenvolvimento de cosméticos com <b>diferentes particularidades.</b></>
const fullService = <>Te auxiliamos em <b>todas</b> as etapas da criação do seu cosmético</>
const parcialService = <>O cliente tem a possibilidade de <b>terceirizar</b> algumas etapas do processo</>

export function ProjectTypes() { 
   const FullServiceModal = useDisclosure()

   return (
         <GridItem colSpan={12} bg={['white','white','none','none']} w='100%'  p={[2,4,8,4]} my={[8,8,2,6]} >

               <Grid templateColumns='repeat(12, 1fr)' gap={[0,6,6,0]} pl={[0,0,0,0,0]} color='datBlue' fontWeight='500'>

                  <GridItem textAlign={['center','center','left','left']} colSpan={[12,12,12,4]} py={[0,8,8,8]} px={[8,8,8,4]}>
                     <Text fontSize={['1.7rem','1.9rem','1.4rem','2rem' ]} color={['datDarkBlue','datDarkBlue','datBlue','white']} fontWeight='600' textTransform='uppercase'>Nossos serviços</Text>
                     <Text fontSize={['0.9rem','1rem','1rem','1rem']} color={['gray.600','gray.600','gray.600','gray.50']} fontWeight='400'>
                        {subtitle}
                     </Text>
                  </GridItem>

                  <GridItem colSpan={[12,12,12,8]} color='gray.600'>
                     <Grid p={[8,8,0,0]} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={4} h='100%' alignItems='center'>

                        <Grid boxShadow='lg' templateRows='repeat(1, 1fr)' fontSize={['0.6rem','0.7rem','0.9rem','0.9rem']} textAlign='center' bg='white' border='1px solid #00000030' borderRadius={8} h='100%' alignItems='center'>

                           <VStack mb='auto'>
                              <Text fontSize='1.6rem' color='datDarkBlue'  w='100%'  textTransform='uppercase'pt={4} border='8px 8px 0px 0px'> Full Service </Text>
                              <Text fontWeight='400' fontSize='1rem' px={2}>{fullService}</Text>
                              <ModalProjectTypes
                                 modal={FullServiceModal}
                                 list={fullServiceList}
                              />
                           </VStack>
                           
                        </Grid>
                        <Grid boxShadow='lg' templateRows='repeat(1, 1fr)' fontSize={['0.6rem','0.7rem','0.9rem','0.9rem']} textAlign='center' bg='white' border='1px solid #00000030' borderRadius={8}  h='100%' alignItems='center'>
                           <VStack mb='auto'>
                              <Text fontSize='1.6rem' color='datDarkBlue'  textTransform='uppercase'  w='100%' pt={4}> Parcial</Text>
                              <Text fontWeight='400' fontSize='1rem' px={2}>{parcialService}</Text>
                              <ModalProjectTypes
                                 modal={FullServiceModal}
                              />
                           </VStack>
                        </Grid>
                     </Grid>
                  </GridItem>
               </Grid>
         </GridItem>
   )
}