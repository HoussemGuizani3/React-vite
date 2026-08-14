import styled from "styled-components";
import { TextMuted } from "../shared/title/TextMuted";
import { ContentData } from "../shared/navigation/ContentData";
import { IoSearchCircleSharp } from "react-icons/io5";
import { SiAdguard } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { Ri24HoursLine } from "react-icons/ri";

const ICON_LIST = [IoSearchCircleSharp, SiAdguard, GrTransaction, Ri24HoursLine];

const CardsGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 40px;
  text-align: center;
`;

const Card = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 250px;
  text-align: left;
`;

const TitleCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const FeatureSection = () => {
  const cardFeatures = ContentData.featureSection || [];

  return (
    <CardsGrid>
      {cardFeatures.map((item, index) => {
        const IconComponent = ICON_LIST[index % ICON_LIST.length];
        return (
          <Card key={item.id}>
            <TitleCard>
              {IconComponent && <IconComponent size={30} color="#4A7FA7" />}
              <TextMuted text={item.title} />
            </TitleCard>
            <p>{item.description}</p>
          </Card>
        );
      })}
    </CardsGrid>
  );
};
