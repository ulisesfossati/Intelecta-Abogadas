import { Box, Flex, Icon, Img, Link, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import logo from '/LogoPrincipal.png';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6'; // TikTok

const SegFooter = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    const offset = 170;
    const targetPosition = sectionPosition - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'INICIO', id: 'Inicio' },
    { label: 'SERVICIOS', id: 'Servicios' },
    { label: 'INFORMACION', id: 'Informacion' },
    { label: 'CONTACTO', id: 'Equipo' },
    { label: 'PREGUNTAS', id: 'Preguntas' },
  ];

  const NavGrid = (props) => (
    <SimpleGrid
      columns={{ base: 3, md: 3, lg: 1 }}
      spacing={3}
      textAlign={{ base: 'center', lg: 'left' }}
      {...props}
    >
      {navLinks.map((l) => (
        <Link
          key={l.id}
          onClick={() => handleScroll(l.id)}
          cursor="pointer"
          textDecor="none"
          color="white"
          _hover={{ color: '#b1acac' }}
          transition="color 0.3s ease"
          fontFamily="barlow"
          whiteSpace="nowrap"
        >
          {l.label}
        </Link>
      ))}
    </SimpleGrid>
  );

  // ---- Menú centrado para MOBILE (solo base–md) ----
  const MobileCenteredMenu = () => (
    <Flex
      display={{ base: 'flex', md: 'flex', lg: 'none' }}
      justify="center"
      align="center"
      wrap="wrap"
      gap="12px 18px"
      mb="1.6em"
      w="100%"
    >
      {navLinks.map((l) => (
        <Link
          key={l.id}
          onClick={() => handleScroll(l.id)}
          cursor="pointer"
          textDecor="none"
          color="white"
          _hover={{ color: '#b1acac' }}
          transition="color 0.3s ease"
          fontFamily="barlow"
          whiteSpace="nowrap"
        >
          {l.label}
        </Link>
      ))}
    </Flex>
  );

  return (
    <Box as="footer" bg="#767575" color="white">
      {/* ============== MOBILE/TABLET (base–md) ============== */}
      <Box display={{ base: 'block', lg: 'none' }} px="2em" py="2em">
        {/* Logo */}
        <Flex align="center" justify="center" mb="1em">
          <Img filter="brightness(1.5)" h="15em" w="10em" src={logo} alt="Intelecta" />
        </Flex>

        {/* Menú CENTRADO (reemplaza al NavGrid solo en mobile/tablet) */}
        <MobileCenteredMenu />

        {/* Horarios + redes */}
        <Flex
          align="center"
          justify="space-between"
          mb="1.5em"
          wrap="wrap"
          rowGap="0.8em"
          px="1em"
          py="1em"
        >
          <Box>
            <Text fontWeight="bold" color="#D6D6D6" fontFamily="barlow" fontSize="1rem" mb="0.1em">
              HORARIOS DE ATENCIÓN
            </Text>
            <Text fontFamily="barlow" color="#cecece">
            Tenés dudas?
            <br />Escribinos cuando quieras.
            <br />Te respondemos lo antes posible.
          </Text>
          </Box>
          <Flex gap="0.7em">
            <Link href="https://www.instagram.com/intelecta.abogadas/?hl=es-la" isExternal aria-label="Instagram">
              <Icon as={FaInstagram} boxSize="1.9em" transition="300ms" _hover={{ color: '#b1acac' }} />
            </Link>
            <Link
              href="https://wa.me/5492914709293?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustar%C3%ADa%20recibir%20asesoramiento."
              isExternal
              aria-label="WhatsApp"
            >
              <Icon as={FaWhatsapp} boxSize="1.9em" transition="300ms" _hover={{ color: '#b1acac' }} />
            </Link>
            <Link href="https://www.tiktok.com/@intelecta.abogadas" isExternal aria-label="TikTok">
              <Icon as={FaTiktok} boxSize="1.9em" transition="300ms" _hover={{ color: '#b1acac' }} />
            </Link>
            <Link
              href="https://ar.linkedin.com/company/intelecta-abogadas-propiedad-intelectual"
              isExternal
              aria-label="LinkedIn"
            >
              <Icon as={FaLinkedin} boxSize="1.9em" transition="300ms" _hover={{ color: '#b1acac' }} />
            </Link>
          </Flex>
        </Flex>

        {/* Mapa: bordes simétricos y sin “pegarse” a la derecha */}
        <Box w="100%" h={['220px', '200px']} mx="auto" mb="1.8em">
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4881483194263!2d-62.252158123267236!3d-38.729559071760264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda33a5c092f29%3A0xe40aa9c01de5c7f7!2sFalucho%20228%2C%20B8001CHO%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1754585750769!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </Box>

        {/* Dirección + contacto */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          alignItems="start"
          px="1em"
          py="1em"
        >
          <Box textAlign="left" justifySelf="start">
            <Text
              fontWeight="bold"
              fontFamily="barlow"
              color="#D6D6D6"
              fontSize="0.95rem"
              mb="0.4em"
            >
              CONTACTO
            </Text>
            <Box fontFamily="barlow" color="#cecece">
              <Text whiteSpace="nowrap">BAHIA BLANCA</Text>
              <Text whiteSpace="nowrap">BUENOS AIRES</Text>
              <Text whiteSpace="nowrap">ARGENTINA</Text>
            </Box>
          </Box>

          <Box textAlign={{ base: 'left', md: 'left' }} justifySelf={{ base: 'start', md: 'end' }}>
            <Flex
              align="center"
              gap="0.4em"
              wrap="wrap"
              justify={{ base: 'flex-start', md: 'flex-end' }}
            >
              <Text fontFamily="barlow" fontSize="1.05rem" color="#cecece" whiteSpace="nowrap">
                E-mail:
              </Text>
              <Link
                href="mailto:estudio.pi.legales@gmail.com"
                fontFamily="barlow"
                color="white"
                _hover={{ color: '#b1acac' }}
                fontWeight="bold"
                whiteSpace="nowrap"
              >
                Estudio.pi.legales@gmail.com
              </Link>
            </Flex>
            <Text mt="0.8em" fontFamily="barlow" color="#D6D6D6" fontSize="1.05rem">
              Desarrollado por{' '}
              <Link
                fontFamily="barlow"
                fontSize="1.05rem"
                color="white"
                href="https://www.instagram.com/ulisesfossati/?hl=es-la"
                isExternal
                _hover={{ color: '#b1acac' }}
                fontWeight="bold"
              >
                Fossati Ulises
              </Link>
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* ============== DESKTOP (lg+) – layout original ============== */}
      <Box display={{ base: 'none', lg: 'flex' }} p="2em 0" flexWrap="wrap" flexDirection="row">
        {/* Columna 1: logo + links */}
        <Box
        
          display="flex"
          alignItems="center"
          flexDir="row"
          borderRight="3px solid white"
          w="auto"
          justifyContent="center"
          gap="2em"
          p="2em 2em"
        >
          <Img h="12em" w="10em" filter="brightness(1.8)" src={logo} alt="Intelecta Abogadas" />
          <NavGrid/>
        </Box>

        {/* Columna 2: CTA + redes */}
        <Box display="flex" flexDirection="column" alignItems="flex-start" ml="2em">
          <Text fontWeight="bold" fontFamily="barlow" color="#D6D6D6" fontSize="1rem" mb="0.5em">
            ESTAMOS PARA AYUDARTE
          </Text>
          <Text fontFamily="barlow" color="#cecece">
            Tenés dudas?
            <br />Escribinos cuando quieras.
            <br />Te respondemos lo antes posible.
          </Text>
          <Box display="flex" gap="0.5em" mt="1em">
            <Link href="https://www.instagram.com/intelecta.abogadas/?hl=es-la" isExternal aria-label="Instagram">
              <Icon as={FaInstagram} boxSize="1.9em" transition="300ms" _hover={{ color: '#b1acac' }} />
            </Link>
            <Link
              href="https://wa.me/5492914709293?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustar%C3%ADa%20recibir%20asesoramiento."
              isExternal
              aria-label="WhatsApp"
            >
              <Icon as={FaWhatsapp} boxSize="1.9em" transition="300ms" _hover={{ color: '#b1acac' }} />
            </Link>
            <Link href="https://www.tiktok.com/@intelecta.abogadas" isExternal aria-label="TikTok">
              <Icon as={FaTiktok} boxSize="1.9em" transition="300ms" _hover={{ color: '#b1acac' }} />
            </Link>
            <Link
              href="https://ar.linkedin.com/company/intelecta-abogadas-propiedad-intelectual"
              isExternal
              aria-label="LinkedIn"
            >
              <Icon as={FaLinkedin} boxSize="1.9em" transition="300ms" _hover={{ color: '#b1acac' }} />
            </Link>
          </Box>
        </Box>

        {/* Columna 3: mapa (desktop) */}
        <Box flex="1" display="flex" justifyContent="center" alignItems="center" mt="0" ml="2em" mr="2em">
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.4881483194263!2d-62.252158123267236!3d-38.729559071760264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda33a5c092f29%3A0xe40aa9c01de5c7f7!2sFalucho%20228%2C%20B8001CHO%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1754585750769!5m2!1ses!2sar"
            width={['43vh', '55vh', '60vh', '100%']}
            height={['220', '200', '250']}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </Box>

        {/* Columna 4: contacto */}
        <Box display="flex" flexDirection="column" w="28%" mt="0" alignItems="start" justifyContent="center">
          <Box display="contents" justifyContent="center" gap="3em" marginTop="2em">
            <Box display="flex" flexDir="column" w="60%">
              <Text
                fontWeight="bold"
                fontFamily="barlow"
                color="#D6D6D6"
                mb="0.5em"
                textAlign="left"
                whiteSpace="nowrap"
              >
                CONTACTO
              </Text>
              <Box fontFamily="barlow" color="#cecece">
                <Text>BAHIA BLANCA</Text>
                <Text>BUENOS AIRES</Text>
                <Text>ARGENTINA</Text>
              </Box>
            </Box>

            <Box display="flex" flexDir="column" w="60%">
              <Box display="flex" alignItems="center" gap="0.2em" mt="1em" flexWrap="nowrap">
                <Text fontFamily="barlow" color="#cecece" whiteSpace="nowrap">
                  E-mail:
                </Text>
                <Link
                  href="mailto:estudio.pi.legales@gmail.com"
                  fontFamily="barlow"
                  color="white"
                  _hover={{ color: '#b1acac' }}
                  fontWeight="bold"
                  whiteSpace="nowrap"
                >
                  Estudio.pi.legales@gmail.com
                </Link>
              </Box>

              <Box display="flex" alignItems="center" gap="0.2em" mt="1em" flexWrap="nowrap">
                <Text fontFamily="barlow" color="#cecece" whiteSpace="nowrap">
                  Desarrollado por
                </Text>
                <Link
                 whiteSpace="nowrap"
                  fontFamily="barlow"
                  color="white"
                  href="https://www.instagram.com/ulisesfossati/?hl=es-la"
                  _hover={{ color: '#b1acac' }}
                  fontWeight="bold"
                  isExternal
                >
                  Fossati Ulises
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { SegFooter };
