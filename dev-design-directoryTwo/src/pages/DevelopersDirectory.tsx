import { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../components/common/navbar/Navbar";
import { HeroSearch } from "../components/developers/hero_search/HeroSearch";
import { SiderbarFilter } from "../components/developers/sidebar_filter/SiderbarFilter";
import { DeveloperGrid } from "../components/developers/developer_grid/DeveloperGrid";

const DevDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F8FAFC;
  padding: 8px;
`;

const LayoutUnits = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 88%;
`;

export const DevelopersDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <DevDirectoryContainer>
      <Navbar />
      <HeroSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <LayoutUnits>
        <DeveloperGrid searchTerm={searchTerm} />
        <SiderbarFilter />
      </LayoutUnits>
    </DevDirectoryContainer>
  );
};