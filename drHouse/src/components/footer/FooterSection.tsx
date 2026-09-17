import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;
export const FooterSection = () => {
    return(
        <FooterContainer>
            <FooterTop />
            <FooterBottom />
        </FooterContainer>
    );
}