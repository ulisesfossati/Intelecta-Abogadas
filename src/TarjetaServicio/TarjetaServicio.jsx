import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

const TarjetaServicio = ({ titulo, icono }) => {
  return (
    <Box
      bg="#949393"
      w="100%"
      maxW="170px"
      h="170px"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px="4"
      py="4"
      transition="all 0.3s ease"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: 'lg', // sombra al hacer hover
      }}
      cursor="pointer"
    >
      <Box
        bg="#4b4a4a"
        borderRadius="full"
        w="50px"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="3"
      >
        <Image src={icono} alt={titulo} boxSize="30px" />
      </Box>

      <Text fontWeight="medium" fontSize="sm" color="black">
        {titulo}
      </Text>
    </Box>
  );
};

export { TarjetaServicio };
