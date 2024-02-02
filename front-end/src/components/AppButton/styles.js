import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_300};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 3rem;
  border: 0;
  padding: 0 3rem;
  border-radius: 0.9rem;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;

  cursor: pointer;
  &:hover{
    background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_300_HOVER};

  }

`