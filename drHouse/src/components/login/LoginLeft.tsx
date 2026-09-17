import { NavBarLeft } from '../nav_bar/NavBarLeft.tsx';
import { TextMuted } from '../shared/title/TextMuted';
import { Title } from '../shared/title/Title';
import styled from 'styled-components';


const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding:24px;
    border-radius: 16px;
    width: 100%;
    max-width: 400px;
    height: 90vh;
    margin:16px;
    background: radial-gradient(circle at 10% 20%, #4c11db 0%, transparent 40%),
                radial-gradient(circle at 90% 10%, #7d1ce5 0%, transparent 50%),
                radial-gradient(circle at 20% 90%, #d42ddf 0%, transparent 40%),
                radial-gradient(circle at 80% 90%, #00b4ff 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, #6e00e0 0%, transparent 70%);
    background-color: #31078a;

`
const LoginLeftBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;
`;
export const LoginLeft = () => {
    return (
        <Left>
            <NavBarLeft customJustify="flex-start" color='#ffffff'/>
            <LoginLeftBottom>
                <TextMuted text="BE ON THE WAVE" color='#ffffff' />
                <Title text="Login to your personal account to access all features." size="32px" color='#ffffff'/>
            </LoginLeftBottom>
        </Left>
    );
}