import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { AuthButton } from "../../components/AuthButton";

export function SignIn(){


    
    return (
        <Container>
            <Form>

            <h1>Bookio</h1>
            <p>Username</p>
            <Input/>
            <p>Password</p>
            <Input/>

            <AuthButton title="Sign Up"/>


            </Form>
        </Container>
    );
}