import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import Delfina from '../../public/Abogada-Delfina2.jpeg';
import Bianca from '../../public/Abogada-Bianca.jpeg';
import Linkeding from '../../public/icons8-linkedin.svg';
import Gmail from '../../public/icons8-gmail.svg';
import Whatsapp from '../../public/icons8-whatsapp.svg';

const Equipo = () => {
  const iconHoverStyle = {
    transform: 'scale(1.15)',
    filter:
      'brightness(0) saturate(100%) invert(73%) sepia(3%) saturate(165%) hue-rotate(319deg) brightness(92%) contrast(87%)', // #b1acac
  };

  return (
    <>
      <Box as="section" minH="70vh" w="100%" bg="#d4d4d4" py="12" id='Equipo'>
        <Text
          as="h1"
          fontSize="5xl"
          fontWeight="bold"
          color="black"
          textAlign="center"
          mb="4"
        >
          NUESTRO EQUIPO
        </Text>

        <Box h="2px" bg="gray" w="90%" mx="auto" mb="10" />

        <Flex justify="center" gap="100px">
          {/* Tarjeta Delfina */}
          <Box border="6px solid #767575" h="100%">
            <Image src={Delfina} alt="Delfina" w="400px" h="480px" />
            <Box
              borderTop="6px solid #767575"
              h="190px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="10px" 
            >
              <Text textAlign="center"  fontSize="35.6px" >
                DELFINA ALVAREZ
              </Text>
              <Box display="flex" justifyContent="space-between">
              <Link
  href="https://wa.me/5492915099180?text=Hola,%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustaría%20recibir%20asesoramiento."
  isExternal
>

                  <Image
                    src={Whatsapp}
                    alt="WhatsApp"
                    w="50px"
                    h="50px"
                    transition="all 0.25s ease"
                    _hover={iconHoverStyle}
                  />
                </Link>
                <Link href="mailto:estudio.pi.legales@gmail.com" isExternal>
                  <Image
                    src={Gmail}
                    alt="Gmail"
                    w="50px"
                    h="50px"
                    transition="all 0.25s ease"
                    _hover={iconHoverStyle}
                  />
                </Link>
                <Link href="https://ar.linkedin.com/in/delfinaalvarezp" isExternal>
                  <Image
                    src={Linkeding}
                    alt="LinkedIn"
                    w="50px"
                    h="50px"
                    transition="all 0.25s ease"
                    _hover={iconHoverStyle}
                  />
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Tarjeta Bianca */}
          <Box border="6px solid #767575" h="100%">
            <Image src={Bianca} alt="Bianca" w="400px" h="480px" />
            <Box
              borderTop="6px solid #767575"
              h="190px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="10px"
            >
              <Text textAlign="center" fontSize="35.6px">
                BIANCA MASSARELLA
                <br /> MARTINEZ
              </Text>
              <Box display="flex" justifyContent="space-between">
              <Link
  href="https://wa.me/5492915724707?text=Hola,%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustaría%20recibir%20asesoramiento."
  isExternal
>

                  <Image
                    src={Whatsapp}
                    alt="WhatsApp"
                    w="50px"
                    h="50px"
                    transition="all 0.25s ease"
                    _hover={iconHoverStyle}
                  />
                </Link>
                <Link href="mailto:estudio.pi.legales@gmail.com" isExternal>
                  <Image
                    src={Gmail}
                    alt="Gmail"
                    w="50px"
                    h="50px"
                    transition="all 0.25s ease"
                    _hover={iconHoverStyle}
                  />
                </Link>
                <Link href="https://ar.linkedin.com/in/bianca-massarella-martinez-5909b02a3 " isExternal>
                  <Image
                    src={Linkeding}
                    alt="LinkedIn"
                    w="50px"
                    h="50px"
                    transition="all 0.25s ease"
                    _hover={iconHoverStyle}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export { Equipo };