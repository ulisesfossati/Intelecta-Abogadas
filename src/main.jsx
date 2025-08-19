import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Hoja1 } from './Hoja1/Hoja1'
import { Servicios } from './Hoja2/Servicios'
import { Informacion } from './Hoja3/Informacion'
import { PreguntasFrecuentes } from './Hoja4/Hoja4'
import { SegFooter } from './Footer/SegFooter'
import { Equipo } from './Hoja5/Equipo'
import { Leyenda } from './Leyenda/Leyenda'
import { EquipoAbogadas } from './EquipoAbogadas/EquipoAbogadas'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Hoja1/>
      <Servicios/>
      <Informacion/>
      <EquipoAbogadas/>
      <PreguntasFrecuentes/>
      {/* <Equipo/> */}
      <SegFooter/>
      <Leyenda/>
    </ChakraProvider>
  </React.StrictMode>
)
