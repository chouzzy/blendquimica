import { Flex, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { WhatsappLogo } from "phosphor-react";
import { whatsappLink } from "../../utils";


export default function WhatsButton() {
    return (
        <Link  id='zap-tag' href={whatsappLink(useRouter().pathname)} target="_blank">

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