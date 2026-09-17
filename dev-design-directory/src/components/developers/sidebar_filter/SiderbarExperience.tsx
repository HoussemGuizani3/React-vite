import styled from "styled-components";
import { DataContents } from "../../shared/data/DataContents";
import { Title } from '../../shared/title/Title';
import { TextMuted } from "../../shared/title/TextMuted";
import { InputField } from "../../shared/input/InputField";

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 
    gap: 12px; 
    margin-top: 10px;
    width: 100%;
`;

const ExperienceItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    gap: 10px; 
    cursor: pointer;
`;

const ExperienceList = DataContents.experience || [];

export const SidebarExperience = () => {
    return (
        <ExperienceContainer>
            <Title text='Experience' />

            {ExperienceList.map((item) => (
                <ExperienceItem key={item.id}>
                    <InputField type='radio' name={item.name} text={item.value}  width='30px' bgcolor='#0D9488'/>
                    <TextMuted text={item.value} />

                </ExperienceItem>
            ))}
        </ExperienceContainer>
    );
};