import styled from 'styled-components';
import { Title } from '../shared/title/Title.tsx';
import { PrimaryButton } from '../shared/button/PrimaryButton.tsx';
import { ContentData } from '../shared/navigation/ContentData.tsx';


const HeroContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 16px;
    margin-top: 32px;
    width: 100%;
    max-width: 480px;
`;
const Paragraph = styled.p`
    font-size: 16px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 16px;
    text-align:start;
`;  
export const HeroContent = () => {
    const homeData = ContentData.heroSection[0];

    return (
        <HeroContentContainer>
            <Title text={homeData ? homeData.title : "error"} size="40px"/>
            <Paragraph>{homeData ? homeData.description : "error"}</Paragraph>
            <PrimaryButton text="Get Started"/>
        </HeroContentContainer>
    );
} 