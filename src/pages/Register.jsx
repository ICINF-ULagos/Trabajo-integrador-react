import { React } from "react";
import { register } from "../../hooks/useUser";
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
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Box
            boxSize={"900px,1500px"}
            borderColor={"#4d5c7b"}
            borderRadius={"lg"}
            color="#242434"
            px="0.5"
            borderWidth="0.5px"
            borderStyle={"solid"}
            paddingTop={"20px"}
            backgroundColor={"whitesmoke"}
            boxShadow={"dark-lg"}
          >
            <VStack spacing={"48px"}>
              <Image
                src="https://apingweb.com/img/aping.png"
                size="100%"
                rounded="1rem"
                borderRadius={"lg"}
                shadow="2xl"
              ></Image>
              <Text fontSize="lg">
                <b>Register</b>
              </Text>
              <Input
                width="600px"
                variant="outline"
                type="text"
                name="name"
                placeholder="Name"
                size="lg"
              />
              <Input
                width="600px"
                variant="outline"
                type="email"
                name="email"
                placeholder="Email"
                size="lg"
              />
              <Input
                width="600px"
                variant="outline"
                type="number"
                name="phone"
                placeholder="Phone"
                size="lg"
              />
              <Input
                width="600px"
                variant="outline"
                type="password"
                name="password"
                placeholder="Password"
                size="lg"
              />
              <Input
                width="600px"
                variant="outline"
                type="password"
                name="password-confirmation"
                placeholder="Confirm password"
                size="lg"
              />
              <Button
                width="600px"
                bg="#f64315"
                color="white"
                type="submit"
                variant="hidden"
                size="lg"
                alignItems="center"
              >
                Submit
              </Button>
            </VStack>
          </Box>
        </Flex>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
