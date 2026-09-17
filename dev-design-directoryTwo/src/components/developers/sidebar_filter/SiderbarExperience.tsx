import { useState } from "react";
import styled from "styled-components";
import { DataContents } from "../../shared/data/DataContents";
import { Title } from '../../shared/title/Title';
import { TextMuted } from "../../shared/title/TextMuted";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
`;

const ExperienceItem = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #0D9488;
  cursor: pointer;
`;

const ExperienceList = DataContents.experience || [];

export const SidebarExperience = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleChange = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };


  return (
    <ExperienceContainer>
      <Title text="Experience" />

      {ExperienceList.map((item) => (
        <ExperienceItem key={item.id}>
          <RadioInput
            type="radio"
            name="experience"
            checked={selectedId === item.id}
            onChange={() => handleChange(item.id)}
          />
          <TextMuted text={item.value || item.name} />
        </ExperienceItem>
      ))}
    </ExperienceContainer>
  );
};