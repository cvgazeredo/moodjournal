import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);



`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${(props) => props.theme["green-100"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        h4 {
            color: ${(props) => props.theme.black};
        }

        textarea {
            border-radius: 6px;
            border: 0;
            background: ${(props) => props.theme.white};
            color: ${(props) => props.theme.black};
            padding: 2rem;

            &::placeholder {
                text-align: left;
                color: ${(props) => props.theme["grey-500"]};
            }
        }
    }

    button[type="submit"] {
        height: 50px;
        border: 0;
        background: ${(props) => props.theme["green-500"]};
        color: ${(props) => props.theme["grey-100"]};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;

        cursor: pointer;
        

        &:hover {
            background: ${(props) => props.theme["green-700"]};
            transition: background-color 0.2s;
        }
    }
    
`

export const Title = styled(Dialog.Title)`
    text-align: center;
    margin: 50;
    font-size: 30px;
    line-height: 1.5;


`

export const Description = styled(Dialog.Description)`
    margin: 10px 0 20px;
    font-size: 20px;
    line-height: 1.5;

`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;

    color: ${(props) => props.theme.black};

`

export const SelectMoodContainer = styled(RadioGroup.Root)`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 1rem;
   margin-top: 0.5rem;
   
`

interface MoodButtonProps {
    variant: 'Happy' | 'Normal' | 'Sad';
}

export const MoodButton = styled(RadioGroup.Item) <MoodButtonProps>`
    background: ${(props) => props.theme["grey-100"]};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0; 
    color: ${(props) => props.theme.black};

    &:hover {
        background: ${(props) => props.theme["grey-100"]};
    }

    &[data-state='unchecked']:hover {
        transition: backgroud-color 0.2s;
        background: ${(props) => props.theme["grey-500"]};
    }

    &[data-state='checked'] {
        background: ${(props) => props.variant === 'Happy' ? props.theme["blue-100"]
        : props.variant === 'Normal' ? props.theme["yellow-100"]
            : props.theme["red-100"]};
    }

`
