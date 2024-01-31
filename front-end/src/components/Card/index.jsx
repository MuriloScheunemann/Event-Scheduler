import { Container } from "./styles";
import TESTE from "../../assets/logo.svg";

export function Card() {
  return (
    <Container>
      <div className="card">
        <div className="head">
          <img src={TESTE} alt="" />
          <div>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
          </div>
        </div>

        <div className="body">
          <p>Descrição do evento Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nam sunt illum eveniet facilis, pariatur minima dolorem accusamus laborum earum, sapiente repudiandae officiis! Consequuntur quidem dignissimos nemo debitis</p>
          <hr />
        </div>

        <div className="buttons">
          <button>View Details</button>
          <button>Share</button>
        </div>
      </div>
    </Container>
  );
}
