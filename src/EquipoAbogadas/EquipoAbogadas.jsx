import { Box, Image, Text, Link, Flex, Stack, Grid, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import Delfina from '../../public/Abogada-Delfina2.jpeg';
import Bianca from '../../public/Abogada-Bianca.jpeg';
import Linkeding from '../../public/icons8-linkedin.svg';
import Gmail from '../../public/icons8-gmail.svg';
import Whatsapp from '../../public/icons8-whatsapp.svg';

const iconStyle = {
  transition: 'transform 0.2s ease, opacity 0.2s ease',
  filter:
    'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
  _hover: { transform: 'scale(1.15)', opacity: 0.8 },
};

const EquipoAbogadas = () => {
  const layout = useBreakpointValue({ base: 'mobile', md: 'tablet', lg: 'desktop' });

  /* Escalado progresivo (desktop) */
  const IMG_W_CLAMP   = 'clamp(200px, 24vw, 380px)';
  const IMG_H_CLAMP   = 'clamp(270px, 30vw, 480px)';
  const NAME_FS_CLAMP = 'clamp(1rem, 1.05vw + 0.62rem, 1.55rem)';
  const ICON_SZ_CLAMP = 'clamp(28px, 2vw, 44px)';
  const GAP_CLAMP     = 'clamp(12px, 2vw, 28px)';
  const TEXT_W_CLAMP  = 'clamp(230px, 18vw, 360px)';
  const FRANJA_H      = useBreakpointValue({ base: '38%', md: '36%', lg: '34%', xl: '40%' });

  /* Mobile / Tablet */
  const mImgW = useBreakpointValue({ base: '200px', sm: '230px', md: '260px' });
  const mImgH = useBreakpointValue({ base: '270px', sm: '310px', md: '340px' });
  const mName = useBreakpointValue({ base: '1rem', sm: '1.15rem', md: '1.25rem' });
  const mIcon = useBreakpointValue({ base: '28px', sm: '32px', md: '34px' });
  const mGap  = useBreakpointValue({ base: 4, sm: 6, md: 8 });

  const FranjaFullBleed = ({ children }) => (
    <Box bg="#818080" py={4} w="100vw" position="relative" left="50%" transform="translateX(-50%)">
      <Box maxW="600px" mx="auto" px={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        {children}
      </Box>
    </Box>
  );

  return (
    <Box as="section" minH="70dvh" w="100%" bg="#CCCACA" pt="12" id="Equipo" display="flex" flexDirection="column" position="relative" overflow="hidden">
      {/* Título */}
      <Box>
        <Text as="h1" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="bold" color="black" textAlign="center" mb="4">
          NUESTRO EQUIPO
        </Text>
        <Box h="2px" bg="gray" w="90%" mx="auto" />
      </Box>

      {/* ========== MOBILE ========== */}
      {layout === 'mobile' && (
        <Stack spacing={8} mt={8} align="center" mb={2}>
          {/* Delfina */}
          <Stack spacing={0} align="center" w="100%">
            <Image src={Delfina} alt="Delfina" w={mImgW} h={mImgH}  borderTop="3px solid #818080" borderRight="3px solid #818080" borderLeft="3px solid #818080" />
            <FranjaFullBleed>
              <Text fontWeight="bold" color="white" fontSize={mName} textAlign="center" lineHeight="short">
                {/* 2 líneas: segunda invisible para conservar altura y no afecta mobile (estético parejo) */}
                <Box as="span" display="block" whiteSpace="nowrap">DELFINA ALVAREZ</Box>
                <Box as="span" display="block" visibility="hidden" aria-hidden>MARTINEZ</Box>
              </Text>
              <Flex gap={4} mt={3} justify="center" align="center">
                <Link href="mailto:estudio.pi.legales@gmail.com" isExternal><Image src={Gmail} alt="Gmail" boxSize={mIcon} {...iconStyle} /></Link>
                <Link href="https://wa.me/5492915099180" isExternal><Image src={Whatsapp} alt="WhatsApp" boxSize={mIcon} {...iconStyle} /></Link>
                <Link href="https://ar.linkedin.com/in/delfinaalvarezp" isExternal><Image src={Linkeding} alt="LinkedIn" boxSize={mIcon} {...iconStyle} /></Link>
              </Flex>
            </FranjaFullBleed>
          </Stack>

          {/* Bianca */}
          <Stack spacing={0} align="center" w="100%">
            <Image src={Bianca} alt="Bianca" w={mImgW} h={mImgH}  borderTop="3px solid #818080" borderRight="3px solid #818080" borderLeft="3px solid #818080" />
            <FranjaFullBleed>
              <Text fontWeight="bold" color="white" fontSize={mName} textAlign="center" lineHeight="short">
                <Box as="span" display="block" whiteSpace="nowrap">BIANCA MASSARELLA</Box>
                <Box as="span" display="block">MARTINEZ</Box>
              </Text>
              <Flex gap={4} mt={3} justify="center" align="center">
                <Link href="mailto:estudio.pi.legales@gmail.com" isExternal><Image src={Gmail} alt="Gmail" boxSize={mIcon} {...iconStyle} /></Link>
                <Link href="https://wa.me/5492915724707" isExternal><Image src={Whatsapp} alt="WhatsApp" boxSize={mIcon} {...iconStyle} /></Link>
                <Link href="https://ar.linkedin.com/in/bianca-massarella-martinez-5909b02a3" isExternal><Image src={Linkeding} alt="LinkedIn" boxSize={mIcon} {...iconStyle} /></Link>
              </Flex>
            </FranjaFullBleed>
          </Stack>
        </Stack>
      )}

      {/* ========== TABLET ========== */}
      {layout === 'tablet' && (
        <Box mt="auto" w="100%">
          <Flex justify="center" align="flex-end" gap={mGap} zIndex={1} maxW="900px" mx="auto" px={6}>
            <Image src={Delfina} alt="Delfina" w={mImgW} h={mImgH}  borderTop="4px solid #818080" borderRight="4px solid #818080" borderLeft="4px solid #818080" />
            <Image src={Bianca} alt="Bianca" w={mImgW} h={mImgH}  borderTop="4px solid #818080" borderRight="4px solid #818080" borderLeft="4px solid #818080" />
          </Flex>

          <Box w="100vw" position="relative" left="50%" transform="translateX(-50%)" bg="#818080" py={5}>
            <Box maxW="900px" mx="auto" px={6}>
              <Grid templateColumns={`repeat(2, ${mImgW})`} columnGap={mGap} justifyContent="center" alignItems="center">
                {/* Delfina: 2 líneas (2ª invisible) para alinear con la 1ª de Bianca */}
                <Stack align="center" w={mImgW} spacing={3}>
                  <Text fontWeight="bold" color="white" fontSize={mName} textAlign="center" lineHeight="short">
                    <Box as="span" display="block" whiteSpace="nowrap">DELFINA ALVAREZ</Box>
                    <Box as="span" display="block" visibility="hidden" aria-hidden>MARTINEZ</Box>
                  </Text>
                  <Flex gap={6} justify="center" align="center">
                    <Link href="mailto:estudio.pi.legales@gmail.com" isExternal><Image src={Gmail} alt="Gmail" boxSize={mIcon} {...iconStyle} /></Link>
                    <Link href="https://wa.me/5492915099180" isExternal><Image src={Whatsapp} alt="WhatsApp" boxSize={mIcon} {...iconStyle} /></Link>
                    <Link href="https://ar.linkedin.com/in/delfinaalvarezp" isExternal><Image src={Linkeding} alt="LinkedIn" boxSize={mIcon} {...iconStyle} /></Link>
                  </Flex>
                </Stack>

                {/* Bianca */}
                <Stack align="center" w={mImgW} spacing={3}>
                  <Text fontWeight="bold" color="white" fontSize={mName} textAlign="center" lineHeight="short">
                    <Box as="span" display="block" whiteSpace="nowrap">BIANCA MASSARELLA</Box>
                    <Box as="span" display="block">MARTINEZ</Box>
                  </Text>
                  <Flex gap={6} justify="center" align="center">
                    <Link href="mailto:estudio.pi.legales@gmail.com" isExternal><Image src={Gmail} alt="Gmail" boxSize={mIcon} {...iconStyle} /></Link>
                    <Link href="https://wa.me/5492915724707" isExternal><Image src={Whatsapp} alt="WhatsApp" boxSize={mIcon} {...iconStyle} /></Link>
                    <Link href="https://ar.linkedin.com/in/bianca-massarella-martinez-5909b02a3" isExternal><Image src={Linkeding} alt="LinkedIn" boxSize={mIcon} {...iconStyle} /></Link>
                  </Flex>
                </Stack>
              </Grid>
            </Box>
          </Box>
        </Box>
      )}

      {/* ========== DESKTOP ========== */}
      {layout === 'desktop' && (
        <>
          <Box position="absolute" bottom="0" left="0" w="100%" h={FRANJA_H} bg="#818080" zIndex={0} />

          <Box w="fit-content" mx="auto" mt="auto" zIndex={1} px={{ lg: 2 }}>
            <Flex gap={GAP_CLAMP} align="flex-end">
              <Image src={Delfina} alt="Delfina" w={IMG_W_CLAMP} h={IMG_H_CLAMP} 
                borderTop="4px solid #818080" borderRight="4px solid #818080" borderLeft="4px solid #818080" />
              <Image src={Bianca} alt="Bianca" w={IMG_W_CLAMP} h={IMG_H_CLAMP} 
                borderTop="4px solid #818080" borderRight="4px solid #818080" borderLeft="4px solid #818080" />
            </Flex>
          </Box>

          {/* CENTRADO y alineación de primeras líneas */}
          <Box position="absolute" bottom="0" left="0" w="100%" zIndex={1} h={FRANJA_H}>
            <Flex h="100%" align="center" justify="center">
              <Grid
                templateColumns={`${TEXT_W_CLAMP} ${IMG_W_CLAMP} ${IMG_W_CLAMP} ${TEXT_W_CLAMP}`}
                columnGap={GAP_CLAMP}
                w="fit-content"
                h="100%"
                alignItems="center"
                justifyItems="center"
              >
                {/* Delfina: 2 líneas (2ª invisible) */}
                <Stack w={TEXT_W_CLAMP} align="center" justify="center" spacing="14px">
                  <Text fontWeight="bold" color="white" fontSize={NAME_FS_CLAMP} textAlign="center" lineHeight="short">
                    <Box as="span" display="block" whiteSpace="nowrap">DELFINA ALVAREZ</Box>
                    <Box as="span" display="block" visibility="hidden" aria-hidden>MARTINEZ</Box>
                  </Text>
                  <Flex gap="20px" justify="center">
                    <Link href="mailto:estudio.pi.legales@gmail.com" isExternal><Image src={Gmail} alt="Gmail" boxSize={ICON_SZ_CLAMP} {...iconStyle} /></Link>
                    <Link href="https://wa.me/5492915099180" isExternal><Image src={Whatsapp} alt="WhatsApp" boxSize={ICON_SZ_CLAMP} {...iconStyle} /></Link>
                    <Link href="https://ar.linkedin.com/in/delfinaalvarezp" isExternal><Image src={Linkeding} alt="LinkedIn" boxSize={ICON_SZ_CLAMP} {...iconStyle} /></Link>
                  </Flex>
                </Stack>

                <Box w={IMG_W_CLAMP} />
                <Box w={IMG_W_CLAMP} />

                {/* Bianca */}
                <Stack w={TEXT_W_CLAMP} align="center" justify="center" spacing="14px">
                  <Text fontWeight="bold" color="white" fontSize={NAME_FS_CLAMP} textAlign="center" lineHeight="short">
                    <Box as="span" display="block" whiteSpace="nowrap">BIANCA MASSARELLA</Box>
                    <Box as="span" display="block">MARTINEZ</Box>
                  </Text>
                  <Flex gap="20px" justify="center">
                    <Link href="mailto:estudio.pi.legales@gmail.com" isExternal><Image src={Gmail} alt="Gmail" boxSize={ICON_SZ_CLAMP} {...iconStyle} /></Link>
                    <Link href="https://wa.me/5492915724707" isExternal><Image src={Whatsapp} alt="WhatsApp" boxSize={ICON_SZ_CLAMP} {...iconStyle} /></Link>
                    <Link href="https://ar.linkedin.com/in/bianca-massarella-martinez-5909b02a3" isExternal><Image src={Linkeding} alt="LinkedIn" boxSize={ICON_SZ_CLAMP} {...iconStyle} /></Link>
                  </Flex>
                </Stack>
              </Grid>
            </Flex>
          </Box>
        </>
      )}
    </Box>
  );
};

export { EquipoAbogadas };