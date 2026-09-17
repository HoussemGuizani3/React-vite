import styled from 'styled-components';
import { Title } from '../shared/title/Title.tsx';
import { PrimaryButton } from '../shared/button/PrimaryButton.tsx';
import { ContentData } from '../shared/navigation/ContentData.tsx'

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    gap: 16px;
    margin-top: 32px;
    width: 100%;
    max-width: 400px;
`;
const Paragraph = styled.p`
    font-size: 16px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 16px;
    text-align: start;
`;
export const AboutContent = () => {
        const AboutData = ContentData.aboutSection[0];

    return (
        <AboutContainer>
            <Title text={AboutData ? AboutData.title : "error"} color="#4A7FA7" size="40px"/>
            <Paragraph>{AboutData ? AboutData.description : "error"}</Paragraph>
            <PrimaryButton text="See More" />
        </AboutContainer>
    );
}
