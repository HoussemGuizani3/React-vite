import { Selector } from "../shared/selector/Selector";
import { TextMuted } from "../shared/title/TextMuted";
import { SearchButton } from "../shared/button/SearchButton";
import styled from "styled-components";
import { ContentData } from "../shared/navigation/ContentData";

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px; 
  padding: 16px; 
  margin: auto;
  background-color: #0A4174;
  border-radius: 8px; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  width: 70%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; 
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px; 
`;

export const SearchBar = () => {
  const housesData = ContentData.house || [];
  const fieldConfig = ContentData.searchFieldsConfig || [];

  return (
    <SearchBarContainer>
      {fieldConfig.map((field) => (
        <SelectorContainer key={field.id}>
          <TextMuted text={field.labelText} />
          <IconContainer>
            {field.icon}
            <Selector options={housesData} type={field.type} />
          </IconContainer>
        </SelectorContainer>
      ))}
      <SearchButton text="Search" />
    </SearchBarContainer>
  );
};