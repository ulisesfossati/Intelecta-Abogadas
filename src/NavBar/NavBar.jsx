import { Box, Image, Link, HStack, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import logo from '/LogoPrincipal.png'

export const NAV_HEIGHT = 80
export const NAV_HEIGHT_SCROLLED = 110
export const TOP_OFFSET = 40
const LINE_TOP = TOP_OFFSET + NAV_HEIGHT_SCROLLED // posición fija de la línea

const NavBar = () => {
  const [bgColor, setBgColor] = useState('transparent')
  const [navHeight, setNavHeight] = useState(NAV_HEIGHT)

  const OFFSET = NAV_HEIGHT + TOP_OFFSET + 20

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (!section) return
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY
    const targetPosition = sectionPosition - OFFSET
    window.scrollTo({ top: targetPosition, behavior: 'smooth' })
  }

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight - (NAV_HEIGHT + TOP_OFFSET)
      if (window.scrollY > threshold) {
        setBgColor('#767575')
        setNavHeight(NAV_HEIGHT_SCROLLED)
      } else {
        setBgColor('transparent')
        setNavHeight(NAV_HEIGHT)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { text: 'INICIO', id: 'Inicio' },
    { text: 'SERVICIOS', id: 'Servicios' },
    { text: 'INFORMACION', id: 'Informacion' },
    { text: 'CONTACTO', id: 'Equipo' },
    { text: 'PREGUNTAS', id: 'Preguntas' },
    
  ]

  return (
    <>
      {/* Faja superior fija */}
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h={`${TOP_OFFSET}px`}
        bg={bgColor}
        transition="background-color 0.25s ease"
        zIndex="9111199"
        pointerEvents="none"
      />

      {/* Navbar (cambia altura y color) */}
      <Box
        as="nav"
        position="fixed"
        top={`${TOP_OFFSET}px`}
        left="0"
        w="100%"
        h={`${navHeight}px`}
        bg={bgColor}
        transition="background-color 0.25s ease, height 0.25s ease"
        zIndex="11111000"
      >
        <Flex align="center" justify="space-around" h="100%" px="6">
          <Image src={logo} alt="Logo" w="130px" filter="brightness(1.5)" ml="8" />
          <HStack spacing="6em">
            {items.map((item, i) => (
              <Link
                key={i}
                fontFamily="Barlow"
                fontWeight="bold"
                color="white"
                fontSize="1.3rem"
                position="relative"
                cursor="pointer"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '0',
                  height: '2px',
                  bg: '#b1acac',
                  transition: 'width 0.4s ease',
                }}
                _hover={{ _after: { width: '50%' } }}
                onClick={() => handleScroll(item.id)}
              >
                {item.text}
              </Link>
            ))}
          </HStack>
          <Box w="130px" />
        </Flex>
      </Box>

      {/* Relleno entre el bottom del nav y la línea fija (evita hueco) */}
      <Box
        position="fixed"
        top={`${TOP_OFFSET + navHeight}px`}
        left="0"
        w="100%"
        h={`${Math.max(0, NAV_HEIGHT_SCROLLED - navHeight)}px`}
        bg={bgColor}
        transition="height 0.25s ease, background-color 0.25s ease"
        zIndex="111999"
        pointerEvents="none"
      />

      {/* Línea fija (no se mueve) */}
    
    </>
  )
}

export { NavBar }
