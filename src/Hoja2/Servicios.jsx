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

import { motion } from 'framer-motion';
const MotionBox = motion(Box);

const Servicios = () => {
  const animBase = {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: 'easeOut' },
  };

  const servicios = [
    { titulo: "Gestión integral de marcas", icono: marca },
    { titulo: "Gestión integral de derechos de autor", icono: derechoDeAutor },
    { titulo: "Registros de patentes y modelos de utilidad", icono: certificado },
    { titulo: "Registros de modelos y diseños industriales", icono: cabeza },
    { titulo: "Registro y alta de dominios web", icono: web },
    { titulo: "Redacción de Términos y Condiciones", icono: terminos },
    { titulo: "Gestión del Brand Protection Program (BPP) en Mercado Libre", icono: etiqueta },
    { titulo: "Asesoramiento legal en la elaboración de acuerdos y contratos", icono: contrato },
    { titulo: "Constitución de sociedades", icono: grupo },
  ];

  return (
    <Box
      as="section"
      minH="70vh"
      w="100%"
      bg="#CCCACA"
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
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          spacingX={{ base: 4, md: 6 }}
          spacingY={{ base: 6, md: 8 }}
          justifyItems="center"
        >
          {servicios.map((s, i) => (
            <MotionBox
              key={s.titulo}
              {...animBase}
              transition={{ ...animBase.transition, delay: i * 0.15 }} // escalonado
              w="100%"
              display="flex"
              justifyContent="center"
            >
              <TarjetaServicio titulo={s.titulo} icono={s.icono} />
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export { Servicios };
