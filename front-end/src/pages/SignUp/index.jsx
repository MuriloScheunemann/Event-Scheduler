import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { AuthButton } from "../../components/AuthButton";
import circleSVG from '../../assets/circle.svg'

export function SignUp() {
  return (
    <Container>
        <img src={circleSVG} alt="" />
      <Form>
        <h1>Bookio</h1>
        <p>E-mail</p>
        <Input />
        <p>Username</p>
        <Input />
        <p>Password</p>
        <Input />
        <p>Retype password</p>
        <Input />

        <div className="blankSpace"></div>

        <AuthButton title="Create your Account" />
      </Form>
    </Container>
  );
}
