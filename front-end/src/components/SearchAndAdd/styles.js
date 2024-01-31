import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-area: content1;
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: "Nunito", sans-serif;

  padding-block: 2rem;

  > h1 {
    margin-right: 0.6rem;
    font-size: 2.2rem;
  }

  .allEvents {
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 4rem;
    border-radius: 0.9rem;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;
    box-shadow: 0px 0px 3px 0px grey;

    font-family: "Nunito", sans-serif;
    padding-left: 7px;
    padding-right: 5rem;
    font-size: 1.6rem;
    font-weight: 500;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY}
    }
  }

  > button {
    display: flex;
    align-items: center;
    gap: .8rem;

    height: 4rem;
    border: 0;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem;
    padding-inline: 3rem;
    border-radius: 0.9rem;

    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;

    box-shadow: 0px 0px 3px 0px grey;
    cursor: pointer;

  }
`;
