import { React } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputGroup,
  Input,
  Button,
  VStack,
  Box,
  Flex,
  Image,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import useUser from "../hooks/useUser";

function Login() {
  const [message, setMessage] = useState(null);
  const { login } = useUser();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
    const navigate = useNavigate();

  const handlerSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);
      const formValues = Object.fromEntries(formData);

      const result = await login(formValues);
      navigate('/user/timeline')
    } catch (error) {
      console.error(error.message);
      setMessage(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <Flex alignItems="center" justifyContent="center">
          <Box
            width={"625px"}
            height={"660px"}
            borderColor={"#4d5c7b"}
            borderRadius={"lg"}
            color="#242434"
            paddingTop={"15px"}
            backgroundColor={"whitesmoke"}
            boxShadow={"dark-lg"}
            marginTop={"15px"}
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
                <b>Sign In</b>
              </Text>
              <Input
                width="600px"
                variant="outline"
                type="email"
                name="email"
                placeholder="Email"
                size="lg"
              />
              <InputGroup size="md">
                <Flex>
                  <Input
                    position="absolute"
                    top="-35px"
                    right="13px"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    size="lg"
                    width="600px"
                    name="password"
                  />
                  <InputRightElement width="3.5rem">
                    <Button
                      h="3.19rem"
                      size="lg"
                      onClick={handleClick}
                      position="absolute"
                      top="-36px"
                      left="-52px"
                      bg="#bec2c8"
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </Flex>
              </InputGroup>
              <Button
                type="submit"
                fontSize="lg"
                width="600px"
                bg="#f64315"
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
}

export default Login;
