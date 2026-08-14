import styled from "styled-components";
import { DataContents } from "../../shared/data/DataContents";
import { Title } from '../../shared/title/Title';
import { TextMuted } from "../../shared/title/TextMuted";
import { InputField } from "../../shared/input/InputField";

const CategorieContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 
    gap: 12px; 
    margin-top: 10px;
    width: 100%;
`;

const CategorieItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    gap: 10px; 
    cursor: pointer;
`;

const CategorieList = DataContents.categorie || [];

export const SidebarCategorie = () => {
    return (
        <CategorieContainer>
            <Title text='Categories' />

            {CategorieList.map((item) => (
                <CategorieItem key={item.id}>
                    <InputField type='checkbox' name={item.name} width='30px' bgcolor='#0D9488' />
                    <TextMuted text={item.name} />
                </CategorieItem>
            ))}
        </CategorieContainer>
    );
};