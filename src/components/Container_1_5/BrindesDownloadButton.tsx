import { Flex, Text, useDisclosure, FormControl, VStack, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { PhoneInput } from './PhoneInput';

interface FlexProps {
    color?: string;
    bgColor?: string;
    fontSize?: string;
    p?: number;
    position?: 'absolute' | 'relative' | 'fixed' | 'sticky' | undefined;
    left?: string;
    right?: string;
    bottom?: string;
    link?: string;
    mr?: string;
    ml?: string;
}

export function BrindesDownloadButton(props: FlexProps) {

    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

    const [phone, setPhone] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [buttonText, setButtonText] = useState("Falar conosco")

    function SendTelephoneViaEmail(telephone: string) {

        return new Promise(() => {

            setDisabled(true)
            setButtonText("Obrigado!")

            setTimeout(() => {
                fetch('/api/telephoneMail', {
                    method: 'post',
                    body: JSON.stringify(telephone)
                })
            }, 2000)
        })
    }

    return (

        <Flex>

            <Flex
                cursor='pointer'
                onClick={() => onToggle()}
                position={props.position || 'relative'}
                left={props.left || ''}
                right={props.right || ''}
                bottom={props.bottom || ''}
                mr={props.mr || ''}
                ml={props.ml || ''}
                color={props.color || 'white'}
                fontSize={props.fontSize || '1rem'}
                letterSpacing={1}
                bgColor={props.bgColor || 'datGreenBrindes'}
                fontWeight='400'
                borderRadius={4}
                outline='none'
                p={props.p || 2}
                // px={[8, '', '']}
                mt={[8, '', '']}
                _hover={{
                    textDecoration: 'none',
                    outline: 'none',
                    color: 'datPerola',
                    transition: '400ms',
                    bgColor: 'transparent',
                    borderRadius: 8,
                    px: 8
                }}
                as='button'
            >
                <Text
                    mx='auto' textAlign={'center'} >
                    Clique aqui e faça o download de nosso catálogo!
                </Text>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent
                    p={8}
                    bg='#0f1d27'
                    borderRadius={2}
                >

                    <ModalCloseButton color='white' fontSize='0.64rem' p={4} _hover={{ color: 'clubMaldivas' }} />
                    <ModalBody>

                        <VStack spacing={3}>

                            <Flex color='white' fontWeight={300}>
                                Por favor, forneça o seu número de telefone para contato via WhatsApp:
                            </Flex>

                            <FormControl isRequired>
                                <PhoneInput phone={phone} setPhone={setPhone} />
                            </FormControl>
                            <Button
                                onClick={() => { SendTelephoneViaEmail(phone) }}
                                disabled={disabled}
                                pointerEvents={(phone.length > 8) ? 'auto' : 'none'}
                                bg={(phone.length > 8) ? '#25D366' : '#516BA5'}
                                _hover={{ bg: 'clubMaldivas', textDecoration: 'none', cursor: 'pointer' }}
                                borderRadius={2}
                                gap={3}
                                p={2}
                                boxShadow='2px 2px 1px #000000bb'>

                                <Text color='white'>{buttonText} </Text>
                                <BsWhatsapp fontSize={'1.4rem'} color='white' />
                            </Button>
                        </VStack>

                    </ModalBody>
                </ModalContent>
            </Modal>


        </Flex >
    )
}
