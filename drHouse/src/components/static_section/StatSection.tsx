import { styled } from 'styled-components';
import { CardStatSection } from './CardStatSection';

const StatView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const StatSection = () => {

    return (
        <StatView>
            <CardStatSection />
        </StatView>
    );
}