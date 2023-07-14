import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${(props) => props.theme.white};
    padding: 2.5rem 0 5rem;

    nav {
        display: flex;
        gap: 1rem;

        a {
        text-decoration: none;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props) => props.theme.black};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover {
            border-bottom: 3px solid ${(props) => props.theme['green-500']};
        }

        &.active {
            color: ${(props) => props.theme['green-500']};
        }

        
    }
}
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const ButtonTrackMyMoodModal = styled.button`
    height: 50px;
    border: 0;
    background: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};

    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 100px;

    cursor: pointer;

    transition: background-color 0.5s;

    &:hover {
        background: ${(props) => props.theme["green-700"]};
    }


`

