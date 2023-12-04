import { Box, Button, Container, Flex, Grid, GridItem, HStack, Heading, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Stat, StatLabel, StatNumber, Text, VStack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { TAGNAME } from "../App";
import Logo from '../Images/logo.webp';
import { Player } from '@lordicon/react';
import { ReactNode, useEffect, useRef, useState } from "react";
import { FiServer } from 'react-icons/fi'
import { CgPerformance } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import ModalOffer from "../Components/OfferModal";

const ArrowDownIcon = require('./../Assets/LordIcons/system-solid-12-arrow-down.json')

export default function Home() {
    const playerRef = useRef<Player>(null);
    const [isIconHover, setIsIconHover] = useState(true);
    useEffect(() => {
        if (isIconHover)
            playerRef.current?.playFromBeginning();
    }, [playerRef, isIconHover])


    return (
        <Box className={TAGNAME + "-home"}>
            <Grid className={TAGNAME + "-home-banner"} templateColumns='repeat(3, 1fr)'>
                <GridItem className={TAGNAME + "-home-banner-left"}></GridItem>
                <GridItem className={TAGNAME + "-home-banner-center"}>
                    <Grid templateColumns={'repeat(1, 1fr)'} gap={5} display={'flex'} flexDir={'column'}>
                        <GridItem>
                            <img className={TAGNAME + "-home-banner-center__logo"} src={Logo} alt="INTERACTIVE" />
                        </GridItem>
                        <GridItem fontSize={24} color={'white'} textAlign={"center"}>
                            <Text fontSize={'xl'} color={'white.400'}>
                                innowacyjne aplikacje internetowe na zamówienie
                            </Text>
                        </GridItem>
                        <GridItem display={'flex'} justifyContent={'center'}>
                            <div className={TAGNAME + '-home-arrow-down'}
                                onMouseEnter={() => setIsIconHover(true)}
                                onMouseLeave={() => setIsIconHover(false)}
                                onClick={() => document.getElementsByClassName("ie-home-feature")[0].scrollIntoView({ behavior: "smooth" })}
                            >
                                <Player
                                    ref={playerRef}
                                    icon={ArrowDownIcon}
                                    size={50}
                                    colorize="true"
                                />
                            </div>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem className={TAGNAME + "-home-banner-right"}></GridItem>
            </Grid>
            <Box className={TAGNAME + "-home-feature"} bg={'black'}>
                <Features />
            </Box>
            <Box className={TAGNAME + "-home-hero"} zIndex={-1000} pb={5}>
                <BasicStatistics />
                <div className={TAGNAME + '-home-arrow-down'}
                    onMouseEnter={() => setIsIconHover(true)}
                    onMouseLeave={() => setIsIconHover(false)}
                    onClick={() => document.getElementsByClassName("ie-home-offer")[0].scrollIntoView({ behavior: "smooth" })}
                    style={{ display: 'flex', justifyContent: 'center', paddingBottom: 20, zIndex: '1' }}>
                    <Player
                        ref={playerRef}
                        icon={ArrowDownIcon}
                        size={50}
                        colorize="true"
                        renderMode="SOFTWARE"
                    />
                </div>
            </Box>
            <Box className={TAGNAME + "-home-offer"}>
                <ThreeTierPricing />
            </Box>
        </Box>
    )
}

function Features() {
    return (
        <Container zIndex={10}>
            <Stack direction={{ base: 'column', lg: 'row' }} justify={"center"}>
                <Stack
                    color={'gray.400'}
                    justify={'center'}
                    py={{ base: 4, md: 20 }}>
                    <Box mb={{ base: 8, md: 20 }}>
                        <Text
                            fontFamily={'heading'}
                            fontWeight={700}
                            textTransform={'uppercase'}
                            mb={3}
                            fontSize={'xl'}
                            color={'gray.500'}>
                            Technologia
                        </Text>
                        <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                            Idziemy z duchem czasu
                        </Heading>
                        <Text fontSize={'xl'} color={'gray.400'}>
                            Nasze aplikacje internetowe są tworzone z wykorzystaniem najnowszych technologii, dzięki czemu są szybkie i bezpieczne.
                        </Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        {stats.map((stat) => (
                            <Box key={stat.title}>
                                <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                                    {stat.title}
                                </Text>
                                <Text fontSize={'xl'} color={'gray.400'}>
                                    {stat.content}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Stack>
        </Container>
    )
}

interface StatsCardProps {
    title: string
    stat: string
    icon: ReactNode
}

function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}
            zIndex={-1}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    )
}

function BasicStatistics() {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} pb={10} px={{ base: 2, sm: 12, md: 17 }}>
            <Text textAlign={'center'} fontSize={'4xl'} pb={10} fontWeight={'bold'}>
                Naszą firmę najlepiej wyrażają liczby z Google Search Console
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'Wydajność min.'} stat={'90%'} icon={<CgPerformance size={'3em'} />} />
                <StatsCard title={'Załadowanie aplikacji'} stat={'0,9 s'} icon={<FiServer size={'3em'} />} />
                <StatsCard title={'SEO min.'} stat={'85%'} icon={<IoSearch size={'3em'} />} />
            </SimpleGrid>
        </Box>
    )
}


