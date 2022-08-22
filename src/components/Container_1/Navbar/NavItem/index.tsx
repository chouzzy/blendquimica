import { Button, useBreakpointValue, Grid, GridItem,Link, Image, Box, HStack, SimpleGrid} from "@chakra-ui/react"

import {Link as Slink} from 'react-scroll'
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";

export function NavItem(NavItemProps) {
   return (
         <Slink  activeClass={NavItemProps.activeClass} to={NavItemProps.id} spy={true} smooth={true} offset={-100} duration={500}>
            <Box cursor='pointer' color={NavItemProps.color} _hover={{color: "datGreen", transition:'500ms'}} flex='1'> {NavItemProps.text}</Box>
         </Slink>
   )
}