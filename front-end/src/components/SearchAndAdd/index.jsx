import { Container } from "./styles";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

export function SearchAndAdd({ ...rest }) {
  return (
    <Container>
      <div>
        <div className="allEvents">
          <h1>All Events</h1>
          <IoMdArrowDropdown />
        </div>
        <br />
        <input type="text" {...rest} />
      </div>

      <button>
        {" "}
        <FiPlus /> Add
      </button>
    </Container>
  );
}
