import React from "react";
import { Image, Flex, Button, Input, Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import Samurai from "./img/samurai.jpg";
function App() {
  return (
    <div>
      <Text fontSize='6xl' textAlign='center'>
        Katana
      </Text>
      <Flex align='center' justify='center'>
        <Box size='md'>
          <Image src={Samurai} alt='Segun Adebayo' />
        </Box>
      </Flex>
      <Flex align='center' justify='center'>
        <Box marginBottom='20px'>
          <Button variantColor='teal'>Créer une partie </Button>
        </Box>
      </Flex>
      <Flex align='center' justify='center'>
        <Flex>
          <Button marginRight='10px'>Rejoindre une partie </Button>
          <Input width='230px' placeholder='Entrez un code pour rejoindre une partie' />
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
