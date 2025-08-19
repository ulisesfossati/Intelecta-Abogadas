import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { TarjetaServicio } from '../TarjetaServicio/TarjetaServicio';
import cabeza from '../../public/icons8-cabeza.png';
import certificado from '../../public/icons8-certificado.png';
import etiqueta from '../../public/icons8-etiqueta.png';
import contrato from '../../public/icons8-contrato.png';
import derechoDeAutor from '../../public/icons8-derecho-autor.png';
import grupo from '../../public/icons8-grupos.png';
import marca from '../../public/icons8-marca.png';
import terminos from '../../public/icons8-terminos.png';
import web from '../../public/icons8-web.png';

const Servicios = () => {
  return (
    <Box
      as="section"
      minH="70vh"
      w="100%"
      bg="#c1bdbd"
      py={{ base: 10, md: 12, lg: 16 }}
      id="Servicios"
    >
      <Text
        as="h1"
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontWeight="bold"
        color="black"
        textAlign="center"
        mb={{ base: 3, md: 4 }}
      >
        NUESTROS SERVICIOS
      </Text>

      <Box h="2px" bg="gray" w={{ base: '92%', md: '90%' }} mx="auto" mb={{ base: 6, md: 10 }} />

      <Box maxW={{ base: '100%', md: '1100px', lg: '1200px' }} w="100%" mx="auto" px={{ base: 4, md: 6 }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }} // columnas responsivas
          spacingX={{ base: 4, md: 6 }}
          spacingY={{ base: 6, md: 8 }}
          justifyItems="center"
        >
          <TarjetaServicio titulo="Gestión integral de marcas" icono={marca} />
          <TarjetaServicio titulo="Gestión integral de derechos de autor" icono={derechoDeAutor} />
          <TarjetaServicio titulo="Registros de patentes y modelos de utilidad" icono={certificado} />
          <TarjetaServicio titulo="Registros de modelos y diseños industriales" icono={cabeza} />
          <TarjetaServicio titulo="Registro y alta de dominios web" icono={web} />
          <TarjetaServicio titulo="Redacción de Términos y Condiciones" icono={terminos} />
          <TarjetaServicio titulo="Gestión del Brand Protection Program (BPP) en Mercado Libre" icono={etiqueta} />
          <TarjetaServicio titulo="Asesoramiento legal en la elaboración de acuerdos y contratos" icono={contrato} />
          <TarjetaServicio titulo="Constitución de sociedades" icono={grupo} />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export { Servicios };
