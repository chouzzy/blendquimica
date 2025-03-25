import React, { useState } from 'react';
import {
    Flex,
    Text,
    Box,
    Step,
    Stepper,
    StepIndicator,
    StepStatus,
    StepIcon,
    StepNumber,
    StepTitle,
    StepDescription,
    StepSeparator,
    useSteps,
    useColorModeValue,
    useBreakpointValue,
    Button,
    Link
} from '@chakra-ui/react';
import { PiBlueprintDuotone } from "react-icons/pi";
import { CodesandboxLogo, InstagramLogo, Package, TestTube, Truck } from 'phosphor-react';
import { Blueprint } from '@phosphor-icons/react';
import { Orientation } from '@chakra-ui/react/dist/types/stepper/step-context';
import { slugify, whatsappLink } from '../../utils';


interface Etapa {
    title: string;
    description?: string;
    number: number; // Remova isso se você não for mais usar.
}

interface Container_8Props {
    id: string
}
// Este componente não precisa mais do nome "Container_8". Mudei para EtapasProjeto
export function Container_8({ id }: Container_8Props) {

    const etapas = [
        { number: 1, icon: <Blueprint weight='duotone' size={50} />, title: 'Briefing e Definição', description: 'Coleta de informações e definição do escopo do projeto.' },
        { number: 2, icon: <TestTube weight='duotone' size={50} />, title: 'Aprovação de Amostras', description: 'Desenvolvimento e aprovação das amostras iniciais.' },
        { number: 3, icon: <Package weight='duotone' size={50} />, title: 'Rótulo e Embalagem', description: 'Criação e aprovação do design do rótulo e embalagem.' },
        { number: 4, icon: <Truck weight='duotone' size={50} />, title: 'Produção e Entrega', description: 'Produção em larga escala, rotulagem e entrega dos produtos.' },
    ];

    const [activeStep, setActiveStep] = useState(4); // Controla o passo ativo

    const orientationResp: Orientation = useBreakpointValue({
        base: 'vertical',
        sm: 'vertical',
        md: 'horizontal',
        lg: 'horizontal',
        xl: 'horizontal'
    });

    return (
        <Flex
            bg={'white'}
            alignItems='center'
            justifyContent={'center'}
        >
            <Flex
                id={slugify(id)}
                direction="column"
                width="full"
                align="center" // Centraliza horizontalmente
                px={8}
                gap={12}
                pt={20}
                maxW={1920}
            >
                <Flex justifyContent={'center'} alignItems='center'>
                    <Text fontSize={['2xl', '2xl', '2xl', '4xl', '4xl']} fontWeight={200} textTransform='uppercase' textAlign={['center']}>
                        Quais são as etapas do nosso projeto?
                    </Text>
                </Flex>
                <Stepper index={activeStep} orientation={orientationResp} width="full" gap={4} colorScheme='blue' border={'1px solid #00000033'} borderRadius={20} p={8}>
                    {etapas.map((etapa, index) => (
                        <Flex key={etapa.number + index} flexDir={'column'} w='100%'>

                            <Step key={index} onClick={() => setActiveStep(index + 1)}>
                                <StepIndicator w={['100%', '100%', '100%', 32, 32]} h={16} borderRadius={4}>
                                    {etapa.icon}
                                </StepIndicator>
                                <StepSeparator />


                            </Step>

                            <Flex flexDir={'column'} alignItems={'start'} justifyContent='center' textAlign={'start'} py={4}>
                                <Flex flexDir={'column'} borderLeft={'1px solid #00000044'} pl={2}>
                                    <Text fontWeight={'bold'} fontSize={'lg'}>
                                        Etapa {index + 1}
                                    </Text>
                                    <Text fontWeight={'medium'}>
                                        {etapa.title}
                                    </Text>
                                    <Text fontSize={'md'}>
                                        {etapa.description}
                                    </Text>
                                </Flex>
                            </Flex>

                        </Flex>
                    ))}
                </Stepper>







            </Flex>
        </Flex>
    );
};