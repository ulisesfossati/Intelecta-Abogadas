import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Hoja1 } from './Hoja1/Hoja1'
import { Servicios } from './Hoja2/Servicios'
import { Informacion } from './Hoja3/Informacion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Hoja1/>
      <Servicios/>
      <Informacion/>
    </ChakraProvider>
  </React.StrictMode>
)
