import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid/v4";
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
  Input,
} from "@chakra-ui/core";
import { getGameDetails, addPlayer } from "../service";
import Samurai from "../img/zen.jpg";

export default Lobby => {
  const { id } = useParams();
  const [gameOwner, setGameOwner] = useState({ name: "", id: "" });
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getGameDetails(id).then(response => {
      setGameOwner(response.data.gameOwner);
      setPlayers(response.data.players);
    });
  }, [id]);
  const currentPlayer = JSON.parse(localStorage.getItem("shogun-player"));
  return (
    <Box>
      <Flex align='center' justify='center'>
        <Box size='md'>
          <Image src={Samurai} alt='Samourai' />
        </Box>
      </Flex>
      <Text textAlign='center' fontSize='4xl'>
        {gameOwner.name} t'as invité à rejoindre la partie
      </Text>
      {players.map(player => (
        <Text key={player.id} textAlign='center' fontSize='4xl'>
          {player.name} à rejoint la partie
        </Text>
      ))}
      <Flex align='center' justify='center' marginBottom='10'>
        <Button size='lg' variantColor='teal'>
          Lancer la partie !
        </Button>
      </Flex>
      {}
      {gameOwner.name && (
        <AddPlayerModal name={gameOwner.name} defaultOpen={shouldDisplayModal(currentPlayer, gameOwner)} />
      )}
    </Box>
  );
};

const shouldDisplayModal = (currentPlayer, gameOwner) => !currentPlayer || currentPlayer.id !== gameOwner.id;
function AddPlayerModal({ defaultOpen = false, name }) {
  const { isOpen, onClose } = useDisclosure(defaultOpen);
  const { handleSubmit, register } = useForm();
  const { id } = useParams();

  const onSubmit = async ({ currentPlayerName }) => {
    const currentPlayerId = uuid();
    const player = { id: currentPlayerId, name: currentPlayerName };
    await addPlayer(id, player);
    localStorage.setItem("shogun-name", JSON.stringify({ id: currentPlayerId, name: currentPlayerName }));
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name} à créer une </ModalHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name='currentPlayerName' isRequired placeholder="C'est quoi ton petit nom ? " ref={register} />
            <ModalBody></ModalBody>
            <ModalFooter>
              <Flex align='center' justifyContent='center'>
                <Button variantColor='green' type='onSubmit'>
                  Joindre la partie
                </Button>
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
