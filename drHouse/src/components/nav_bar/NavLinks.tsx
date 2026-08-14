import { useState } from 'react';
import { DataLinks } from '../shared/navigation/DataLinks';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const List = styled.li<{ $isActive: boolean }>`
  display: inline-block;
  cursor: pointer;
  padding: 6px 0;
  position: relative;
  font-weight: 500;
  color: ${props => (props.$isActive ? '#007bff' : '#4a4a4a')};
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => (props.$isActive ? '100%' : '0%')};
    height: 2px;
    background-color: #007bff;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #007bff;
    &::after {
      width: 100%;
    }
  }
`;

export const NavLinks = () => {
  const LinksData = DataLinks.navLinks || [];
  
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleScroll = (id: string): void => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <NavList>
      {LinksData.map(link => (
        <List
          key={link.id}
          $isActive={activeLink === link.path}
          onClick={() => handleScroll(link.path)}
        >
          {link.name}
        </List>
      ))}
    </NavList>
  );
};