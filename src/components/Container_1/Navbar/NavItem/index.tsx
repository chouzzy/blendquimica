import { Box} from "@chakra-ui/react"

import {Link as Slink} from 'react-scroll'


export function NavItem(NavItemProps) {
   return (
         <Slink  activeClass={NavItemProps.activeClass} to={NavItemProps.id} spy={true} smooth={true} offset={-100} duration={500}>
            <Box cursor='pointer' color={NavItemProps.color} _hover={{color: "datGreen", transition:'500ms'}} flex='1'> {NavItemProps.text}</Box>
         </Slink>
   )
}