import styled from "styled-components";

export const MoodHistoryContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;


`

export const MoodHistoryTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    th {
        padding: 1.25rem 2rem;
        background: ${(props) => props.theme["green-100"]};
    }

`;

interface MoodColorProps {
    variant: 'Happy' | 'Normal' | 'Sad';
}

export const MoodColorTableTd = styled.td<MoodColorProps>`
    padding: 1.25rem 2rem;
    background: ${(props) => props.variant === 'Happy' ? props.theme["blue-100"]
        : props.variant === 'Normal' ? props.theme["yellow-100"]
            : props.theme["red-100"]};
    

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;

    }

    &:last-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    span {
        display: block;
        margin-top: 1rem;
        font-size: 1.5rem;
        margin-top: 2rem;
    }

`
