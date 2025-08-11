import React, { useState } from 'react';
import {
  Box,
  Text,
  Divider,
  Icon,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

const MotionBox = motion(Box);

const preguntasYRespuestas = [
  { pregunta: '¿Qué es la propiedad intelectual?', respuesta: 'Es el conjunto de derechos que protege las creaciones del intelecto humano.' },
  { pregunta: '¿Qué es una marca? ¿Tengo una?', respuesta: 'Si usás un nombre, logo o frase para ofrecer productos o servicios, tenés una marca. Y sí: debés registrarla.' },
  { pregunta: '¿Por qué debo registrar mi marca?', respuesta: 'Porque te da exclusividad legal, evita conflictos y protege lo que construiste.' },
  { pregunta: 'Mi emprendimiento es chico, ¿igual necesito registrar la marca?', respuesta: 'El tamaño de tu emprendimiento no importa: si tu marca crece sin estar registrada, incluso si tiene presencia en redes sociales, corrés el riesgo de perderla.' },
  { pregunta: '¿Todo lo que veo en Internet es de uso libre?', respuesta: 'No. Para usar contenido ajeno necesitás autorización del titular de los derechos, salvo que el uso esté justificado por una excepción legal. Si pensás utilizar obras como fuente de inspiración, es clave asesorarte previamente.' },
  { pregunta: 'Ya tengo mi marca registrada, ¿tengo que hacer algo más?', respuesta: 'Sí. Hay que presentar declaraciones juradas, renovarla cada 10 años y hacer un seguimiento anual. Nosotras nos encargamos de todo eso por vos.' },
  { pregunta: '¿Puedo registrar mi marca aunque aún no la haya lanzado?', respuesta: 'Sí. Lo ideal es iniciar el trámite de registro una vez que tenés definida la marca, ya que el proceso puede demorar varios meses hasta su concesión.' },
  { pregunta: '¿Qué pasa si alguien ya registró el nombre que quería usar?', respuesta: 'Podemos analizar alternativas legales, agregar elementos distintivos o evaluar si corresponde una oposición. No todo está perdido.' },
  { pregunta: '¿Mi marca registrada en Argentina me protege en otros países?', respuesta: 'No. Las marcas son territoriales. Si pensás expandirte al exterior, consultanos para ayudarte con el registro internacional.' },
  { pregunta: '¿Puedo registrar mi nombre como marca?', respuesta: 'Sí. Tu nombre puede convertirse en una marca personal si lo usás comercialmente. Ideal para profesionales, artistas y creadores.' },
  { pregunta: '¿Qué derechos tengo al registrar una obra con copyright (©)?', respuesta: 'Como autor/a tenés derechos morales y patrimoniales. El registro prueba la autoría y te permite defender tu creación legalmente.' },
  { pregunta: 'Creé algo, ¿qué tipo de protección necesito?', respuesta: 'Cada idea tiene su protección: marca, derecho de autor, diseño o modelo industrial, modelo de utilidad y patente. Te ayudamos a identificar la correcta.' },
  { pregunta: '¿Puedo oponerme a que usen mis obras, creaciones o propiedad intelectual?', respuesta: 'Sí. Tenés derecho a impedir el uso no autorizado y a tomar acciones legales si alguien infringe tu autoría o tu marca.' },
  { pregunta: '¿Qué es una patente y cuándo se puede registrar?', respuesta: 'Una patente protege una invención novedosa y útil. Si desarrollaste una solución técnica original, podemos ayudarte a patentarla.' },
  { pregunta: '¿Puedo proteger el diseño de mi producto o packaging?', respuesta: 'Sí. Podés registrar el modelo o diseño industrial para evitar copias y sumar valor diferencial a tu marca.' },
  { pregunta: 'Tengo una web, ¿necesito Términos y Condiciones?', respuesta: 'Sí. Protegen tu negocio y marcan las reglas de uso para los usuarios.' },
  { pregunta: '¿Qué es un dominio web y por qué debería tener uno?', respuesta: 'Es tu nombre digital. Protege tu identidad online y te da presencia profesional desde el primer clic.' },
  { pregunta: 'Vendo en Mercado Libre, ¿me protege la propiedad intelectual?', respuesta: 'No automáticamente. Pero si registrás tu marca, diseño o modelo industrial, podés activar el Programa de Protección de Propiedad Intelectual (BPP) y denunciar publicaciones que infrinjan tus derechos.' },
  { pregunta: '¿Para qué sirven los contratos?', respuesta: 'Previenen conflictos, aclaran derechos y aseguran que lo pactado se cumpla.' },
  { pregunta: '¿Pueden ayudarme a crear mi empresa desde cero?', respuesta: 'Sí. Te asesoramos y gestionamos la constitución legal de tu sociedad, para que emprendas con respaldo y formalidad desde el inicio.' }
];

const PreguntasFrecuentes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <Box bg="#b9b5b5" minH="70vh" py="10" px="6" as="section">
      <Text
        as="h1"
        fontSize="5xl"
        fontWeight="bold"
        color="black"
        textAlign="center"
        mb="4"
      >
        PREGUNTAS FRECUENTES
      </Text>

      <Box h="2px" bg="gray" w="90%" mx="auto" mb="10" />

      <Wrap spacing="20px" justify="center">
        {preguntasYRespuestas.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <WrapItem key={index} width={["100%", "45%", "30%", "18%"]}>
              <Box
                bg={isOpen ? "white" : "#818080"}
                color={isOpen ? "black" : "white"}
                fontWeight="bold"
                borderRadius="md"
                px="4"
                py="3"
                cursor="pointer"
                boxShadow="md"
                transition="all 0.2s ease"
                onClick={() => toggleIndex(index)}
                w="100%"
                minH="70px"
                overflow="hidden"
              >
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Text fontSize="sm">{item.pregunta}</Text>
                  <Icon
                    as={ChevronDownIcon}
                    boxSize={5}
                    transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                    transition="transform 0.2s ease"
                  />
                </Box>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <MotionBox
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      overflow="hidden"
                      transition={{ duration: 0.25 }}
                      mt="3"
                    >
                      <Text fontWeight="normal" fontSize="sm" color="black">
                        {item.respuesta}
                      </Text>
                    </MotionBox>
                  )}
                </AnimatePresence>
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

export { PreguntasFrecuentes };
