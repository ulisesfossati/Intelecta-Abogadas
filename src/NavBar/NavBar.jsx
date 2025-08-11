import { Box, Image, Link, HStack, Flex } from '@chakra-ui/react';
import React from 'react';
import logo from '/LogoPrincipal.png';

const NavBar = () => {
  return (
    <Box
      as="nav"
      bg="transparent"
      bgSize="cover"
      bgPosition="center"
      py="3"
      px="6"
    >
      <Flex align="center" justify="space-between">
        {/* Logo con brillo y desplazado */}
        <Image
          src={logo}
          alt="Logo"
          w="130px"
          filter="brightness(1.5)"
          ml="8em"
        />

        {/* Menú centrado */}
        <HStack
          spacing="6em"
          mx="auto"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
        >
          {['INICIO', 'SERVICIOS', 'NOSOTRAS', 'CONTACTO'].map((text, index) => (
            <Link
              key={index}
              fontFamily={'Barlow'}
              href={`#${text.toLowerCase()}`}
              fontWeight="bold"
              color="white"
              fontSize="1.3rem"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: '0',
                width: '0',
                height: '2px',
                bg: '#b1acac',
                transition: 'width 0.4s ease',
              }}
              _hover={{
                _after: {
                  width: '50%',
                },
              }}
            >
              {text}
            </Link>
          ))}
        </HStack>
      </Flex>

      {/* Línea divisoria estética */}
      <Box
        h="2px"
        bg="gray"
        w="90%"
        mx="auto"
        mt="-4"
      />
    </Box>
  );
};

export { NavBar };
