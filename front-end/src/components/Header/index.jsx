import { Container, Logo, NavLinks, Profile, LinksAndProfile } from "./styles";
import { IoMdArrowDropdown } from "react-icons/io";
import logoSVG from "../../assets/logo.svg";
import avatarPlaceholder from '../../assets/avatar_placeholder.png'

export function Header() {
  return (
    <Container>
      <Logo>
        <img src={logoSVG} alt="Brand logo" />
      </Logo>
      <LinksAndProfile>
        <NavLinks>
          <li>
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>Calendar
          </li>
          <li>
            <a href="#"></a>Settings
          </li>
        </NavLinks>
        <Profile>
            <img src={avatarPlaceholder} alt="" />
            <span>Murilo</span>
            <IoMdArrowDropdown />


        </Profile>
      </LinksAndProfile>
    </Container>
  );
}
