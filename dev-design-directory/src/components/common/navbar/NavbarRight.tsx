import styled from "styled-components";
import { Link } from "react-router-dom";
import { DataLinks } from "../../shared/data/DataLinks";

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
    display: inline-block;
    cursor: pointer;
    font-weight: 100;
    font-size: 14px;
    font-family: 'Inter', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    a {
        color: #1E293B;
        text-decoration: none;
        
        &:hover {
            color: #0d9488;
        }
    }
`;

const LinksData = DataLinks.navLinks || [];

export const NavbarRight = () => {
    return (
        <NavList>
            {LinksData.map(link => (
                <Item key={link.id}>
                    <Link to={link.path}>{link.name}</Link>
                </Item>
            ))}
        </NavList>
    );
};