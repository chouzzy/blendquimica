import { Box, Container, Grid, GridItem, Image, SimpleGrid, Text, Link, useBreakpointValue, Input, Stack, Button, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";
import { FooterRights } from "./Footer_rights";
import { useForm } from 'react-hook-form'
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export function Container_6() {

   const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
   } = useForm()

   const [disable, setDisable] = useState(false)
   const [color, setColor] = useState('datGreen')
   const [sentText, setSentText] = useState('Enviar')


   function onSubmit(values) {
      setDisable(true)
      setColor('datBlue')
      setSentText('Enviado ✔')
      return new Promise(() => {
         setTimeout(() => {
            fetch('/api/mail', {
               method: 'post',
               body: JSON.stringify(values)
            })
         }, 2000)
      })
   }

   const isTabletVersion = useBreakpointValue({
      base: false,
      sm: true,
      md: false,
      lg: false,
      xl: false
   })
   const isDesktopVersion = useBreakpointValue({
      base: false,
      sm: false,
      md: true,
      lg: true,
      xl: true
   })
   const isMobileVersion = useBreakpointValue({
      base: true,
      sm: false,
      md: false,
      lg: false,
      xl: false
   })

   return (
      <>
         {isDesktopVersion ?
            <Box h='0vh'></Box>
            :
            ''
         }
         <Container id='#footer' maxW='100vw' color='datBlue' bg='white' p='0' m='0' centerContent>

            {isMobileVersion ?
               <Grid w='90vw' py='5' alignItems='baseline' borderBottom='1px solid #55808c'
                  templateRows='repeat(1, 1fr)'
                  gap={5} textAlign='center' color='datBlue'>
                  <GridItem colStart={1} colEnd={13} mt='auto' py={5} borderBottom='1px solid #55808c' >
                     <Image src={"static/img/blend-logo.png"} maxW='50%' mx='auto' alt='Logo daquimica' />
                  </GridItem>

                  <GridItem colStart={1} colEnd={13} mt='50px'>
                     <SimpleGrid templateRows='repeat(1, 1fr)'>
                        <SimpleGrid mx='auto' textAlign='center'>
                           <Box fontSize='1.4rem' fontWeight='600'> Endereço/ Telefone </Box>
                           <Box fontSize='1rem' fontWeight='400'>
                              <Text py={1}> (16) 99179-0291 </Text>
                              <Text py={1}> Comercial@blendquimica.com.br </Text>
                              <Text py={1}> Rua Domiciano Leite de Assis, 380 - Distrito industrial Adib Rassi </Text>
                              <Text py={1}> CEP: 14680-000 - Jardinópolis-SP </Text>
                           </Box>
                        </SimpleGrid >
                        <SimpleGrid mx='auto' w='9rem' columns={4} fontSize='1.6rem'>
                           <Link _hover={{ color: "teal.400" }} mt='auto' href='https://www.instagram.com/blendquimica_cosmeticos/'> <InstagramLogo /> </Link>
                           <Link _hover={{ color: "teal.400" }} mt='auto' href='https://www.linkedin.com/company/blend-qu%C3%ADmica/'> <LinkedinLogo /> </Link>
                           <Link _hover={{ fontSize: '3rem', transition: '200ms' }} mt='auto' color='#6cd474' fontSize='2.8rem' href='https://wa.me/5516991790291'> <WhatsappLogo weight="fill" /> </Link>
                        </SimpleGrid >
                     </SimpleGrid>
                  </GridItem>

                  <GridItem borderTop='1px solid #55808c' py={5} colStart={1} colEnd={13} mt={5}>
                     <Stack spacing={2} w='100%' textAlign='left'>
                        <Box fontSize='1.2rem' fontWeight='600'> Envie-nos uma mensagem </Box>

                        <FormControl isRequired>
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <Text>Empresa/ Pessoa:</Text>
                              <Input
                                 type='name'
                                 my='10px'
                                 placeholder='Digite o nome de sua empresa'
                                 size='sm'
                                 w='100%'
                                 {...register("Empresa")}
                              />
                              <Text>E-mail:</Text>
                              <Input
                                 type='name'
                                 my='10px'
                                 placeholder='Seu e-mail'
                                 size='sm'
                                 w='100%'
                                 {...register("Email")}
                              />

                              <Text>Número:</Text>
                              <Input
                                 type='tel'
                                 my='10px'
                                 placeholder='DDD + Seu número (fixo ou celular)'
                                 size='sm'
                                 w='100%'
                                 {...register("telefone")}
                              />

                              <Text >Mensagem:</Text>
                              <Input
                                 type='text'
                                 my='10px'
                                 placeholder='Mensagem'
                                 size='sm'
                                 w='100%'
                                 {...register("Mensagem")}
                              />
                              <Button
                                 w='100%'
                                 type='submit'
                                 borderRadius={3}
                                 mt={8}
                                 _hover={{
                                    bg: 'datBlue',
                                    transition: '360ms'
                                 }}
                                 cursor='pointer'
                                 bg={color}
                                 disabled={disable}
                                 color='white'
                              >
                                 {sentText}
                              </Button>
                           </form> </FormControl>
                     </Stack>
                  </GridItem>
               </Grid>
               :
               ''
            }
            {isTabletVersion ?
               <>
                  <Grid w='90vw' py='5' alignItems='baseline' borderBottom='1px solid #55808c'
                     templateRows='repeat(2, 1fr)'
                     gap={5} textAlign='center' color='datBlue'>
                     <GridItem colStart={1} colEnd={6} mt='auto' >

                        <Image src={"static/img/blend-logo.png"} maxW='100%' alt='Logo daquimica' />
                     </GridItem>

                     <GridItem colStart={6} colEnd={13} mt='auto'>
                        <SimpleGrid templateRows='repeat(2, 1fr)'>
                           <SimpleGrid mx='auto' textAlign='right'>
                              <Box fontSize='1.4rem' fontWeight='600'> Endereço/ Telefone </Box>
                              <Box fontSize='1rem' fontWeight='400'>
                                 <Text py={1}> (16) 99179-0291 </Text>
                                 <Text py={1}> Comercial@blendquimica.com.br </Text>
                                 <Text py={1}> Rua Domiciano Leite de Assis, 380 - Distrito industrial Adib Rassi </Text>
                                 <Text py={1}> CEP: 14680-000 - Jardinópolis-SP </Text>
                              </Box>
                           </SimpleGrid >
                           <SimpleGrid ml='auto' w='9rem' columns={4} fontSize='1.6rem'>
                              <Link _hover={{ color: "teal.400" }} mt='auto' href='https://www.instagram.com/blendquimica/'> <InstagramLogo /> </Link>
                              <Link _hover={{ color: "teal.400" }} mt='auto' href='https://www.linkedin.com/company/blend-qu%C3%ADmica/'> <LinkedinLogo /> </Link>
                              <Link _hover={{ fontSize: '3rem', transition: '200ms' }} mt='auto' color='#6cd474' fontSize='2.8rem' href='https://wa.me/5516991790291'> <WhatsappLogo weight="fill" /> </Link>
                           </SimpleGrid >
                        </SimpleGrid>
                     </GridItem>

                     <GridItem borderTop='1px solid #55808c' py={5} colStart={1} colEnd={13} mt={5}>
                        <Stack spacing={2} w='100%' textAlign='left'>
                           <Box fontSize='1.2rem' fontWeight='600'> Envie-nos uma mensagem </Box>

                           <FormControl isRequired>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                 <Text>Empresa/ Pessoa:</Text>
                                 <Input
                                    type='name'
                                    my='10px'
                                    placeholder='Digite o nome de sua empresa'
                                    size='sm'
                                    w='100%'
                                    {...register("Empresa")}
                                 />
                                 <Text>E-mail:</Text>
                                 <Input
                                    type='name'
                                    my='10px'
                                    placeholder='Seu e-mail'
                                    size='sm'
                                    w='100%'
                                    {...register("Email")}
                                 />

                                 <Text>Número:</Text>
                                 <Input
                                    type='tel'
                                    my='10px'
                                    placeholder='DDD + Seu número (fixo ou celular)'
                                    size='sm'
                                    w='100%'
                                    {...register("telefone")}
                                 />

                                 <Text >Mensagem:</Text>
                                 <Input
                                    type='text'
                                    my='10px'
                                    placeholder='Mensagem'
                                    size='sm'
                                    w='100%'
                                    {...register("Mensagem")}
                                 />

                                 <Button
                                    w='100%'
                                    type='submit'
                                    borderRadius={3}
                                    mt={8}
                                    _hover={{
                                       bg: 'datBlue',
                                       transition: '360ms'
                                    }}
                                    cursor='pointer'
                                    bg={color}
                                    disabled={disable}
                                    color='white'
                                 >
                                    {sentText}
                                 </Button>
                              </form> </FormControl>
                        </Stack>
                     </GridItem>
                  </Grid>
               </>
               :
               ''
            }

            {isDesktopVersion ?
               <>
                  <Grid w='90vw' py='5' alignItems='baseline' borderBottom='1px solid #55808c'
                     templateColumns='repeat(12, 1fr)'
                     gap={0} textAlign='center' color='datBlue'>
                     <GridItem colStart={1} colEnd={3} mt='auto' >

                        <Image src={"static/img/blend-logo.png"} maxW={['100px', '100px', '110px', '90%']} alt='Dan Abramov' />
                     </GridItem>

                     <GridItem colStart={3} colEnd={7} mt='auto'>
                        <SimpleGrid >
                           <SimpleGrid mr='auto' textAlign='left'>
                              <Box fontSize='1.4rem' fontWeight='600'> Endereço/ Telefone </Box>
                              <Box fontSize='1rem' fontWeight='400'>
                                 <Text py={1}> (16) 99179-0291 </Text>
                                 <Text py={1}> Comercial@blendquimica.com.br </Text>
                                 <Text py={1}> Rua Domiciano Leite de Assis, 380 - Distrito industrial Adib Rassi </Text>
                                 <Text py={1}> CEP: 14680-000 - Jardinópolis-SP </Text>
                              </Box>
                           </SimpleGrid >
                           <SimpleGrid mt='15%' mr='auto' w='9rem' columns={4} fontSize='1.6rem'>
                              <Link _hover={{ color: "teal.400" }} mt='auto' href='https://www.instagram.com/blendquimica/'> <InstagramLogo /> </Link>
                              <Link _hover={{ color: "teal.400" }} mt='auto' href='https://www.linkedin.com/company/blend-qu%C3%ADmica/'> <LinkedinLogo /> </Link>
                              <Link _hover={{ fontSize: '3rem', transition: '200ms' }} mt='auto' color='#6cd474' fontSize='2.8rem' href='https://wa.me/5516991790291'> <WhatsappLogo weight="fill" /> </Link>
                           </SimpleGrid >
                        </SimpleGrid>
                     </GridItem>

                     <GridItem colStart={8} colEnd={13} mt='auto'>
                        <Stack spacing={2} w='100%' textAlign='left'>
                           <Box fontSize='1.2rem' fontWeight='600'> Envie-nos uma mensagem </Box>


                           <FormControl isRequired>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                 <Text>Empresa/ Pessoa:</Text>
                                 <Input
                                    type='name'
                                    my='10px'
                                    placeholder='Digite o seu nome ou o de sua empresa'
                                    size='sm'
                                    w='100%'
                                    {...register("Empresa")}
                                 />
                                 <Text>E-mail:</Text>
                                 <Input
                                    type='name'
                                    my='10px'
                                    placeholder='Seu e-mail'
                                    size='sm'
                                    w='100%'
                                    {...register("Email")}
                                 />

                                 <Text>Número:</Text>
                                 <Input
                                    type='tel'
                                    my='10px'
                                    placeholder='DDD + Seu número (fixo ou celular)'
                                    size='sm'
                                    w='100%'
                                    {...register("telefone")}
                                 />

                                 <Text >Mensagem:</Text>
                                 <Input
                                    type='text'
                                    placeholder='Mensagem'
                                    size='sm'
                                    w='100%'
                                    {...register("Mensagem")}
                                 />

                                 <Button
                                    w='100%'
                                    type='submit'
                                    borderRadius={3}
                                    mt={8}
                                    _hover={{
                                       bg: 'datBlue',
                                       transition: '360ms'
                                    }}
                                    cursor='pointer'
                                    bg={color}
                                    disabled={disable}
                                    color='white'
                                 >
                                    {sentText}
                                 </Button>
                              </form> </FormControl>

                        </Stack>
                     </GridItem>
                  </Grid>
               </>
               :
               ''
            }
            <FooterRights />
         </Container>
      </>
   )
}
