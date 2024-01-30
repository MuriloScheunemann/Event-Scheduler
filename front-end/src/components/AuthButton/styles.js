import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_300};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 4.5rem;
  border: 0;
  padding: 0 16px;
  border-radius: 0.9rem;

  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  letter-spacing: .05rem;

  cursor: pointer;
  &:hover{
    background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_300_HOVER};

  }
`;
