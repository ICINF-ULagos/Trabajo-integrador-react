import { React } from "react";
import register from "../hooks/useUser";
import {
  Input,
  Button,
  VStack,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

const Register = () => {
  const handlerSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    const body = JSON.stringify(formValues);
    register(body);
    console.log(sessionStorage.getItem("name"));
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <Flex alignItems="center" justifyContent="center">
          <Box
            borderColor={"#4d5c7b"}
            borderRadius={"lg"}
            color="#242434"
            borderWidth="0.5px"
            borderStyle={"solid"}
            backgroundColor={"whitesmoke"}
            boxShadow={"dark-lg"}
            marginTop="10px"
          >
            <VStack spacing={"0.5rem"}>
              <Image
                src="https://apingweb.com/img/aping.png"
                rounded="1rem"
                borderRadius={"lg"}
                shadow="2xl"
              ></Image>
              <Input
                variant="outline"
                type="text"
                name="name"
                placeholder="John Doe"
                size="md"
              />
              <Input
                variant="outline"
                type="email"
                name="email"
                placeholder="john@doe.com"
                size="md"
              />
              <Input
                variant="outline"
                type="number"
                name="phone"
                placeholder="12345678"
                size="md"
              />
              <Input
                variant="outline"
                type="password"
                name="password"
                placeholder="*********"
                size="md"
              />
              <Input
                variant="outline"
                type="password"
                name="password-confirmation"
                placeholder="*********"
                size="md"
              />
              <Button
                bg="#f64315"
                color="white"
                type="submit"
                variant="hidden"
                size="lg"
              >
                Register!
              </Button>
            </VStack>
          </Box>
        </Flex>
      </form>
    </div>
  );
};

export default Register;
