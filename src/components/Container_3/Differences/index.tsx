import { Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";

interface DifferencesProps {
    titulo: string;
    image: string;
    subtitulo: string;
    beneficios: string[];
}

export function Differences() {

    const diferences: DifferencesProps[] = [
        {
            titulo: "FULL SERVICE OU PARCIAL",
            image: 'static/v2/full-service-icon.png',
            subtitulo: "Colaboratividade multidisciplinar para gerar ideias transformadoras.Comercial e Projetos Ciência Aplicada à Cosmetologia. Regulatório, Marketing e Inteligência de Mercado. Desenvolvimento Humano e Organizacional. Financeiro, Processos e Melhoria Contínua, Garantia da Qualidade.",
            beneficios: [
                "Profissionais acima da média de mercado",
                "Cultura de Desenvolvimento",
                "Empatia 360°"
            ]
        },
        {
            titulo: `Selo EU RECICLO`,
            image: 'static/v2/eu-reciclo.png',
            subtitulo: "Fabricação de cosméticos com Inteligência de mercado aplicada ao que traz tração ao negócio de nossos clientes Pesquisa e Desenvolvimento de Cosméticos, Marketing e Comercial Equipes constantemente atualizadas e treinadas para oferecer o que há de melhor no mercado cosmético",
            beneficios: [
                "Soluções transformadoras",
                "Alto desempenho competitivo",
                "Resultados incríveis"
            ]
        },
        {
            titulo: "Energia sustentável",
            image: 'static/v2/energia-sus.png',
            subtitulo: "Otimização de processo produtivo é sinônimo de qualidade, agilidade e cadeia de valor eficaz, tida; enquanto indústria de cosméticos, possuímos esse processo muito bem estruturado para levar competitividade e qualidade aos nossos clientes.",
            beneficios: [
                "Melhoria Processual",
                "Contínua Inteligência em Processos Produtivos",
                "Entrega em Tempo Hábil"
            ]
        },
        {
            titulo: "Desenvolvimento de amostras",
            image: 'static/v2/sample.png',
            subtitulo: "Otimização de processo produtivo é sinônimo de qualidade, agilidade e cadeia de valor eficaz, tida; enquanto indústria de cosméticos, possuímos esse processo muito bem estruturado para levar competitividade e qualidade aos nossos clientes.",
            beneficios: [
                "Melhoria Processual",
                "Contínua Inteligência em Processos Produtivos",
                "Entrega em Tempo Hábil"
            ]
        },
        {
            titulo: "Contato direto com setor de Pesquisa e Desenvolvimento",
            image: 'static/v2/lab.png',
            subtitulo: "Possuímos certificação nos órgãos competentes para a fabricação de cosméticos, garantindo segurança e qualidade em nossas entregas. Anvisa, Exército Brasileiro, Ministério do Meio Ambiente, Corpo de Bombeiros de Goiás, Polícia Federal e Polícia Civil.",
            beneficios: [
                "Profissionais acima da média de mercado",
                "Cultura de Desenvolvimento",
                "Empatia 360°"
            ]
        }
    ];

    return (
        <Flex p={8} flexDir='column' gap={4} color='datDarkBlue'  maxW={1920} >
            <Flex justifyContent={'center'} alignItems='center'>
                <Text fontSize={['2xl','2xl','2xl','4xl','4xl']} fontWeight={200} textTransform='uppercase' textAlign={['center']}>
                    Nossos diferenciais
                </Text>
            </Flex>
            <Flex gap={4} flexDir={['column','column','row','row','row']}>
                {diferences.map((diference, idx) => {

                    return (
                        <Flex key={diference.titulo+idx} flexDir={'column'} p={4} bgColor='white' borderRadius={8} boxShadow='lg' border={'1px solid #00000010'} justifyContent={'space-between'} gap={4} w='100%' >

                            <Flex alignItems={'center'} justifyContent='center' flexDir={'column'} gap={4} >
                                <Flex>
                                    <Image src={diference.image} minH={40} h={40} />
                                </Flex>

                                <Flex flexDir={'column'} gap={2}>
                                    <Flex alignItems='start'>
                                        <Text fontSize={'md'} fontWeight='semibold' textAlign={'center'} textTransform='uppercase'> {diference.titulo}</Text>
                                    </Flex>
                                    {/* <Flex>
                                        <Text fontSize={'sm'} fontWeight='light'> {diference.subtitulo}</Text>
                                    </Flex> */}
                                </Flex>
                            </Flex>


                            {/* <Flex flexDir={'column'} bgGradient='linear(to-br, #0d2a5f 15%, #014183 90%)' color={'white'}>

                                <Flex border={'1px'} flexDir='column' p={4} minH={48} gap={4}>
                                    <Flex>
                                        <Text fontSize={'md'} fontWeight='bold'>BENEFÍCIOS</Text>
                                    </Flex>
                                    <UnorderedList>
                                        {diference.beneficios.map((bene) => {
                                            return (
                                                <ListItem fontSize={'sm'} fontWeight='medium'>{bene}</ListItem>
                                            )
                                        })}
                                    </UnorderedList>
                                </Flex>
                            </Flex> */}


                        </Flex>
                    )
                })}
            </Flex>
        </Flex>
    )
}