import styled from 'styled-components';
import { CoreContent } from './CoreContent.tsx';
import coreImage from '../../images/img3.jpg';


const CoreSectionContainer = styled.div`
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
const CoreImg = styled.img`
    width: 50%;
    height: 440px;
    border-radius: 8px;
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;
export const CoreSection =() => {
    return(
        <CoreSectionContainer>
            <CoreContent />
            <CoreImg src={coreImage} title="Core Value" alt="Core values illustration" />
        </CoreSectionContainer>
    );
}