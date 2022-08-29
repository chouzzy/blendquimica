import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Heebo',
      body:'Heebo'
   },
   colors: {
     datBlue: "#516BA5",
     datShinyBlue: "#516BA5",
     datDarkBlue: "#15274c",
     datGreen:"#a5d320",
     datGreenActive:"#8de90d",
     datGray: "#d1d3d4"
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          bgRepeat:'no-repeat',
          bgSize:'100%',
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