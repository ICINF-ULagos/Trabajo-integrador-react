import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

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
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button>Enviar</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    )
}

export default Login;
