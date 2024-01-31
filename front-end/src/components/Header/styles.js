import styled from "styled-components"

export const Container = styled.nav`
    grid-area: navbar;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0px 0px 5px 0px grey;

`

export const Logo = styled.div`

`

export const LinksAndProfile = styled.div`
display: flex;
gap: 10rem;
`

export const NavLinks = styled.ul`
display: flex;
align-items: center;
gap: 4rem;
list-style: none;

> li {
    cursor: pointer;

}
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: .3rem;
    padding-right: 3rem;

    cursor: pointer;

    > img {
        width: 4rem;
    }
`