import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Leyenda = () => {
    return(
        <>
        
            <Flex as="section" justifyContent="center" alignItems="center" bg="#b9b5b5" p="0.2em"> 
                <Text fontSize="1.1rem" color="black" >© 2025 INTELECTA ABOGADAS. Todos los derechos reservados.</Text>
            </Flex>
        </>
    )
}

export { Leyenda }