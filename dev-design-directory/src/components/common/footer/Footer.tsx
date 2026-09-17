import styled from "styled-components";
import { FooterLeft } from "./FooterLeft";
import { FooterRight } from "./FooterRight";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    
`;

export const Footer = () => {
    return(
        <FooterContainer>
            <FooterLeft />
            <FooterRight />
        </FooterContainer>
    )
}