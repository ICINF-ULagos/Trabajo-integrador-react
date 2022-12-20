import axios from 'axios';
import { React } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    InputGroup, Input,
    Button, VStack,
    Box, StackDivider,
    Center, Flex,
    Image, Text,
    InputRightElement
} from '@chakra-ui/react'

function Login() {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const PaswordInput = () => {
        const [show, setShow] = useState(false)
        const handleClick = () => setShow(!show)

        return (
            <InputGroup size='md'>
                <Flex>
                    <Input
                        position="absolute"
                        top="-35px"
                        right="43px"
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        size="lg"
                        width="600px"
                    />
                    <InputRightElement width='3.5rem'>
                        <Button h='3.09rem' size='lg' onClick={handleClick}
                            name="password"
                            position="absolute"
                            top="-36px"
                            left="-82px"
                            bg="#bec2c8">
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </Flex>
            </InputGroup>
        )
    }

    const handlerSubmit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData(event.target);
            const formValues = Object.fromEntries(formData);

            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            const body = JSON.stringify(formValues)

            const response = await axios.post("https://apingweb.com/api/login", body, headers)
            const responseBody = response.status ? response.data : response.statusText;
            console.log(responseBody.result)

            if (response.status) {
                sessionStorage.setItem("email", responseBody.result.email);
                sessionStorage.setItem("token", responseBody.token);
                setMessage(null)
                navigate('/')
            } else {
                setMessage(responseBody.errors)
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>

                <Flex height="100vh" alignItems="center" justifyContent="center">
                    <Box
                        boxSize={"700px"} borderColor={"#4d5c7b"}
                        borderRadius={"lg"} color="#242434" px="0.5" borderWidth="0.5px" borderStyle={"solid"}
                        paddingTop={"20px"}
                        backgroundColor={"whitesmoke"}
                        boxShadow={"dark-lg"}
                    >
                        <VStack
                            spacing={"48px"}
                        >
                            <Image src="https://apingweb.com/img/aping.png" size="100%" rounded="1rem" borderRadius={"lg"} shadow="2xl"></Image>
                            <Text fontSize="lg"><b>Sign In</b></Text>
                            <Input width="600px" variant='outline' type="email" name="email" placeholder="Email" size="lg" />
                            <PaswordInput />
                            <Button width="600px" bg='#f64315' variant='hidden' size="lg" alignItems="center">Ingresar</Button>
                        </VStack>
                    </Box>
                </Flex>

            </form>

            {message && <p>{message}</p>}
        </div>
    )
}

export default Login;
