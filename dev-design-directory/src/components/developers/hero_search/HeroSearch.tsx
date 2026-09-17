import styled from "styled-components";
import { Selector } from "../../shared/selector/Selector";
import { InputField } from "../../shared/input/InputField";
import { DataContents } from "../../shared/data/DataContents";
import { Country } from "country-state-city";
import { PrimaryButton } from "../../shared/button/PrimaryButton"


const HeroSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:8px;
    background-color: #4DB6AC;
    height: 60px;
    width: 90%;
    padding: 8px 80px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
`;

const rolesList = DataContents.roles || [];
const skillsList = DataContents.skills || [];


export const HeroSearch = () => {


    const countryList = Country.getAllCountries().map((c) => ({
        id: c.isoCode,
        name: c.name,
    }));
    
    return (
        <HeroSearchContainer>
            <InputField type='text' placeholder="Search by skill, location, or name (e.g: 'React', 'New York'"  />
            <Selector items={rolesList} text='Filter by Role' />
            <Selector items={skillsList} text='Skills' />
            <Selector items={countryList} text='Location' />
            <PrimaryButton type='button' text='FIND TALENT' width="200px" height="40px" radius="8px" />
        </HeroSearchContainer>
    );
}