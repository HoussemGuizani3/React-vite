
import logo from '../../images/logo.jpg';
import {Title} from '../shared/title/Title.tsx';
import styled from 'styled-components';

const Left = styled.div<{ $justify?: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.$justify || 'flex-start'};
`;
const Logo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

interface Props {
    customJustify: string;
    color: string ;
}
/*
export const NavBarLeft = ({customJustify, color}: {customJustify: string | undefined; color?: string }) => {
 */ 
export const NavBarLeft: React.FunctionComponent<Props> = ({color, customJustify}) => {
return (
    <Left $justify={customJustify}>
        <Logo src={logo} title="logo" alt="Dr. House logo" />
        <Title text="Dr. House" size="24px" color={color}/>
    </Left>
  );
}