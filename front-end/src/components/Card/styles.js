import styled from "styled-components";

export const Container = styled.div`

  .card {
    width: 40rem;
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-radius: 1.4rem;
    border: 1px solid black;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 0px 0px 2px 0px grey;


    font-family: 'Nunito', sans-serif;
  }


  .head {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .buttons {
    display: flex;
    gap: 2rem;
  }

  button {
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BLACK};

  height: 4.5rem;
  border: 1px solid;
  padding: 0rem 2rem;
  border-radius: 0.9rem;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  letter-spacing: .04rem;

    cursor: pointer;
  }
`;

