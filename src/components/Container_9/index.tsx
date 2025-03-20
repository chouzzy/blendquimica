import React from 'react';
import { Button, Flex, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { slugify, whatsappLink } from '../../utils';

interface Logo {
    src: string;
    alt: string;
    width?: string | number; // Largura opcional (para controle mais fino)
    height?: string | number; // Altura opcional
}

interface LogoGridProps {
    logos: Logo[];
}

interface Container_9Props {
    id: string
}
export function Container_9({ id }: Container_9Props) {

    const logos = [
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 1' },
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 2' },
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 3' },
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 4' },
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 4' },
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 4' },
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 4' },
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 4' },
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 4' },
        { src: 'static/v2/imgnotfound.jpg', alt: 'Logo 4' },
    ]

    const textColor = useColorModeValue("gray.600", "gray.400");
    return (
        <Flex
            bg={'white'}
            alignItems='center'
            justifyContent={'center'}
            flexDir='column'
        >
            <Flex id={slugify(id)} flexDir={'column'} maxW={1920}>
                <Flex w='100%' p={8} alignItems='center' justifyContent={'center'}>
                    <Link href={whatsappLink()} target='_blank' isExternal>
                        <Button id={'zap-tag'} color='white' bgColor='green.500' _hover={{ bgColor: 'datBlue' }} borderRadius={16} px={8}>
                            ENTRAR EM CONTATO
                        </Button>
                    </Link>
                </Flex>
                <Flex justifyContent={'center'} alignItems='center' textAlign={'center'}>
                    <Text fontSize={['2xl', '2xl', '2xl', '4xl', '4xl']} fontWeight={200} textTransform='uppercase' textAlign={['center']}>
                        Conheça alguns de nossos parceiros
                    </Text>
                </Flex>
                <Flex
                    width="full" // Ocupa toda a largura disponível
                    wrap="wrap" // Quebra para a próxima linha se não houver espaço
                    justify="center" // Centraliza horizontalmente
                    gap={[4, 6, 8, 10, 12]}  // Espaçamento entre os logos (responsivo)
                    p={4} // Padding (opcional)
                >



                    {logos.map((logo, index) => (
                        <Flex
                            key={index}
                            flexBasis={{ base: '45%', md: '30%', lg: '15%' }} // 2 por linha em mobile, 3 em md, e define a largura da imagem
                            maxW={{ base: '45%', md: '30%', lg: '15%' }} // Garante que não ultrapasse a largura máxima, com a mesma proporção
                            justifyContent="center" // Centraliza a imagem horizontalmente
                            alignItems="center"     // Centraliza a imagem verticalmente (se a altura for fixa)
                            p={2}                 // Padding em volta de cada logo
                            _hover={{ opacity: 0.7, transition: 'opacity 0.2s' }} // Efeito de hover (opcional)
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                // width="auto"         // Largura automática (ocupa 100% do container pai)
                                // height="auto" // Altura automática (mantém a proporção)
                                width={[80, 80, 80, '100%', '100%']}
                                objectFit="contain" // Garante que a imagem caiba dentro do container sem distorcer
                            />

                        </Flex>
                    ))}
                </Flex>

                {/* Texto "+270 clientes" */}
                <Flex w="full" justifyContent="center" mt={4} p={4}>
                    <Text fontSize="lg" fontWeight="bold" color={textColor}>
                        +100 clientes
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};