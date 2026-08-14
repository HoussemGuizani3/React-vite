import styled from 'styled-components';
import { AboutContent } from './AboutContent';
import aboutImage from '../../images/img2.jpg';

const AboutSectionContainer = styled.div`
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
const AboutImg = styled.img`
    width: 50%;
    height: 440px;
    border-radius: 8px;
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;
export const AboutSection = () => {
    return (
        <AboutSectionContainer>
            <AboutImg src={aboutImage} title="About" alt="About Dr. House" />
            <AboutContent />
        </AboutSectionContainer>
    );
}