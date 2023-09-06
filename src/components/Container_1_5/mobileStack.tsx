import { Flex, Container, Text, useBreakpointValue, Image, Divider, HStack, VStack, Button, Link, textDecoration } from "@chakra-ui/react";
import { brindes } from "./brindesData";

export function MobileStack(imdobileVersion) {
    return (
        <VStack
            justifyContent='center'
            alignItems='center'
        >
            <Flex
                flexDir='column'
                pt={4}
                w='100%'
                alignItems='flex-start'>
                <Text
                    fontSize={imdobileVersion ? 'md' : 'md'}
                    fontWeight='bold'
                    color='datMakeGold'>
                    {brindes.saboneteLiquidoTitle}
                </Text>
                <Text fontSize={imdobileVersion ? 'md' : 'md'}>
                    {brindes.saboneteLiquidoDescription}
                </Text>
            </Flex>

            <Divider orientation='horizontal' w={'100%'} />

            <Flex
                flexDir='column'
                pt={4}
                w='100%'
                alignItems='flex-start'>
                <Text
                    fontSize={imdobileVersion ? 'md' : 'md'}
                    fontWeight='bold'
                    color='datPerola'>
                    {brindes.difusorAmbienteTitle}
                </Text>
                <Text fontSize={imdobileVersion ? 'md' : 'md'}>
                    {brindes.difusorAmbienteDescription}
                </Text>
            </Flex>

            <Divider orientation='horizontal' w={'100%'} />

            <Flex
                flexDir='column'
                pt={4}
                w='100%'
                alignItems='flex-start'>
                <Text
                    fontSize={imdobileVersion ? 'md' : 'md'}
                    fontWeight='bold'
                    color='datMakeGold'>
                    {brindes.velaAromaticaTitle}
                </Text>
                <Text fontSize={imdobileVersion ? 'md' : 'md'}>
                    {brindes.velaAromaticaDescription}
                </Text>
            </Flex>
        </VStack>
    )
}