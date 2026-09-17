import styled from "styled-components";
import { Title } from "../../shared/title/Title";

const NavbarLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;    
`;
export const NavbarLeft = () => {
    return(
        <NavbarLeftContainer>
            <Title text='DEV/DES' color='#4DB6AC' size='16px' fontweight='900'/>
            <Title text='DIRECTORY' color='#1E293B' size='16px'/>
        </NavbarLeftContainer>  
    );
}