import { HeroContent } from './HeroContent';
import { styled } from 'styled-components';
import heroImage from '../../images/img1.jpg';

const HeroSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 32px;
    gap:80px;
    margin-top: 32px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
        padding: 16px;
    }
`;
const HeroImage = styled.img`
    width: 50%;
    height: 440px;
    border-radius: 8px;
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;
export const HeroSection = () => {
    return (
        <HeroSectionContainer>
            <HeroContent />
            <HeroImage src={heroImage} title="hero" alt="Find your dream home" />
        </HeroSectionContainer>
    );
}