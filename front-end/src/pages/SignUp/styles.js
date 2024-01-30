import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding-top: 10rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  position: relative;

  > img {
    max-width: 800px;
    position: absolute;
    top: -35rem;
    left: -18rem;
    object-fit: cover;
    z-index: 0;
  }
  `

export const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  box-shadow: 0px 0px 5px 0px grey;
  border-radius: 3%;
  max-width: 35%;
  margin: auto;
  padding: 5rem;
  z-index: 1;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
 

> h1 {
  font-family: 'Pacifico', cursive;
  font-size: 7rem;
  letter-spacing: 2px;
  margin-bottom: 3rem;
} 

> p {
  font-family: 'Nunito', sans-serif;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 3rem;
}

.blankSpace {
  height: 1rem;
}

.leftRow {
  display: inline-block;
  width: 45%;
  margin-right: 0.3rem;
}

.orText {
  display: inline-block;
  font-size: 1.5rem;
  font-family: 'Nunito', sans-serif;
}

.rightRow {
  display: inline-block;
  width: 45%;
  margin-left: 0.3rem;
}

.orLine {
  margin-bottom: .3rem;
}
`
