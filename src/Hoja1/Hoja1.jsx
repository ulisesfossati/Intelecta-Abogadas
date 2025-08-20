import { Box, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import Edificios from '../../public/Principla.jpg';
import { NavBar } from '../NavBar/NavBar';

const Hoja1 = () => {
  const titulo = useBreakpointValue({
    base: 'INTELECTA\nABOGADAS', // móvil: en dos líneas
    md: 'INTELECTA ABOGADAS',    // tablet y escritorio: todo junto
  });

  return (
    <Box
      as="section"
      id="Inicio"
      minH="100vh"
      w="100%"
      position="relative"
      bgImage={`url(${Edificios})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      overflow="hidden"
    >
      {/* Capa oscura encima */}
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

        {/* Línea decorativa */}
        <Box
          h="2px"
          bg="gray"
          w={{ base: "92%", md: "93%", lg: "90%" }}
          mx="auto"
          mt={{ base: "120px", md: "120px" ,lg: "150px" }}
        />
<Box
  minH="calc(80vh - 80px)"
  display="flex"
  alignItems="center"
  px={{ base: '1.5em', md: '3em', lg: '6em', xl: '8em' }} // 🔹 márgenes prolijos en cada breakpoint
>
  <Box w="100%">
    <Text
      as="h1"
      fontSize={{ base: '6xl', md: '6xl' }}
      fontWeight="bold"
      color="white"
      whiteSpace={useBreakpointValue({ base: 'pre-line', md: 'pre-line', lg: 'nowrap' })}
    >
      {titulo}
    </Text>
    <Text as="h2" fontSize="lg" color="white" mb="6">
      Protegemos lo que te hace único: somos un estudio de propiedad intelectual que convierte
      creaciones en activos.<br />
      Brindamos asesoramiento estratégico y a medida.
    </Text>
    <Button
    cursor="pointer"
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