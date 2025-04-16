import React from 'react';
import {
    Flex,
    VStack,
    Heading,
    Text,
    Link,
    Icon,
    useColorModeValue,
    HStack
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons'; // Exemplo de ícone - substitua pelo ícone "fin"
import { scrollToSection, slugify, whatsappLink } from '../../utils';
import { Envelope, InstagramLogo, LinkedinLogo, Phone, PhoneCall, WhatsappLogo } from 'phosphor-react';
import { useRouter } from 'next/router';

interface FooterProps {
    ids: string[]
}

export function Container_10({ ids }: FooterProps) {

    const textColor = useColorModeValue("gray.600", "gray.400");
    const linkColor = useColorModeValue("blue.500", "blue.300");
    const bgColor = useColorModeValue("gray.100", "gray.700")

    return (
        <Flex
        alignItems='center'
        justifyContent={'center'}
        flexDir='column'
        bg={'blendDarkBlue'}
    >
        <Flex
            as="footer" // Semanticamente mais correto
            direction={{ base: 'column', md: 'row' }} // Coluna em mobile, linha em desktop
            justifyContent="space-between" // Distribui as colunas
            alignItems="flex-start" // Alinha as colunas no topo
            wrap="wrap" // Quebra para a próxima linha se não houver espaço
            p={8}
            color={'white'}
            width="full"
            mt={2}
            maxW={1920}
        >
            {/* Coluna "NAVEGAR PELO SITE" */}
            <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }} flexBasis={{ base: '100%', md: '30%' }}>
                <Heading as="h4" size="md">
                    NAVEGAR PELO SITE
                </Heading>
                {ids.map((id, idx) => {
                    return (
                        <Flex key={id + idx} cursor={'pointer'} onClick={() => scrollToSection(slugify(id))}>{id}</Flex>
                    )
                })}

            </VStack>

            {/* Coluna "INFORMAÇÕES DA EMPRESA" */}
            <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }} flexBasis={{ base: '100%', md: '30%' }}>
                <Heading as="h4" size="md">
                    INFORMAÇÕES DA EMPRESA
                </Heading>
                <Text>
                    BLEND COSMETICOS INDUSTRIA LTDA
                </Text>
                <Text>
                    CNPJ: 07.728.817/0001-20
                </Text>
                <Text>
                    Rua Domiciano Leite de Assis, 380 - Distrito industrial Adib Rassi
                    <br></br>
                    CEP: 14680-000 - Jardinópolis-SP
                </Text>
            </VStack>

            {/* Coluna "CANAIS DE ATENDIMENTO" */}
            <VStack align="flex-start" spacing={4} flexBasis={{ base: '100%', md: '30%' }}>
                <Heading as="h4" size="md">
                    CANAIS DE ATENDIMENTO
                </Heading>

                <HStack>
                    <PhoneCall size={18} />
                    <Link href="tel:+5516991790291" isExternal _hover={{ color: 'datGreen' }}> {/* Adicionado o link e o código do país */}
                        <Text>
                            (16) 99179-0291
                        </Text>
                    </Link>
                </HStack>
                <HStack>
                    <Envelope size={18} />
                    <Link href="mailto:comercial@blendquimica.com.br" isExternal _hover={{ color: 'datGreen' }}> {/* Adicionado o link */}
                        <Text>
                            comercial@blendquimica.com.br
                        </Text>
                    </Link>
                </HStack>
                <Flex>
                    <Text>
                        Rua Domiciano Leite de Assis, 380 - Distrito industrial Adib Rassi
                    </Text>
                </Flex>
                <Flex>
                    <Text>
                        CEP: 14680-000 - Jardinópolis-SP
                    </Text>
                </Flex>
                {/* Exemplo com ícone (substitua pelo ícone "fin") */}

                <HStack justifyContent='center' alignItems='baseline' spacing={2} fontSize='1.3rem' color='white'>
                    <Link href='https://www.instagram.com/blendquimica_cosmeticos/'> <InstagramLogo size={42} weight="fill" /> </Link>
                    <Link href='https://www.linkedin.com/company/blend-qu%C3%ADmica/'> <LinkedinLogo size={42} weight="fill" /> </Link>
                    <Link id='#zap-tag' href={whatsappLink(useRouter().pathname)}> <WhatsappLogo size={42} weight="fill" /> </Link>
                    {/* <Image w='70px' src='images/zap.png' alt='Dan Abramov' /> */}
                </HStack >
            </VStack>
        </Flex >
        </Flex >
    );
};