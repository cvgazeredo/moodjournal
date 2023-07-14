import styled from "styled-components";


export const TotalEntriesContainer = styled.h4`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
`

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: 2rem;

`

interface SummaryCardProps {
    isSelected?: boolean;
    variant?: 'Happy' | 'Normal' | 'Sad';
}

export const SummaryCard = styled.button<SummaryCardProps>`

     background: ${(props) =>
        props.isSelected
            ? (props.variant === 'Happy'
                ? props.theme['blue-100']
                : props.variant === 'Normal'
                    ? props.theme['yellow-100']
                    : props.theme['red-100'])
            : props.variant === 'Happy'
                ? props.theme['blue-100']
                : props.variant === 'Normal'
                    ? props.theme['yellow-100']
                    : props.theme['red-100']};

    &:not(:disabled) {
        background: ${(props) => (!props.isSelected ? props.theme['grey-100'] : '')};
    }
    
    border: 0;
    border-radius: 6px;
    padding: 2rem;

    cursor: pointer;
    transition: background-color 0.5s;


    

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${(props) => props.theme.black}
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 1.5rem;
        margin-top: 2rem;
    }


`



