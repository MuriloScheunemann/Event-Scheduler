import { Container, Content, ContentCards } from "./styles";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SearchAndAdd } from "../../components/SearchAndAdd";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />

      <Sidebar />
      
      <Content>
        <SearchAndAdd placeholder="search" />
        <ContentCards>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </ContentCards>
      </Content>


   
    </Container>
  );
}
