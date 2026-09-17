import styled from "styled-components";
import { Title } from "../../shared/title/Title";
import { SkillChip } from "../../shared/button/SkillChip";
import { DataContents } from '../../shared/data/DataContents';


const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px; 
    width:200px;
    margin-top: 10px;
    
`;

const PopularContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 
    gap: 12px; 
    margin-top: 10px;
    
`;
const PopulatSkills = DataContents.skills || [];
export const SiderbarPopSkills = () => {
    return (
        <PopularContainer>
            <Title text="Popular Skills" />
            <SkillsWrapper>
                {PopulatSkills.map((item) =>
                    item.popular ? (
                        <SkillChip key={item.id} type="button" text={item.name} />
                    ) : null
                )}
            </SkillsWrapper>
        </PopularContainer>
    );
};