import React from 'react';
import { Button, Flex, Image, Link, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { slugify, whatsappLink } from '../../utils';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

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
        { src: 'static/v2/parceiros/logo-1.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/baruch.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/daterra.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/desplac.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/farmaformula.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/fonju.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/gabgab.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/glow.png', alt: 'Logo 1' },
        // { src: 'static/v2/parceiros/indoor.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/kakau.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/ramaga.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/sellevia.png', alt: 'Logo 1' },
        { src: 'static/v2/parceiros/sunny.png', alt: 'Logo 1' }
    ]

    const textColor = useColorModeValue("gray.600", "gray.400");

    const slides = useBreakpointValue({
        base: 1,
        sm: 1,
        md: 4,
        lg: 4,
        xl: 6
    })
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
                    <Text fontSize={['2xl', '2xl', '2xl', '4xl', '4xl']} fontWeight={400} textTransform='uppercase' textAlign={['center']}>
                        Conheça alguns de nossos parceiros
                    </Text>
                </Flex>
                <Flex
                    width="full" // Ocupa toda a largura disponível
                    maxW={'95vw'}
                    wrap="wrap" // Quebra para a próxima linha se não houver espaço
                    justify="center" // Centraliza horizontalmente
                    gap={[4, 6, 8, 10, 12]}  // Espaçamento entre os logos (responsivo)
                    p={4} // Padding (opcional)
                    mx='auto'
                >

                    <Swiper
                        spaceBetween={40}
                        slidesPerView={slides}
                        autoplay={{
                            delay: 200,           // Sem pausa entre "transições"
                            disableOnInteraction: false, // Não para se o usuário interagir
                            pauseOnMouseEnter: true,    // Pausa quando o mouse está sobre o carrossel (bom UX)
                        }}
                        speed={2000}
                        loop
                        freeMode

                        // onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >


                        {logos.map((logo, index) => (
                            <SwiperSlide key={logo.src + index}>
                                <Flex
                                    
                                    key={index}
                                    flexBasis={{ base: '45%', md: '30%', lg: '15%' }} // 2 por linha em mobile, 3 em md, e define a largura da imagem
                                    w='100%'
                                    justifyContent="center" // Centraliza a imagem horizontalmente
                                    alignItems="center"     // Centraliza a imagem verticalmente (se a altura for fixa)
                                    p={2}    
                                    my='auto'             // Padding em volta de cada logo
                                    _hover={{ opacity: 0.7, transition: 'opacity 0.2s' }} // Efeito de hover (opcional)
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        // width="auto"         // Largura automática (ocupa 100% do container pai)
                                        // height="auto" // Altura automática (mantém a proporção)
                                        // width={[80, 80, 80, '100%', '100%']}
                                        // boxSize={80}
                                        maxH={40}
                                        objectFit="contain" // Garante que a imagem caiba dentro do container sem distorcer
                                    />

                                </Flex>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </Flex>

                {/* Texto "+270 clientes" */}
                <Flex w="full" justifyContent="center" mt={4} p={4}>
                    <Text fontSize="lg" fontWeight="bold" color={textColor}>
                        +200 clientes, conheça alguns deles
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};