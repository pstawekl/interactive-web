'use-client'
import Logo from '../Images/short-logo.webp';
import LongLogo from '../Images/logo.webp';
import { TAGNAME } from "../App";
import { useEffect, useState } from 'react'
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import { menuItems } from '../Utils/MenuUtils';

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box className={TAGNAME + "-navbar"} bg={'transparent'} position={'fixed'}>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box>
            </Box>
        </Box>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: '100vw', md: 60 }}
            pos="fixed"
            h="full"
            className={TAGNAME + '-navbar-sidebar'}
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text className={TAGNAME + "-navbar-long-logo"} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    <img src={LongLogo} alt="INTERACTIVE" />
                </Text>
                <CloseButton onClick={onClose} _hover={{ color: 'gray.400' }} transition={'0.5s'} />
            </Flex>
            {menuItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} href={link.path}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

interface NavItemProps extends FlexProps {
    icon: IconType
    children: ReactText,
    href?: string
}
const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
    return (
        <Box
            as="a"
            href={href}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                transition={'0.5s'}
                _hover={{
                    bg: 'gray.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}

interface MobileProps extends FlexProps {
    onOpen: () => void
}

enum MenuType {
    top,
    solid
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const [menuType, setMenuType] = useState<MenuType>(MenuType.top);
    const [menuBg, setMenuBg] = useState<string>("transparent");
    const [buttonColor, setButtonColor] = useState<string>("white");

    useEffect(() => {
        switch (menuType) {
            case MenuType.top:
                setMenuBg("transparent");
                setButtonColor("white");
                break;
            case MenuType.solid:
                setMenuBg("white");
                setButtonColor("black");
                break;
        }
    }, [menuType])

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setMenuType(MenuType.solid);
        }
        else if (scrolled <= 200) {
            setMenuType(MenuType.top);
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Flex
            className={'ie-navbar-top ' + (menuType === MenuType.solid ? 'fixed' : 'solid')}
            ml={{ base: 0 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={menuBg}
            justifyContent="flex-start"
            position={'fixed'}
            top={0}
            width={'100%'}
            maxHeight={'80px'}
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
                color={buttonColor}
            />

            <Text className={TAGNAME + "-navbar-logo"} fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                <img src={Logo} alt="INTERACTIVE" />
            </Text>
        </Flex>
    )
}