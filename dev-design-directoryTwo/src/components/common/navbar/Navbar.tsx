import styled from "styled-components";
import { NavbarLeft } from "./NavbarLeft";
import { NavbarRight } from "./NavbarRight";

const NavbarContainer = styled.div<{
    $width?: string;
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #dfe1e2;
    width: ${props => props.$width || '90%'};
    padding: 8px 80px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;

`;
interface props {
    width?: string;
}
export const Navbar: React.FC<props> = ({ width}) => {
    return(
        <NavbarContainer $width={width}>
            <NavbarLeft />  
            <NavbarRight />  
        </NavbarContainer>
    );
}