import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { AuthButton } from "../../components/AuthButton";
import circleSVG from '../../assets/circle.svg'

export function SignIn() {
  return (
    <Container>
        <img src={circleSVG} alt="" />
      <Form>
        <h1>Bookio</h1>
        <p>Username</p>
        <Input />
        <p>Password</p>
        <Input />

        <div className="blankSpace"></div>
        <AuthButton title="Sign In" />
        <div className="orLine">
          <hr className="leftRow"/>
          <p className="orText">or</p>
          <hr className="rightRow"/>
        </div>
        <AuthButton title="Create an Account" />
      </Form>
    </Container>
  );
}
