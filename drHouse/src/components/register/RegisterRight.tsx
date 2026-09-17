import { Title } from '../shared/title/Title';
import { TextMuted } from '../shared/title/TextMuted';
import { MyFormRegister } from './MyFormRegister';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DataLinks, type SocialItem } from '../shared/navigation/DataLinks';

const Formulaire = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 500px;
    margin-top: 16px;
    margin-bottom: 16px;
`;

const AuthSwitch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Button = styled.button`
    background-color: #dcd6d6;
    width: 100%;
    max-width: 100px;
    height: 30px;
    border-radius: 32px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AuthSwitchText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
`;

const AuthLink = styled(Link)`
    font-size: 14px;
    color: blue; 
    cursor: pointer;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const RegisterRight = () => {
    const SocialData: SocialItem[] = DataLinks.socialProviders || [];
    
    const handleSocialURL = (url: string) => {
        if (url) {
            window.open(url, '_blank');
        }      
    };

    const filterSocialProviders = (item: SocialItem) => {
        const allowed = ['Google', 'Facebook', 'Tiktok'];
        return allowed.includes(item.name);
    };

    return (
        <Formulaire>
            <Title text="Create an account" size='40px' weight='800' />
            <TextMuted text="Get full access to the Dr.House configuration" size='16px' color='#666666' />
            <MyFormRegister />
            <AuthSwitch>
                {SocialData.filter(filterSocialProviders).map((item) => (
                    <Button type='button' key={item.id} onClick={() => handleSocialURL(item.url)}>
                        {item.icon}
                    </Button>
                ))}
            </AuthSwitch>
            <AuthSwitchText>
                <TextMuted text="Already have an account?" size="16px" color="#666666" margin="0" />
                <AuthLink to="/login">Sign in</AuthLink>
            </AuthSwitchText>
        </Formulaire>
    );
};