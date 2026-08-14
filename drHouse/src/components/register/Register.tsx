import { RegisterLeft } from './RegisterLeft.tsx';
import { RegisterRight } from './RegisterRight.tsx'
import styled from 'styled-components';

const PageRegister = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    `;

export const Register = () => {
    return(
        <PageRegister>
            <RegisterLeft />
            <RegisterRight />
        </PageRegister>
        
    );
}