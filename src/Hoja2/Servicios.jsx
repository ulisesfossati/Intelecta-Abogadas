import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { TarjetaServicio } from '../TarjetaServicio/TarjetaServicio';
import bombilla from '../../public/bombilla.png';
import mano from '../../public/mano.png';
import pluma from '../../public/pluma.png';

const Servicios = () => {
  return (
    <Box as="section" minH="70vh" w="100%" bg="#c1bdbd" py="12">
      <Text
        as="h1"
        fontSize="5xl"
        fontWeight="bold"
        color="black"
        textAlign="center"
        mb="4"
      >
        NUESTROS SERVICIOS
      </Text>

      <Box h="2px" bg="gray" w="90%" mx="auto" mb="10" />

      <Box maxW="1200px" w="100%" mx="auto" px="4">
        <SimpleGrid
          columns={3}            // fuerza 3 columnas
          spacingX="2"           // menor separación horizontal
          spacingY="4"
          justifyItems="center"  // centra cada tarjeta en su celda
        >
          <TarjetaServicio titulo="Propiedad Intelectual" icono={bombilla} />
          <TarjetaServicio titulo="Registro de Marcas" icono={mano} />
          <TarjetaServicio titulo="Derechos de Autor" icono={pluma} />
          <TarjetaServicio titulo="Propiedad Intelectual" icono={bombilla} />
          <TarjetaServicio titulo="Registro de Marcas" icono={mano} />
          <TarjetaServicio titulo="Derechos de Autor" icono={pluma} />
          <TarjetaServicio titulo="Propiedad Intelectual" icono={bombilla} />
          <TarjetaServicio titulo="Registro de Marcas" icono={mano} />
          <TarjetaServicio titulo="Derechos de Autor" icono={pluma} />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export { Servicios };
