import { Title } from '../shared/title/Title.tsx';
import { SecondaryButton } from '../shared/button/SecondaryButton.tsx';
import styled from 'styled-components';

const CtaContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 32px;
        background-color: #0A4174;
        border-radius: 16px; 
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
        width: 100%;
        max-width: 1000px;

    `;
const CTA = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Paragraphe = styled.div`
    color: white;
`;
export const CallToAction = () => {
    return (
        <CTA>
        <CtaContainer>
            <Title text="Find Your Perfect Agent Today" color="white" size="32px"/>
            <Paragraphe>Join thousands of clients who found their ideal property agent through DRH. 
                Our platform connects you with verified, top-rated agents in your area — 
                saving you time, money, and stress. Whether you're buying, selling, or renting, 
                we make the process seamless from start to finish.
            </Paragraphe>
            <SecondaryButton text="Get Started" />
        </CtaContainer>
        </CTA>
    );
}