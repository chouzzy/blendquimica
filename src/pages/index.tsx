import { Button, Flex, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Container_1 } from '../components/Container_1'
import { Container_10 } from '../components/Container_10'
import { Container_1_5 } from '../components/Container_1_5'
import { Container_2 } from '../components/Container_2'
import { Container_3 } from '../components/Container_3'
import { Container_3_5 } from '../components/Container_3_5'
import { Container_3_6 } from '../components/Container_3_6/Container_2'
import { Container_4 } from '../components/Container_4'
import { Container_6 } from '../components/Container_6'
import WhatsButton from '../components/Container_6/WhatsButton'
import { Container_7 } from '../components/Container_7'
import { Container_8 } from '../components/Container_8'
import { Container_9 } from '../components/Container_9'
import { whatsappLink } from '../utils'

export default function Home() {
   const ids = ['Inicial', 'Nossos diferenciais', 'Categorias de produtos', 'Serviços ', 'Etapas do projeto', 'Nossos parceiros']
   return (
      <>
         <Head>
            <title>Blend Química</title>
         </Head>
         <Container_1 id={ids[0]} ids={ids} />
         {/* <Container_1_5/> */}
         {/* <Container_2/> */}
         <Container_3 id={ids[1]} />
         <Container_3_5 id={ids[2]} />
         <Container_7 id={ids[3]} />
         <Container_8 id={ids[4]} />
         <Container_9 id={ids[5]} />
         <Container_10 ids={ids} />
         {/* <Container_3_6/>
         <Container_4/>
         <Container_6/> */}
         <WhatsButton />
      </>

   )
}