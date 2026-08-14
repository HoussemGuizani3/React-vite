import styled from 'styled-components';
import { ResidenceCard } from './ResidenceCard.tsx';
import { Title } from '../shared/title/Title.tsx';

const ResSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap:32px;
    margin-top: 32px;
    padding-left: 200px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding-left: 16px;
    }
`;
const ResidenceContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap:16px;
    width:90%;
    margin-top:16px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const ResidenceSection = () => {
    return (
        <ResSection>
            <Title text="Popular Residents" color="#4A7FA7" size="40px"  marginLeft="30px" />
            <ResidenceContent>
                <ResidenceCard />
            </ResidenceContent>
        </ResSection>
    );
}