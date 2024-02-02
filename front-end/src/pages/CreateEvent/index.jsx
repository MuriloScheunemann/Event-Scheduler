import { Header } from "../../components/Header";
import {
  Container,
  FormCreateEvent,
  TextArea,
  InputDate,
  InputTime,
} from "./styles";
import { Input } from "../../components/Input";
import { AppButton } from "../../components/AppButton";
import { Calendar } from "../../components/Calendar";

export function CreateEvent() {
  return (
    <Container>
      <Header />
      <FormCreateEvent>
        <h1>Create New Event</h1>
        <hr />
        <section>
          <div className="formColumn">
            <p>Event Title*</p>
            <Input />
            <p>Location*</p>
            <Input />
            <p>Date and Time*</p>
            <div className="dateTimeContainer">
              <InputDate type="date" />
              <InputTime type="time" />
            </div>

            <Calendar/>
          </div>
          <div className="formColumn">
            <p>Description</p>
            <TextArea />
          </div>
        </section>
        <hr />

        <div className="buttonsContainer">
          <AppButton title="save" />
          <AppButton title="cancel" />
        </div>
      </FormCreateEvent>
    </Container>
  );
}
