import { Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Container_1 } from '../components/Container_1'
import { Container_1_5 } from '../components/Container_1_5'
import { Container_2 } from '../components/Container_2'
import { Container_3 } from '../components/Container_3'
import { Container_3_5 } from '../components/Container_3_5'
import { Container_3_6 } from '../components/Container_3_6/Container_2'
import { Container_4 } from '../components/Container_4'
import { Container_6 } from '../components/Container_6'
import WhatsButton from '../components/Container_6/WhatsButton'

export default function Home () {
   return (
      <>
         <Head>
            <title>Blend Química</title>
         </Head>
         <Container_1/>
         <Container_1_5/>
         <Container_2/>
         <Container_3/>
         <Container_3_5/>
         <Container_3_6/>
         <Container_4/>
         <Container_6/>
         <WhatsButton/>
      </>

   )
}