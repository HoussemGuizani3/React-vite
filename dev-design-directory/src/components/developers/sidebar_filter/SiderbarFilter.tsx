import styled from "styled-components";
import { SidebarCategorie } from "./SidebarCategorie"
import { SidebarExperience } from "./SiderbarExperience";
import { SiderbarPopSkills } from "./SiderbarPopSkills";

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    margin-top: 24px;
`;

export const SiderbarFilter = () => {
    return (
        <SidebarContainer>
            <SidebarCategorie />
            <hr style={{ width: '92%', borderColor: '#e5e7eb' }} />

            <SidebarExperience />
            <hr style={{ width: '92%', borderColor: '#e5e7eb' }} />

            <SiderbarPopSkills />
        </SidebarContainer>
    );
}