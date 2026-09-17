import { NavBarLeft } from './NavBarLeft.tsx';
import { NavBarRight } from './NavBarRight.tsx';
import styled from 'styled-components';

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:3000;
`;
export const NavBar = () => {
    return (
        <NavBarContainer>
            <NavBarLeft customJustify='flex-start'  />
            <NavBarRight />
        </NavBarContainer>
    );
}