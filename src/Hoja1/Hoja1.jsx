import { Box, Text, Button } from '@chakra-ui/react';
import React from 'react';
import Edificios from '../../public/Principla.jpg';
import { NavBar } from '../NavBar/NavBar';

const Hoja1 = () => {
  return (
    <Box
      as="section"
      id='Inicio'
      minH="100vh"
      w="100%"
      position="relative"
      bgImage={`url(${Edificios})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      overflow="hidden"
    >
      {/* Capa oscura encima de la imagen */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.700"
        zIndex="1"
      />

      {/* Contenido */}
      <Box position="relative" zIndex="2">
        <NavBar />

        {/* Línea de Hoja1 que siempre queda en esta posición */}
        <Box
          h="2px"
          bg="gray"
          w="90%"
          mx="auto"
          mt="150px" // ajustá este valor para la altura que quieras
        />

        <Box
          minH="calc(80vh - 80px)"
          display="flex"
          alignItems="center"
          px="10"
        >
          <Box w="40%" ml="20" mt="">
            <Text as="h1" fontSize="6xl" fontWeight="bold" color="white">
              INTELECTA ABOGADAS
            </Text>
            <Text as="h2" fontSize="lg" color="white" mb="6">
            Protegemos lo que te hace único: somos un estudio de propiedad intelectual que convierte creaciones en activos, con asesoramiento humano, estratégico y a medida.
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
