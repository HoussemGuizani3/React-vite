import styled from 'styled-components';
import { TextMuted } from "../shared/title/TextMuted.tsx";
import { DataLinks } from '../shared/navigation/DataLinks.tsx'

const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px;
    
`;
const SocialProvider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:8px;
`;
 const SocialProviderIcon = styled.span`
    cursor: pointer;
    `;

export const FooterBottom = () => {
    const SocialData = DataLinks.socialProviders || [];
    const handleSocialURL = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    }

    const filterSocialProviders = (item) => {
        const allowed = ['FacebookSquare', 'Instagram', 'Twitter', 'Linkedin'];
        return allowed.includes(item.name);
    };
    return (
        <BottomContainer>
            <TextMuted text="2026 DRH, HoussemGuizani" color="#4A7FA7" />
            <SocialProvider>
                {SocialData.filter(filterSocialProviders).map((item) => (
                    <SocialProviderIcon key={item.id} onClick={() => handleSocialURL(item.url)}>
                        {item.icon}
                    </SocialProviderIcon>
                ))}
            </SocialProvider>
        </BottomContainer>
    );
}