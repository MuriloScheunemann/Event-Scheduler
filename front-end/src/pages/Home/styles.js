import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 368px auto;
  grid-template-rows: 65px auto;
  grid-template-areas: 
  "nav nav"
  "menu content";
`
