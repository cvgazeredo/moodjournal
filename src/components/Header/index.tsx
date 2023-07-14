import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from '../../assets/logo.svg'


import { NavLink } from "react-router-dom";
import { TrackMyMoodModal } from "../TrackMyMoodModal";


export function Header() {
    
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/history">Histórico</NavLink>
                    <NavLink to="/statistic">Estatística</NavLink>
                </nav>
                <TrackMyMoodModal />
            </HeaderContent>
        </HeaderContainer>
    )
}