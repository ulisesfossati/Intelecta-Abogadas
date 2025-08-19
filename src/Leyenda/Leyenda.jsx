import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Leyenda = () => {
  return (
    <>
      <Flex
        as="section"
        justifyContent="center"
        alignItems="center"
        bg="#767575"
        p="0.5em"
      >
        <Text
          textAlign="center"
          fontSize={{ base: "0.95rem", sm: "1rem", md: "1.1rem" }}
          color="white"
          whiteSpace="normal"
          wordBreak="break-word"
          maxW="90%"
        >
          © 2025 INTELECTA ABOGADAS. Todos los derechos reservados.
        </Text>
      </Flex>
    </>
  );
};

export { Leyenda };
