import {
  Box,
  Image,
  Link,
  HStack,
  Flex,
  Stack,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import logo from '/LogoPrincipal.png';
import foco from '/LogoPrincipalFoco.png';
import hambur from '/icons8-hamburguesa.svg';
import cruz from '/icons8-cruz.svg';

export const NAV_HEIGHT = 80;
export const NAV_HEIGHT_SCROLLED = 130; // franja un poco más alta al bajar
export const TOP_OFFSET = 40;

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [bgColor, setBgColor] = useState('transparent');
  const [navHeight, setNavHeight] = useState(NAV_HEIGHT);
  const [isHamburger, setIsHamburger] = useState(true);

  const showTopBar = useBreakpointValue({ base: false, md: false, lg: true });
  const topOffset = showTopBar ? TOP_OFFSET : 0;

  const items = [
    { text: 'INICIO', id: 'Inicio' },
    { text: 'SERVICIOS', id: 'Servicios' },
    { text: 'INFORMACION', id: 'Informacion' },
    { text: 'CONTACTO', id: 'Equipo' },
    { text: 'PREGUNTAS', id: 'Preguntas' },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const dynamicOffset = navHeight + topOffset + 20;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const target = sectionTop - dynamicOffset;

    window.scrollTo({ top: target, behavior: 'smooth' });

    if (isOpen) {
      onToggle();
      setIsHamburger(true);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight - (NAV_HEIGHT + topOffset);
      if (window.scrollY > threshold) {
        setBgColor('#767575');
        setNavHeight(NAV_HEIGHT_SCROLLED);
      } else {
        setBgColor('transparent');
        setNavHeight(NAV_HEIGHT);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [topOffset]);

  // ▼ Bajón suave solo cuando la franja NO está expandida (mobile/tablet)
  const isExpanded = navHeight > NAV_HEIGHT;
  const extraDownBase = useBreakpointValue({ base: 10, md: 12, lg: 0 }) || 0; // px
  const extraDown = !isExpanded ? extraDownBase : 0;

  // Hamburguesa centrada verticalmente dentro del alto real del nav + bajón
  const hamburgerTop = `calc(${topOffset}px + ${navHeight / 2}px - 17.5px + ${extraDown}px)`; // 35px/2

  const linkStyle = {
    fontFamily: 'Barlow',
    fontWeight: 'bold',
    color: 'white',
    fontSize: { base: '1.1rem', md: '1.2rem', lg: '1.3rem' },
    position: 'relative',
    cursor: 'pointer',
    display: 'inline-block',
    width: 'max-content',
    pb: '2px',
    bgImage: 'linear-gradient(#b1acac, #b1acac)',
    bgRepeat: 'no-repeat',
    bgPosition: 'left calc(100% - 0px)',
    bgSize: '0% 2px',
    transition: 'background-size 0.4s ease',
    _hover: { bgSize: '50% 2px' },
  };

  return (
    <>
      {/* Franja decorativa (solo desktop) */}
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h={`${topOffset}px`}
        bg={bgColor}
        transition="background-color 0.25s ease, height 0.25s ease"
        zIndex={500}
        pointerEvents="none"
        display={{ base: 'none', md: 'none', lg: 'block' }}
      />

      {/* Navbar */}
      <Box
        as="nav"
        position="fixed"
        top={`${topOffset}px`}
        left="0"
        w="100%"
        h={`${navHeight}px`}
        bg={bgColor}
        transition="background-color 0.25s ease, height 0.25s ease"
        zIndex={2000}
      >
        <Flex
          align="center"
          justify={{ base: 'space-between', lg: 'space-around' }}
          h="100%"
          px={{ base: 4, md: 6, lg: 0 }}
          w="100%"
          maxW="1400px"
          mx="auto"
        >
          {/* Foco (izquierda). No se mueve de lugar; solo baja un poquito cuando no está expandido */}
          <Image
            src={foco}
            alt="Foco"
            w={{ base: '85px', md: '90px' }}
            h="auto"
            filter="brightness(1.5)"
            display={{ base: 'block', lg: 'none' }}
            style={{ transform: `translateY(${extraDown}px)` }}
          />

          {/* Logo desktop */}
          <Image
            src={logo}
            alt="Logo"
            w={{ base: '0px', lg: '140px' }}
            filter="brightness(1.5)"
            display={{ base: 'none', lg: 'block' }}
          />

          {/* Links desktop */}
          <HStack spacing={{ lg: '5em', xl: '6em' }} display={{ base: 'none', lg: 'flex' }}>
            {items.map((item) => (
              <Link key={item.id} {...linkStyle} onClick={() => handleScroll(item.id)}>
                {item.text}
              </Link>
            ))}
          </HStack>

          {/* Botón hamburguesa (derecha). No cambia de lateral; baja suavemente en estado normal y queda centrado al expandirse */}
          <Box
            display={{ base: 'block', md: 'block', lg: 'none' }}
            position="fixed"
            top={hamburgerTop}
            right={{ base: '1.2em', md: '2em' }}
            onClick={() => {
              onToggle();
              setIsHamburger(!isHamburger);
            }}
            cursor="pointer"
            zIndex={2500}
            transition="transform 0.3s"
            transform={isHamburger ? 'rotate(0deg)' : 'rotate(90deg)'}
          >
            <Image src={isHamburger ? hambur : cruz} w="35px" h="35px" />
          </Box>
        </Flex>
      </Box>

      {/* Panel lateral */}
      <Box
        bg="#1b2021"
        w={{ base: '60%', md: '55%' }}
        h="100vh"
        position="fixed"
        top={0}
        left={isOpen ? 0 : '-80vw'}
        transition="left 0.3s ease"
        zIndex={4000}
        display={{ base: 'flex', md: 'flex', lg: 'none' }}
        flexDirection="column"
        p="0"
      >
        <Box px="1.2em" pt="0" pb="1em" w="100%">
          <Flex align="center" justify="flex-start" mt="2em" mb="1em" h="12em">
            <Image src={logo} w={{ base: '9em', md: '10em' }} h="auto" filter="brightness(1.8)" />
          </Flex>

        <Stack spacing={{ base: 4, md: 5 }} mt="0">
            {items.map((item) => (
              <Link key={item.id} {...linkStyle} onClick={() => handleScroll(item.id)}>
                {item.text}
              </Link>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export { NavBar };
