import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    useDisclosure,
    Image,
    Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import ModalWordpress from './../Images/Offers/modal-wordpress.webp';
import WordpressLogo from './../Images/Offers/wordpress-logo.webp';
import ModalReact from './../Images/Offers/modal-react.webp';
import ReactLogo from './../Images/Offers/react-logo.webp';

interface ModalOfferProps {
    modalType: 'wordpress' | 'react' | 'individual';
}

export default function ModalOffer(props: ModalOfferProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [pathToOffer, setPathToOffer] = useState<string>('');
    const [modalTitle, setModalTitle] = useState<string>('');

    useEffect(() => {
        if (isOpen) {
            document.getElementsByClassName('scroll-button-icon')[0]?.classList.remove('slide-in');
            switch (props.modalType) {
                case 'wordpress':
                    setPathToOffer('/offer?wordpress');
                    setModalTitle('Oferta - Wordpress');
                    break;
                case 'react':
                    setPathToOffer('/offer?react');
                    setModalTitle('Oferta - React.js');
                    break;
                case 'individual':
                    setPathToOffer('/offer?individual');
                    setModalTitle('Oferta - Indywidualna');
                    break;
            }
        } else {
            if (document.documentElement.scrollTop > 200)
                document.getElementsByClassName('scroll-button-icon')[0]?.classList.add('slide-in');
        }
    }, [isOpen])

    return (
        <>
            <Button w="full" colorScheme="red" variant="outline" onClick={onOpen}>
                Zapytaj o ofertę
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text fontSize={'2xl'}>{modalTitle}</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ModalOfferContent modalType={props.modalType} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Zamknij
                        </Button>
                        <Button as={'a'} href={pathToOffer}>Przejdź do oferty</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

function ModalOfferContent(props: ModalOfferProps) {
    switch (props.modalType) {
        case 'wordpress':
            return (
                <Box className="modal-offer">
                    <Box className="modal-offer-banner">
                        <Image src={WordpressLogo} width={'auto'} height={'10vh'} />
                        <Image src={ModalWordpress} height={'50vh'} borderRadius={15} />
                        <Text fontSize={'xs'} color={"gray"}>(Sklep internetowy wykonany w technologii Wordpress)</Text>
                    </Box>
                    <Box className="modal-offer-content">
                        Aplikacje utworzone w technologii Wordpress są świetnym rozwiązaniem dla osób, które chcą mieć własną stronę internetową, ale nie mają czasu na jej tworzenie. Wordpress jest najpopularniejszym systemem CMS na świecie, dzięki czemu jest bardzo łatwy w obsłudze. Użytkownik może w łatwy sposób edytować stronę według potrzeb oraz nią zarządzać. Wordpress jest również bardzo bezpieczny, a dzięki regularnym aktualizacjom, jest odporny na ataki hakerów. Wszystkie strony internetowe tworzone przez nas są responsywne, czyli dostosowane do urządzeń mobilnych. Dzięki temu Twoja strona będzie wyświetlać się poprawnie na każdym urządzeniu.
                    </Box>
                </Box>
            )
        case 'react':
            return (
                <>
                    <Box className="modal-offer-header">
                        <Box className="modal-offer-banner">
                            <Image src={ReactLogo} width={'auto'} height={'10vh'} />
                            <Image src={ModalReact} height={'50vh'} borderRadius={15} />
                            <Text fontSize={'xs'} color={"gray"}>(Strona internetowa wykonana w technologii React.js)</Text>
                        </Box>
                        <Box className="modal-offer-content">
                            Aplikacje utworzone w technologii React.js są świetnym rozwiązaniem dla osób, które chcą mieć własną stronę internetową i potrzebują większych możliwości niż te, które daję Wordpress. React.js jest jedną z najpopularniejszych bibliotek JavaScript na świecie. Aplikacje, które są tworzone w tej technologii służą zazywczaj jako aplikację internetowe, umożliwiające skomplikowaną interakcję z użytkownikiem np. system logowania, wysyłania plików przez klientów, dodawania ofert na stronie itp. Wszystkie strony internetowe tworzone przez nas są responsywne. Dzięki temu Twoja strona będzie wyświetlać się poprawnie na każdym urządzeniu.
                        </Box>
                    </Box>
                </>
            )
        case 'individual':
            return (
                <>
                    <Box className="modal-offer-header">
                        Plan Indywidualny
                    </Box>
                </>
            )
    }
}