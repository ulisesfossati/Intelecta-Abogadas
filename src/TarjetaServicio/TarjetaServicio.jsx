import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

const TarjetaServicio = ({ titulo, icono, icono2x }) => {
  return (
    <Box
      bg="#949393"
      w="100%"
      maxW="220px"
      h="220px"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px="4"
      py="4"
      // Evita blur por reescalado
      transform="translateZ(0)"
      willChange="transform"
      backfaceVisibility="hidden"
      transformOrigin="center"
      transition="transform 160ms ease, box-shadow 160ms ease"
      _hover={{
        transform: 'translateZ(0) scale(1.03)', // leve escala = más nitidez
        boxShadow: 'lg',
      }}
      cursor="pointer"
      sx={{ contain: 'paint' }} // aísla repintado
    >
      <Box
        bg="#4b4a4a"
        borderRadius="full"
        w="65px"
        h="65px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="3"
        transform="translateZ(0)"
        backfaceVisibility="hidden"
      >
        <Image
          src={icono}
          // si pasás un @2x, lo usamos para máxima nitidez al escalar
          srcSet={icono2x ? `${icono} 1x, ${icono2x} 2x` : undefined}
          alt={titulo}
          boxSize="40px"
          objectFit="contain"
          objectPosition="center"
          // estos ayudan a que no “pumee” al escalar
          draggable={false}
          loading="eager"
          decoding="async"
          style={{
            imageRendering: 'auto',       // evita jaggies
            transform: 'translateZ(0)',   // fuerza raster en GPU
            backfaceVisibility: 'hidden',
          }}
        />
      </Box>

      <Text fontWeight="medium" fontSize="1.1rem" color="black">
        {titulo}
      </Text>
    </Box>
  );
};

export { TarjetaServicio };
