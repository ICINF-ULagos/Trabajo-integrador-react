import axios from 'axios';
import { React } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import {
    Input,
    Button, VStack,
    Box, Flex,
    Image, Text
} from '@chakra-ui/react'

function Register() {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const {Register} = useUser();

    const handlerSubmit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData(event.target);
            const formValues = Object.fromEntries(formData);
            const body = JSON.stringify(formValues)
            const response = await Register(body);
            // const response = await axios.post("https://apingweb.com/api/Register", body, headers)
            const responseBody = response.status ? response.data : response.statusText;
            console.log(responseBody.result)

            if (response.status) {
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
                        boxSize={"900px,1500px"} borderColor={"#4d5c7b"}
                        borderRadius={"lg"} color="#242434" px="0.5" borderWidth="0.5px" borderStyle={"solid"}
                        paddingTop={"20px"}
                        backgroundColor={"whitesmoke"}
                        boxShadow={"dark-lg"}
                    >
                        <VStack
                            spacing={"48px"}
                        >
                            <Image src="https://apingweb.com/img/aping.png" size="100%" rounded="1rem" borderRadius={"lg"} shadow="2xl"></Image>
                            <Text fontSize="lg"><b>Register</b></Text>
                            <Input width="600px" variant='outline' type="text" name="name" placeholder="Name" size="lg" />
                            <Input width="600px" variant='outline' type="email" name="email" placeholder="Email" size="lg" />
                            <Input width="600px" variant='outline' type="number" name="phone" placeholder="Phone" size="lg" />
                            <Input width="600px" variant='outline' type="password" name="password" placeholder="Password" size="lg" />
                            <Input width="600px" variant='outline' type="password" name="password-confirmation" placeholder="Confirm password" size="lg" />
                            <Button width="600px" bg='#f64315' color='white' type='submit' variant='hidden' size="lg" alignItems="center">Submit</Button>
                        </VStack>
                    </Box>
                </Flex>

            </form>

            {message && <p>{message}</p>}
        </div>
    )
}

export default Register;