import { Flex, Link, Text } from "@chakra-ui/react";
import { WhatsappLogo } from "phosphor-react";


export default function WhatsButton() {
    return (
        <Link href='https://wa.me/5516991790291?text=Olá, tudo bem? Acessei o site da BlendQuímica e gostaria de falar com um atendente.' target="_blank">

            <Flex
                bg='#25D366'
                color="#fffafa"
                fontSize='1.8rem'
                borderRadius={'full'}
                p={4}
                position='fixed' 
                bottom={8}
                right={8}
                zIndex={1}
                _hover={{
                    transition: ' 400ms', fontSize: '2.4rem'
                }}
                cursor='pointer'>
                <WhatsappLogo weight="fill" />
            </Flex>
        </Link>
    )
}