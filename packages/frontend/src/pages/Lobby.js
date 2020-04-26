import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Flex,
  Text,
  Box,
  Image,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
} from "@chakra-ui/core";
import { getGameDetails } from "../service";
import Samurai from "../img/zen.jpg";

export default Lobby => {
  const { id } = useParams();
  useEffect(() => {
    const fetchGameDetails = async id => {
      const response = await getGameDetails(id);
      console.log(response.data);
    };
    fetchGameDetails(id);
  });

  return (
    <Box>
      <Flex align='center' justify='center'>
        <Box size='md'>
          <Image src={Samurai} alt='Samourai' />
        </Box>
      </Flex>
      <Text textAlign='center' fontSize='4xl'>
        Toto t'as invité à rejoindre la partie
      </Text>
      <Flex align='center' justify='center' marginBottom='10'>
        <Button size='lg' variantColor='teal'>
          Lancer la partie !
        </Button>
      </Flex>

      <AddPlayerModal></AddPlayerModal>
    </Box>
  );
};

function AddPlayerModal({ defaultOpen = false }) {
  const { isOpen, onOpen, onClose } = useDisclosure(defaultOpen);
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Flex align='center' justifyContent='center'>
              <Button variantColor='green'>Joindre la partie</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
