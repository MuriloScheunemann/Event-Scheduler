import styled from "styled-components"

export const Container = styled.div`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    padding: 2rem;
    font-family: 'Nunito', sans-serif;

    background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_200};

    > h2 {
        font-size: 2rem;

    }
`



