import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`

export const FormCreateEvent = styled.form`
      background-color: ${({ theme }) => theme.COLORS.WHITE};

      margin: auto;
      margin-top: 3rem;
      width: 50%;

      font-family: 'Nunito', sans-serif;
      border-radius: 2rem;


      > h1 {
        text-align: center;
        padding-block: 1rem;
      }

      p {
        font-size: 1.5rem;
        font-weight: bold;
      }

      hr {
        width: 95%;
        margin-left: 2.5%;
      }

      > section {
        display: grid;
        grid-template-columns: 1fr 1fr;      
        
      }

      .formColumn {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
      }

      .dateTimeContainer {
        display: flex;
        gap: 1rem;
        
      }

      .buttonsContainer {
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 1rem;
      }

`

export const TextArea = styled.textarea`
    width: 100%;
    height: 12rem;
    border-radius: 0.9rem;
    background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_100};
    border: 0;

    font-family: 'Nunito', sans-serif;
    padding: 5px;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.5rem;

`

export const InputDate = styled.input`
  flex-grow: 0.7;

    height: 4.5rem;
    border-radius: 0.9rem;
    background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_100};
    border: 0;

    font-family: 'Nunito', sans-serif;
    padding: 5px;
    font-size: 1.4rem;
    font-weight: 500;
`
export const InputTime = styled.input`
  flex-grow: 0.3;

   height: 4.5rem;
    border-radius: 0.9rem;
    background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_100};
    border: 0;

    font-family: 'Nunito', sans-serif;
    padding: 5px;
    font-size: 1.4rem;
    font-weight: 500;
`

