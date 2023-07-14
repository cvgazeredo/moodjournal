import { Header } from "../../components/Header";
import { HomeContainer, TextContainer } from "./styles";
import homeImage from '../../assets/homeImage.svg'



export function Home() {
    return(
        <div>
            <Header />
            <HomeContainer>
                <TextContainer>
                    <h1>Registre seu Humor e Aprimore seu Bem-estar</h1>
                    <h5>
                        Reserve diariamente um momento para pensar sobre seus sentimentos e emoções, como você está se sentindo. 
                    </h5>    
                    <h5>    
                        Selecione o humor que melhor te descreva e  identifique padrões de pensamento e variações de humor. Essa prática diária pode fornecer bons insights e contribuir para o seu bem-estar.
                    </h5>
                    <h5>
                    Essa prática diária pode fornecer bons insights e contribuir para o seu bem-estar.
                    </h5>
                </TextContainer>
                
                <img src={homeImage}></img>
            </HomeContainer>
        </div>
    )
}