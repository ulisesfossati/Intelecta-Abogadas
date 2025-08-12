import { Box, Image, Text, Link, Flex } from '@chakra-ui/react';
import React from 'react';
import Delfina from '../../public/Abogada-Delfina2.jpeg';
import Bianca from '../../public/Abogada-Bianca.jpeg';
import Linkeding from '../../public/icons8-linkedin.svg';
import Gmail from '../../public/icons8-gmail.svg';
import Whatsapp from '../../public/icons8-whatsapp.svg';

const IMG_W = '400px';
const IMG_H = '480px';
const FRANJA_H = '40%';
const TEXT_W = '360px';
const SIDE_GAP = '32px';

const iconStyle = {
    
  transition: 'transform 0.2s ease, opacity 0.2s ease',
  
  filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)', 
  _hover: { transform: 'scale(1.15)', opacity: 0.8 }
};

const EquipoAbogadas = () => {
  return (
    <Box
      as="section"
      h="80dvh"
      w="100%"
      bg="#c1bdbd"
      pt="12"
      id="Equipo"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      position="relative"
      overflow="hidden"
    >
      {/* Título y línea */}
      <Box>
        <Text as="h1" fontSize="5xl" fontWeight="bold" color="black" textAlign="center" mb="4">
          NUESTRO EQUIPO
        </Text>
        <Box h="2px" bg="gray" w="90%" mx="auto" />
      </Box>

      {/* Franja gris decorativa */}
      <Box position="absolute" bottom="0" left="0" w="100%" h={FRANJA_H} bg="#818080" zIndex={0} />

      {/* Fila de imágenes */}
      <Box
        mt="auto"
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        gap="10"
        zIndex={1}
      >
        <Image src={Delfina} alt="Delfina" w={IMG_W} h={IMG_H} borderTop="4px solid #818080" borderRight="4px solid #818080" borderLeft="4px solid #818080"  />
        <Image src={Bianca} alt="Bianca" w={IMG_W} h={IMG_H} borderTop="4px solid #818080" borderRight="4px solid #818080" borderLeft="4px solid #818080"  />
      </Box>

      {/* Overlay nombres + iconos */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h={FRANJA_H}
        zIndex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pointerEvents="none"
      >
        <Box display="flex" alignItems="center" gap="10">
          {/* Delfina */}
          <Box display="flex" alignItems="center" gap={SIDE_GAP}>
            <Flex w={TEXT_W} flexDirection="column" alignItems="center" pointerEvents="auto">
              <Text fontWeight="bold" color="white" fontSize="1.9rem" textAlign="center">
                DELFINA ALVAREZ
              </Text>
              <Flex gap="10" mt="4" alignItems="center" justifyContent="center">
                <Link href="mailto:estudio.pi.legales@gmail.com" isExternal>
                  <Image src={Gmail} alt="Gmail" boxSize="42px" {...iconStyle} />
                </Link>
                <Link   href="https://wa.me/5492915099180?text=Hola,%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustaría%20recibir%20asesoramiento." isExternal>
                  <Image src={Whatsapp} alt="WhatsApp" boxSize="42px" {...iconStyle} />
                </Link>
                <Link href="https://ar.linkedin.com/in/delfinaalvarezp" isExternal>
                  <Image src={Linkeding} alt="LinkedIn" boxSize="42px" {...iconStyle} />
                </Link>
              </Flex>
            </Flex>
            <Box w={IMG_W} />
          </Box>

          {/* Bianca */}
          <Box display="flex" alignItems="center" gap={SIDE_GAP}>
            <Box w={IMG_W} />
            <Flex w={TEXT_W} flexDirection="column" alignItems="center" pointerEvents="auto">
              <Text fontWeight="bold" color="white" fontSize="1.9rem" textAlign="center">
                BIANCA MASSARELLA <br /> MARTINEZ
              </Text>
              <Flex gap="10" mt="4" alignItems="center" justifyContent="center">
                <Link  href="mailto:estudio.pi.legales@gmail.com" isExternal>
                  <Image  src={Gmail} alt="Gmail" boxSize="42px" {...iconStyle} />
                </Link>
                <Link   href="https://wa.me/5492915724707?text=Hola,%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustaría%20recibir%20asesoramiento." isExternal>
                  <Image src={Whatsapp} alt="WhatsApp" boxSize="42px" {...iconStyle} />
                </Link>
                <Link href="https://ar.linkedin.com/in/bianca-massarella-martinez-5909b02a3 " isExternal>
                  <Image src={Linkeding} alt="LinkedIn" boxSize="42px" {...iconStyle} />
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { EquipoAbogadas };
