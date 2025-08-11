import { Box, Text, Button } from '@chakra-ui/react';
import React from 'react';
import Edificios from '../../public/Principla.jpg';
import { NavBar } from '../NavBar/NavBar';

const Hoja1 = () => {
  return (
    <Box
      as="section"
      minH="100vh"
      w="100%"
      position="relative"
      bgImage={`url(${Edificios})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.700"
        zIndex="1"
      />

      <Box position="relative" zIndex="2">
        <NavBar />

        <Box
          minH="calc(80vh - 80px)"
          display="flex"
          alignItems="center"
          px="10"
        >
          <Box w="40%" ml="20" mt="-40">
            <Text as="h1" fontSize="6xl" fontWeight="bold" color="white">
              INTELECTA ABOGADAS
            </Text>
            <Text as="h2" fontSize="lg" color="white" mb="6">
              Somos un estudio jurídico especializado en propiedad intelectual y nuevas tecnologías.
              Protegemos la creatividad y la innovación. Ofrecemos soluciones legales sólidas
              acompañando a nuestros clientes en el resguardo de sus activos intangibles.
            </Text>
            <Button
              transition="300ms"
              bg="white"
              color="black"
              _hover={{ bg: '#b1acac' }}
              onClick={() =>
                window.open(
                  'https://wa.me/5492915099180?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustar%C3%ADa%20recibir%20asesoramiento.',
                  '_blank'
                )
              }
            >
              CONTACTO
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Hoja1 };
