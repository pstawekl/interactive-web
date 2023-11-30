import {
    Box,
    chakra,
    Container,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5';
import { ReactNode } from 'react'
import { menuItems } from '../Utils/MenuUtils';
import Logo from './../Images/short-logo.webp';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function SmallCentered() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                py={4}
                spacing={4}
                justifyContent={'center'}
                align={'center'}>
                <a href="/">
                    <Image src={Logo} alt="INTERACTIVE" style={{ height: 50 }}
                        filter='brightness(0)'
                        transition={'0.5s'}
                        _hover={{ filter: 'brightness(1)' }} />
                </a>
                <Stack direction={'row'} spacing={6}>
                    {
                        menuItems.map((link) => (
                            <Box key={link.name} as="a" href={link.path} transition={'0.5s'} _hover={{ color: 'gray.400' }}>
                                {link.name}
                            </Box>
                        ))
                    }
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    py={4}
                    px={10}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2023 TES. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Facebook'} href={'#'}>
                            <FaFacebook />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                        <SocialButton label={'Mail'} href={'#'}>
                            <IoMail />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}