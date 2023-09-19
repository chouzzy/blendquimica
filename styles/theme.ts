import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Heebo, Nanum Gothic, sans-serif',
      body:'Heebo, Nanum Gothic, sans-serif',
   },
   colors: {
     datBlue: "#516BA5",
     datShinyBlue: "#516BA5",
     datDarkBlue: "#15274c",
     datGreen:"#a5d320",
     datGreenActive:"#8de90d",
     datGreenBrindes:"#c8d404",
     datGray: "#d1d3d4",
     datBrown: "#b3866a",
     datPerola: '#e5e4e1',
     datMake: '#e6c3a1',
     datMakeGold: '#e7c695'
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          bgRepeat:'no-repeat',
          bgSize:'cover',
          bgAttachment:'fixed',
          bgImage: "static/img/folhas.jpg",
          color: 'gray.900',
          
        },
       // styles for the `a`
        a: {
          // color: 'teal.500',
          _hover: {
            textDecoration: 'none',
          },
        },
     },
   },
 })