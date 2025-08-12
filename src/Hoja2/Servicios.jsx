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
    <Box as="section" minH="70vh" w="100%" bg="#c1bdbd" py="12" id='Servicios'>
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
