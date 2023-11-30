import { Box, Container, Flex, Grid, GridItem, Heading, SimpleGrid, Stack, Stat, StatLabel, StatNumber, Text, useColorModeValue } from "@chakra-ui/react";
import { TAGNAME } from "../App";
import Logo from '../Images/logo.webp';
import { Player } from '@lordicon/react';
import { ReactNode, useEffect, useRef, useState } from "react";
import { FiServer } from 'react-icons/fi'
import { CgPerformance } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";

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
                            innowacyjne aplikacje internetowe na zamówienie
                        </GridItem>
                        <GridItem display={'flex'} justifyContent={'center'}>
                            <div className={TAGNAME + '-home-banner-arrow-down'}
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
            </Box>
            <Box>
                <BasicStatistics />
            </Box>
        </Box>
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
            rounded={'lg'}>
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