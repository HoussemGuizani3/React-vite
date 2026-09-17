import styled from "styled-components";
import { PrimaryButton } from "../../shared/button/PrimaryButton";

const SkillsBt = styled.div`
    dipslay : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const SkillTag = () => {
    return(
        <SkillsBt>  
            <PrimaryButton type='button' text='1'/>
            <PrimaryButton type='button' text='2'/>
            <PrimaryButton type='button' text='3'/>
            <PrimaryButton type='button' text='4'/>
            <PrimaryButton type='button' text='Next'/>

        </SkillsBt>
    );
}