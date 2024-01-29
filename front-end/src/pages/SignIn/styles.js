import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  `

export const Form = styled.form`
  text-align: center;
  border: 2px solid #000;
  max-width: 40%;
  margin: auto;
  padding: 4rem;



> h1 {
  font-family: 'Pacifico', cursive;
  font-size: 5rem;
  letter-spacing: 2px;
}
`