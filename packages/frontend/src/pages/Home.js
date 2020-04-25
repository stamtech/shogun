import React, { useState } from "react";
import { FormControl, Image, Flex, Button, Input, Box } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import Samurai from "../img/samurai.jpg";
import { useHistory } from "react-router-dom";
const Home = () => {
  const name = localStorage.getItem("name");
  const { register, handleSubmit, errors } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const onSubmit = ({ name }) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(name);
      setIsSubmitting(false);
      localStorage.setItem("name", name);
      history.push("/lobby/22");
    }, 1000);
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
