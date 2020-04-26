import React, { useState } from "react";
import { Text, FormControl, Image, Flex, Button, Input, Box, useToast } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import Samurai from "../img/samurai.jpg";
import { useHistory } from "react-router-dom";
import { createGame } from "../service";
const Home = () => {
  const name = localStorage.getItem("shogun-name");
  const { register, handleSubmit, errors } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const onSubmit = async ({ name }) => {
    setIsSubmitting(true);
    const response = await createGame(name).catch(error => {
      setIsSubmitting(false);
      console.error("Something bad happend", { error, env: process.env });
      throw error;
    });

    setIsSubmitting(false);
    localStorage.setItem("shogun-name", name);
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
                defaultValue={name}
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
