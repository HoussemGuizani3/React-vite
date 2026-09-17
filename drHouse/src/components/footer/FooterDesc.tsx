import logo from '../../images/logo.jpg';
import { Title } from '../shared/title/Title.tsx';
import styled from 'styled-components';

const DescTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Logo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`;

const DescContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 400px;
    gap: 24px;
`;

const Paragraph = styled.p`
    margin-left:8px;
    color: #4A7FA7;
`;
export const FooterDesc = () => {
    return (
        <DescContainer>
            <DescTitle>
                <Logo src={logo} title="logo" alt="Dr. House logo" />
                <Title text="DRH" size="24px" />
            </DescTitle>
            <Paragraph>
                Your trusted platform for finding the best real estate agents. 
                We connect clients with verified professionals to make 
                buying, selling, and renting properties effortless.
            </Paragraph>
        </DescContainer>
    );
}