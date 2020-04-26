import React, { useState } from "react";
import { Text, FormControl, Image, Flex, Button, Input, Box, useToast } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import Samurai from "../img/samurai.jpg";
import { useHistory } from "react-router-dom";
import { createGame } from "../service";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const player = JSON.parse(localStorage.getItem("shogun-player"));

  const { register, handleSubmit, errors } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const onSubmit = async ({ name: playerName }) => {
    setIsSubmitting(true);
    const player = { name: playerName };
    const { id, name } = JSON.parse(localStorage.getItem("shogun-player")) || {};
    player.id = playerName && name === playerName ? id : uuidv4();
    const response = await createGame(player).catch(error => {
      setIsSubmitting(false);
      console.error("Something bad happend", { error, env: process.env });
      throw error;
    });

    setIsSubmitting(false);

    if (!!playerName && name !== playerName)
      localStorage.setItem("shogun-player", JSON.stringify({ id: uuidv4(), name: playerName }));
    history.push(`/lobby/${response.data.id}`);
  };
  return (
    <div>
      <Text fontSize='6xl' textAlign='center'>
        Katana
      </Text>
      <Flex align='center' justify='center'>
        <Box size='md'>
          <Image src={Samurai} alt='Samourai' />
        </Box>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <Flex align='center' justify='center'>
            <Box marginBottom='20px'>
              <Input
                name='name'
                defaultValue={player.name}
                isRequired
                width='230px'
                placeholder="C'est quoi ton petit nom ? "
                ref={register}
              />
            </Box>
          </Flex>
          <Flex align='center' justify='center'>
            <Box marginBottom='20px'>
              <Button variantColor='teal' type='submit' isLoading={isSubmitting}>
                Créer une partie{" "}
              </Button>
            </Box>
          </Flex>
        </FormControl>
      </form>
    </div>
  );
};

export default Home;
