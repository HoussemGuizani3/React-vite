import { DataLinks } from '../shared/navigation/DataLinks.tsx';
import styled from 'styled-components';
import { Title } from '../shared/title/Title.tsx';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const Column = styled.div`
    display:flex;
    flex-direction: column;
    gap: 60px;
    width: 100%;
    
`;
const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const LinkItem = styled.li`
    margin-bottom:20px;
    margin-right: 20px;
    cursor: pointer;
    color: #4A7FA7;
`

export const FooterLinks = () => {
    const linkData = DataLinks.links || [];
    const supportData = DataLinks.support || [];
    const contactData = DataLinks.contactUs || [];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <FooterContainer>
            <Column>
                <Title text="Links" color="#4A7FA7" size="16px"/>
                <LinkList>
                    {linkData.map((link) => (
                        <LinkItem key={link.id}  onClick={() => handleScroll(link.path)}>
                            {link.name}
                        </LinkItem>
                    ))}
                </LinkList>
            </Column>
            <Column>
                  <Title text="Support" color="#4A7FA7" size="16px"/>    
                <LinkList>
                    {supportData.map((link) => (
                        <LinkItem key={link.id} onClick={() => handleScroll(link.path)}>
                            {link.name}
                        </LinkItem>
                    ))}
                </LinkList>
            </Column>
            <Column>
                  <Title text="Contact US" color="#4A7FA7" size="16px"/>
                <LinkList>
                    {contactData.map((link) => (
                        <LinkItem key={link.id}>
                            {link.name === 'address' ? link.description : `${link.name}: ${link.description}`}
                        </LinkItem>
                    ))}
                </LinkList>
            </Column>
        </FooterContainer>
    );
}