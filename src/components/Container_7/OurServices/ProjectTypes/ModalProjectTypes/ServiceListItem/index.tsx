import { Box, Button, Collapse, Container, Grid, GridItem, HStack, Image, List, ListIcon, ListItem, ScaleFade, SlideFade, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

export function ServiceListItem(Props) { 
   return (
      <>
         <ListItem fontWeight='400' textTransform='uppercase' fontSize='0.85rem'>
            {/* <ListIcon as={AiOutlineCheck} fontSize='1.2rem' color='green.400'/> */}
            {Props.text}
         </ListItem>
      </>
   )
}