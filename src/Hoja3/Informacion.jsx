import { Box, Divider, Image, Text } from '@chakra-ui/react';
import React from 'react';
import reunion from '../../public/Abogadas.jpeg';

const Informacion = () => {
  return (
    <Box
      as="section"
      w="100%"
      maxH="810px" // altura máxima más baja
      display="flex"
      alignItems="stretch"
      id='Informacion'
    >
      {/* Lado izquierdo */}
      <Box
        flex="1.1"
        bg="#d4d4d4"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px="8"
      >
        <Box maxW="500px" pr="10">
          <Divider borderColor="gray" borderWidth="1px" width="100px" mb="6" />
          <Text textAlign="justify">
            Somos dos abogadas egresadas de la Universidad Nacional del Sur, con matrícula habilitante en el Colegio Público de la Abogacía de la Capital Federal.<br /><br />
            En Intelecta, la formación académica es parte del compromiso. Nos capacitamos de forma continua porque entendemos que proteger creaciones exige una mirada jurídica actualizada, crítica y en constante movimiento.<br /><br />
            Intelecta nació del encuentro entre la pasión por la propiedad intelectual y el compromiso con quienes se animan a crear, emprender e innovar.<br /><br />
            Detectamos la necesidad de un enfoque legal que no solo entienda el lenguaje de las ideas, sino que las acompañe con herramientas jurídicas sólidas. Así surgió Intelecta: como un espacio donde el derecho se pone al servicio del pensamiento creativo, los proyectos emergentes y las nuevas tecnologías.<br /><br />
            Creemos en una práctica legal cercana, actual y consciente del valor intangible que mueve al mundo.
          </Text>
        </Box>
      </Box>

      {/* Lado derecho */}
      <Box flex="0.9" position="relative">
        <Image
          src={reunion}
          alt="Reunion"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="50% 20%"
        />
      </Box>
    </Box>
  );
};

export { Informacion };
