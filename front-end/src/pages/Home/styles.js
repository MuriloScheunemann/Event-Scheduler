import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 368px 1fr;
  grid-template-rows: 65px 12rem 1fr;
  grid-template-areas: 
  "navbar navbar"
  "sidebar content"
  "sidebar content";
`

export const Content = styled.div`
  grid-area: content;
  padding: 3rem;
`

export const ContentCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
