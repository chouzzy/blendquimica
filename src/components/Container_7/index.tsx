import { Box, Container, Flex, Grid, GridItem, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { slugify } from "../../utils";
import { OurServices } from "./OurServices";

interface Container_7Props {
    id: string
 }

export function Container_7({ id }: Container_7Props) {

    return (
        <Container id={slugify(id)} maxW='100vw'
            bgGradient={['white', 'white', 'linear(to-br, #15274c3a 15%, #15274c98 90%)', 'linear(to-br, #15274c3a 15%, #15274c98 90%)']} p='0' m='0' centerContent>
            <OurServices />
        </Container>
    )
}