import { useState } from "react";
import styled from "styled-components";
import { DataContents } from "../../shared/data/DataContents";
import { Title } from '../../shared/title/Title';
import { TextMuted } from "../../shared/title/TextMuted";

const CategorieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
`;

const CategorieItem = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #0D9488;
  cursor: pointer;
`;

const CategorieList = DataContents.categorie || [];

interface CategorieSearchProps {
  categorieSearch: string[];
  setCategorieSearch: (value: string[]) => void;
}

export const SidebarCategorie: React.FC<CategorieSearchProps> = ({ categorieSearch, setCategorieSearch }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleChange = (id: number, name: string) => {
    const newArray = selectedIds.slice();
    const newNames = categorieSearch.slice();

    if (newArray.includes(id)) {
      const index = newArray.indexOf(id);
      newArray.splice(index, 1);

      const nameIndex = newNames.indexOf(name);
      if (nameIndex !== -1) {
        newNames.splice(nameIndex, 1);
      }
    } else {
      newArray.push(id);
      newNames.push(name);
    }

    setSelectedIds(newArray);
    setCategorieSearch(newNames);
  };

  return (
    <CategorieContainer>
      <Title text="Categories" />

      {CategorieList.map((item) => (
        <CategorieItem key={item.id}>
          <Checkbox
            type="checkbox"
            name={item.name}
            checked={selectedIds.includes(item.id)}
            onChange={() => handleChange(item.id, item.name)}
          />
          <TextMuted text={item.name} />
        </CategorieItem>
      ))}
    </CategorieContainer>
  );
};