const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} color={'white'}>
        {children}
    </Text>
)

const stats = [
    {
        title: '24/7',
        content: (
            <>
                <StatsText>Wsparcie</StatsText> dla naszych klientów
            </>
        ),
    },
    {
        title: '100%',
        content: (
            <>
                <StatsText>Bezpieczeństwa</StatsText> aplikacji
            </>
        ),
    },
    {
        title: 'ponad 50',
        content: (
            <>
                <StatsText>Aplikacji</StatsText> utworzonych przez naszych programistów
            </>
        ),
    },
    {
        title: '7 lat',
        content: (
            <>
                <StatsText>Doświadczenia</StatsText> w tworzeniu aplikacji
            </>
        ),
    },
]

interface PriceWrapperProps {
    children: React.ReactNode
}

function PriceWrapper(props: PriceWrapperProps) {
    const { children } = props

    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}
            background={'white'}>
            {children}
        </Box>
    )
}

function ThreeTierPricing() {
    const { isOpen: isWordpressOpen, onOpen: onWordpressOpen, onClose: onWordpressClose } = useDisclosure()

    return (
        <Box py={12} background={'black'} zIndex={-1}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl" color="white">
                    Wybierz ofertę dla siebie
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Oto dwa najczęściej wybierane rodzaje aplikacji, posiadamy również plan indywidualny.
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box py={4} px={12} zIndex={-1}>
                        <Text fontWeight="500" fontSize="2xl">
                            Wordpress
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" color="gray.500">
                                od
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                790
                            </Text>
                            <Text fontSize="3xl" fontWeight="600">
                                zł
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                Proste w obsłudze
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                Krótki czas realizacji
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                Dostępne rozwiązania E-Commerce
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <ModalOffer modalType='wordpress' />
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                React.js
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" color="gray.500">
                                    od
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    1500
                                </Text>
                                <Text fontSize="3xl" fontWeight="600">
                                    zł
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                    Skrojone pod klienta
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                    Dostępne rozwiązania E-Commerce
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                    100% Bezpieczne
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                    Nowoczesny design
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                    Niezawodne i szybkie
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <ModalOffer modalType="react"/>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12} zIndex={-1}>
                        <Text fontWeight="500" fontSize="2xl">
                            Plan indywidualny
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                Cena zależna <br />
                                od zlecenia
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                Spełniony dowolny wymóg klienta
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                Technologia dobrana pod projekt
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} mr={1} color="green.500" />
                                Szybkość i niezawodność
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <ModalOffer modalType="individual"/>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    )
}