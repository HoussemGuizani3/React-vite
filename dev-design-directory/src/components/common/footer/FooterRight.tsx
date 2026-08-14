import styled from "styled-components";
import { TextMuted } from "../../shared/title/TextMuted";
import { MdCopyright } from "react-icons/md";

const FooterCopyright = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`
export const FooterRight = () => {
    return (
        <FooterCopyright>
            <MdCopyright />
            <TextMuted text='Copyright Reserved' />
        </FooterCopyright>
    );
}