import { Box, Flex, Icon, Img, Link, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import logo from '/LogoPrincipal.png';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const SegFooter = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      const targetPosition = sectionPosition - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

 

  return (
    <Box
      as="footer"
      bg="#767575"
      p="2em 0"
      display="flex"
      flexWrap="wrap"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Box
       
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir={["column", "column", "column", "row"]}
        borderRight={["none", "none", "none", "3px solid white"]}
        w={["100%", "100%", "100%", "20%"]}
        gap="2em"
        p="2em 2em"
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Img filter="brightness(1.5)" h="14em" w="8em" src={logo} />
        </Box>

        <SimpleGrid columns={[3, 3, 1, 1]} spacing={3} textAlign="left">
          <Link
            textDecor="none"
            color="white"
            _hover={{ color: "#b1acac" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            onClick={() => handleScroll('Inicio')}
            cursor="pointer"
            whiteSpace="nowrap"
          >
            INICIO
          </Link>
          <Link
            
            onClick={() => handleScroll('Servicios')}
            cursor="pointer"
            textDecor="none"
            color="white"
            _hover={{ color: "#b1acac" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            whiteSpace="nowrap"
          >
            SERVICIOS
          </Link>
          <Link
            textDecor="none"
            color="white"
            _hover={{ color: "#b1acac" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            onClick={() => handleScroll('Informacion')}
            cursor="pointer"
            whiteSpace="nowrap"
          >
            INFORMACION
          </Link>
          <Link
            onClick={() => handleScroll('Equipo')}
            cursor="pointer"
            textDecor="none"
            color="white"
            _hover={{ color: "#b1acac" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            whiteSpace="nowrap"
          >
            CONTACTO
          </Link>
          <Link
            onClick={() => handleScroll('Preguntas')}
            cursor="pointer"
            textDecor="none"
            color="white"
            _hover={{ color: "#b1acac" }}
            transition="color 0.3s ease"
            fontFamily="barlow"
            whiteSpace="nowrap"
          >
            PREGUNTAS
          </Link>
        </SimpleGrid>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-start" ml="2em">
        <Text
          fontWeight="bold"
          fontFamily="barlow"
          color="#D6D6D6"
          fontSize={["1rem", "1.2rem", "1.2rem", "1rem"]}
          mb="0.5em"
        >
          ESTAMOS PARA AYUDARTE
        </Text>
        <Text fontFamily="barlow" color="#cecece" fontSize={["1rem", "1.2rem", "1.2rem", "1rem"]}>
          ¿Tenés dudas?<br />Escribinos cuando quieras, te respondemos lo antes posible.
        </Text>
        <Box display="flex" gap="0.5em" mt="1em">
          <Link href="https://www.instagram.com/intelecta.abogadas/?hl=es-la" isExternal>
            <Icon as={FaInstagram} boxSize="1.9em" color="white" transition="300ms" _hover={{ color: '#b1acac' }} />
          </Link>
          <Link
  href="https://wa.me/5492914709293?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustar%C3%ADa%20recibir%20asesoramiento."
  isExternal
>
  <Icon
    as={FaWhatsapp}
    boxSize="1.9em"
    color="white"
    transition="300ms"
    _hover={{ color: '#b1acac' }}
  />
</Link>
          <Link href="https://ar.linkedin.com/company/intelecta-abogadas-propiedad-intelectual" isExternal>
            <Icon as={FaLinkedin} boxSize="1.9em" color="white" transition="300ms" _hover={{ color: '#b1acac' }} />
          </Link>
        </Box>
      </Box>

      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={['2em', '0']}
        ml="2em"
        mr="2em"
      >
        <Box
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4881483194263!2d-62.252158123267236!3d-38.729559071760264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda33a5c092f29%3A0xe40aa9c01de5c7f7!2sFalucho%20228%2C%20B8001CHO%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1754585750769!5m2!1ses!2sar"
          width={["43vh", "55vh", "60vh", "100%"]}
          height={["220", "250"]}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        w={["47%", "100%", "100%", "28%"]}
        mt={['2em', '0']}
        alignItems={["center", "center", "center", "start"]}
        justifyContent="center"
      >
        <Box display={["contents", "flex", "flex", "contents"]} justifyContent="center" gap="3em" marginTop="2em">
          <Box display="flex" flexDir="column" textAlign={["center", "right", "right", "left"]} w="60%">
            <Text fontWeight="bold" fontFamily="barlow" color="white" mb="0.5em" textAlign="left" fontSize={["1rem", "1rem", "1.2rem", "1rem"]} whiteSpace="nowrap">
              CONTACTO
            </Text>
            <Box fontFamily="barlow" color="#cecece" textAlign="center">
              <Text whiteSpace="nowrap" textAlign="left">BAHIA BLANCA</Text>
              <Text whiteSpace="nowrap" textAlign="left">BUENOS AIRES</Text>
              <Text whiteSpace="nowrap" textAlign="left">ARGENTINA</Text>
            </Box>
          </Box>

          <Box display="flex" flexDir="column" w="60%">
            <Box display="flex" alignItems="center" gap="0.2em" mt="1em">
              <Text fontFamily="barlow" color="#cecece" fontSize={["1.1rem", "1.1rem", "1.2rem", "1.1rem"]} whiteSpace="nowrap">E-mail:</Text>
              <Link
                href="mailto:estudio.pi.legales@gmail.com"
                fontFamily="barlow"
                color="white"
                transition="300ms"
                _hover={{ color: "#b1acac" }}
                cursor="pointer"
                fontWeight="bold"
                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.1rem"]}
                whiteSpace="nowrap"
              >
                Estudio.pi.legales@gmail.com
              </Link>
            </Box>

            <Box display="flex" alignItems="center" gap="0.2em" mt="1em">
              <Text fontFamily="barlow" color="#cecece" whiteSpace="nowrap" fontSize={["1.1rem", "1.1rem", "1.2rem", "1.1rem"]}>Desarrollado por</Text>
              <Link 
                fontFamily="barlow" 
                color="white" 
                href="https://www.instagram.com/ulisesfossati/?hl=es-la"
                _hover={{ color: "#b1acac" }}
                transition="300ms"
                fontWeight="bold"
                whiteSpace="nowrap"
                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.1rem"]}
                isExternal
              >
                Fossati Ulises
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { SegFooter };
