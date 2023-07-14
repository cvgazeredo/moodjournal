import styled from "styled-components";

export const HomeContainer = styled.div`
    /* width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;

    margin-top: 2rem;
    position: relative; */
    display: flex;
    
    justify-content: space-between;
    

    width: 100%;
    max-width: 1120px;
    margin: 1rem auto 0;
    padding: 0 1.5rem;


    img {
        max-width: 70%;
        height: auto;
        
    }
`;

export const TextContainer = styled.div`
    
    flex-direction: column;
    align-items: center;
    

    h1 {
        margin: 0;
        font-size: 28px;
        text-align: left;
    }

    h5 {
        margin: 20px 0 0;
        font-size: 16px;
        text-align: left;
        font-weight: normal;
}
`

