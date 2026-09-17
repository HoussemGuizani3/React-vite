import styled from 'styled-components';
import { FooterDesc } from "./FooterDesc.tsx";
import { FooterLinks } from "./FooterLinks.tsx";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    gap: 150px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
    }
`;
export const FooterTop = () => {
    return (
        <FooterContainer>
            <FooterDesc />
            <FooterLinks />
        </FooterContainer>
    );
}