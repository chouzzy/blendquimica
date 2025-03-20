// import { Box, Container, Flex, Grid, GridItem, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
// import { FaBrain, FaCalendarCheck, FaTruck } from "react-icons/fa";
// import { GoPackage } from "react-icons/go";
// import { ItemSide } from "./ItemSide";
// import { useState } from "react";

// const sideMenuText = [
//    {  title:'1º Briefing e Definição do cosmético',
//       description: <>Coleta de informação e entendimento do cosmético.<br></br>O desenvolvimento leva em consideração <b>particularidades</b>, como ativos, cor, <b>fragrância</b> e sensorial. </>,
//    },
//    {  title:'2º Aprovação de amostras',
//       description:<>Enviamos as amostras ao cliente para <b>aprovação</b> do pedido solicitado.</>,
//    },
//    {  title:'3º Rótulo e embalagem',
//       description:<>Definição do modelo, volume e design da <b>embalagem</b> e rótulo.</>,
//    },
//    {  title:'4º Produção, Rotulagem e entrega',
//       description:<>Etapa em que o cosmético é <b>produzido</b> e fica <b>pronto</b> para ser comercializado.</>,
//    },
// ]

// export function ProjectSteps() { 
   
//    const [etapa1, setEtapa1] = useState(true)
//    const [etapa2, setEtapa2] = useState(false)
//    const [etapa3, setEtapa3] = useState(false)
//    const [etapa4, setEtapa4] = useState(false)
//    const [menuTitle, setMenuTitle] = useState(sideMenuText[0].title)  
//    const [menuText, setMenuText] = useState(sideMenuText[0].description) 
//    const [activeColor1, setActiveColor1] = useState('datGreenActive')
//    const [activeColor2, setActiveColor2] = useState('datBlue')
//    const [activeColor3, setActiveColor3] = useState('datBlue')
//    const [activeColor4, setActiveColor4] = useState('datBlue')
//    const [image, setImage] = useState("static/img/footer-menu/briefing.jpg")
   
//    const sideMenuData = [
//       {id:1, name:'1º Briefing e definição do cosmético', icon: <FaBrain/>, state:etapa1, setState:setEtapa1,active:activeColor1},
//       {id:2, name:'2º Aprovação de amostras', icon: <FaCalendarCheck/>, state:etapa2, setState:setEtapa2,active:activeColor2},
//       {id:3, name:'3º Rótulo e embalagem', icon: <GoPackage/>, state:etapa3, setState:setEtapa3,active:activeColor3},
//       {id:4, name:'4º Produção, Rotulagem e entrega', icon: <FaTruck/> , state:etapa4, setState:setEtapa4,active:activeColor4}
//    ]
   
//    function changeMenu(setState, state, id) {
//       if (state == true) {
//          console.log(state)
//       } else {
//          setEtapa1(false)
//          setEtapa2(false)
//          setEtapa3(false)
//          setEtapa4(false)
//          setActiveColor1('datBlue')
//          setActiveColor2('datBlue')
//          setActiveColor3('datBlue')
//          setActiveColor4('datBlue')
         
//          if (id == 1) {
//             setActiveColor1('datGreenActive')
//             setImage("static/img/footer-menu/briefing.jpg")
//          }
//          if (id == 2) {
//             setActiveColor2('datGreenActive')
//             setImage("static/img/footer-menu/aprove.jpg")
//          }
//          if (id == 3) {
//             setActiveColor3('datGreenActive')
//             setImage("static/img/footer-menu/embalagem.jpg")
//          }
//          if (id == 4) {
//             setActiveColor4('datGreenActive')
//             setImage("static/img/footer-menu/production.jpg")
//          }
//          setState(true)
//          setMenuTitle(sideMenuText[(id-1)].title)
//          setMenuText(sideMenuText[(id-1)].description)
         
//       }
//       return
//    }
//    return (
//       <GridItem colSpan={12} bg={'white'} py={[0,0,0,8]}> 
//       <Grid templateColumns='repeat(12, 1fr)'>
//          <GridItem colStart={[1,1,1,1,1]} colEnd={[13,13,13,4,4]}>
//             <Grid px={[0,0,0,0,2]} py={4} h='100%' gap={[0,0,0,6,6]}
//             templateColumns={['repeat(4, 1fr)','repeat(4, 1fr)','repeat(5, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)']} bg='gray.200' alignItems='center' border='1px solid #00000010'>
               
//                <GridItem  color='datBlue' colStart={[1,1,1,1,1]} colEnd={[13,13,2,2,2]} py={[0,4,0,0]} textAlign='center' alignItems='center'>
//                   <Text fontSize={['1.8rem','1.8rem','1.6rem','1.8rem']} px={2} fontWeight='400' textTransform='uppercase'>
//                      Etapas de projeto
//                   </Text>
//                </GridItem>

//                <>
//                { sideMenuData.map( item => {
//                   return (
//                      <ItemSide
//                        key={item.id}
//                        id={item.id}
//                        active={item.active}
//                        name={item.name}
//                        state={item.state}
//                        setState={item.setState}
//                        changeMenu={changeMenu}
//                        icon={item.icon}
//                      />
//                      )
//                   })}
//                </>
//             </Grid>
//          </GridItem>

//          <GridItem colStart={[1,1,1,4,4]} colEnd={[13,7,7,8,8]} textTransform='uppercase'>
//             <Image p={[8,8,6,8,8]} h='100%' objectFit='cover' src={image}/>
//          </GridItem>
//          <GridItem colStart={[1,7,7,8,8]} mr={[0,4,8,8,8]} colEnd={[13,13,13,13,13]} border='1px solid #00000010' bg='gray.200' >
//             <VStack p={[8,8,8,8,12]} spacing={4}>
//                <Flex w='100%' mb='-10px'>
//                      <Text fontSize={['1.3rem','1.5rem','2rem','2rem']} lineHeight={1.2} px={[0,0,0,2]} color='datGreenActive' fontWeight='600'>
//                      {menuTitle}
//                      </Text>
//                </Flex>
//                <Flex w='100%' mb='-10px'>
//                   <Text fontSize={['1rem','1.2rem','1.4rem','1.4rem']} p={[0,0,0,2]} color='gray.600' fontWeight='300'>
//                   {menuText}
//                   </Text>
                     
//                </Flex>
//             </VStack>
//          </GridItem>
//       </Grid>
//       </GridItem>
//    )
// }