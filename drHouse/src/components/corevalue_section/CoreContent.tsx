import { Title } from '../shared/title/Title';
import { ContentData } from '../shared/navigation/ContentData';
import styled from 'styled-components';


const CoreValueContainer = styled.div`
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
export const CoreContent = () => {
    const CoreValuesData = ContentData.coreValuesSection[0];

    return (
        <CoreValueContainer>
            <Title text={CoreValuesData ? CoreValuesData.title : "error"} color="#4A7FA7" size="40px" />
            <Paragraph>{CoreValuesData ? CoreValuesData.description : "error"}</Paragraph>
        </CoreValueContainer>

    );
}