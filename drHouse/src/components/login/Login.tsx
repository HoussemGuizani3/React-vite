import { LoginLeft } from './LoginLeft.js';
import { LoginRight } from './LoginRight.js';

import styled from 'styled-components';

const PageLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;



export const Login = () => {
    return (
        <PageLogin>
            <LoginLeft />
            <LoginRight />
        </PageLogin>

    );
}