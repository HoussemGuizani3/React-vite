import { NavLinks } from './NavLinks.tsx';
import { PrimaryButton } from '../shared/button/PrimaryButton.tsx';
import { SecondaryButton } from '../shared/button/SecondaryButton.tsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap:16px;
    margin-right: 40px;
    
`;

export const NavBarRight = () => {
  return (
    <Right>
      <NavLinks />

      <Link to="/register">
        <SecondaryButton text="Register" />
      </Link>
      <Link to="/login">
        <PrimaryButton text="Login" />
      </Link>

    </Right>


  );
}