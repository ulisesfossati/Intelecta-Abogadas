import { Box, Divider, Image, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import reunion from '../../public/Abogadas.jpeg';

const Informacion = () => {
  return (
    <Box
      as="section"
      w="100%"
      maxH={{ base: 'none', lg: '810px' }} // altura máxima solo en desktop
      id="Informacion"
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={0}
        alignItems="stretch"
      >
        {/* Lado izquierdo */}
        <Box
          bg="#d4d4d4"
          display="flex"
          justifyContent="center"
          alignItems="center"
          
          px={{ base: 4, md: 8 }}
          py={{ base: 9, md: 9 }}
        >
          <Box maxW="500px" pr={{ base: 1, md: 10 }} pb={{ base: "0", md: "0", lg: "6em" }} >
            <Divider borderColor="gray" borderWidth="1px" width="100px" mb="6" />
            <Text textAlign="justify" fontSize={{ base: 'md', md: 'lg' }}>
              Somos dos abogadas egresadas de la Universidad Nacional del Sur, con matrícula habilitante en el Colegio Público de la Abogacía de la Capital Federal.<br /><br />
              En Intelecta, la formación académica es parte del compromiso. Nos capacitamos de forma continua porque entendemos que proteger creaciones exige una mirada jurídica actualizada, crítica y en constante movimiento.<br /><br />
              Intelecta nació del encuentro entre la pasión por la propiedad intelectual y el compromiso con quienes se animan a crear, emprender e innovar.<br /><br />
              Detectamos la necesidad de un enfoque legal que no solo entienda el lenguaje de las ideas, sino que las acompañe con herramientas jurídicas sólidas. Así surgió Intelecta: como un espacio donde el derecho se pone al servicio del pensamiento creativo, los proyectos emergentes y las nuevas tecnologías.<br /><br />

            </Text>
          </Box>
        </Box>

        {/* Lado derecho */}
        <Box>
          <Image
            src={reunion}
            alt="Reunion"
            w="100%"
            h={{ base: 'auto', md: '1000px', lg: '100%' }} // en tablet más chica
            maxH={{ base: 'auto', md: '650px', lg: 'none' }} // control en tablet
            objectFit="cover" // Re-enable objectFit
            objectPosition="50% 20%"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export { Informacion };
