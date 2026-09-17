import styled from "styled-components";
import { DataLinks } from "../../shared/data/DataLinks";
import { Link } from "react-router-dom";

const FootetrList = styled.ul`
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
    font-size: 12px;
    font-family: 'Inter', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    a {
        color: #1E293B;
        text-decoration: none;
    }
`;
const LinksData = DataLinks.footerLinks || [];
export const FooterLeft = () => {
    return(
        <FootetrList>
            {LinksData.map(link => (
                <Item key={link.id}>
                    <Link to={link.path}>{link.name}</Link>
                </Item>
            ))}
        </FootetrList>
    );
}