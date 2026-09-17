import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Title } from '../../shared/title/Title';
import { TextMuted } from '../../shared/title/TextMuted';
import { PrimaryButton } from '../../shared/button/PrimaryButton';
import { SkillChip } from '../../shared/button/SkillChip';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { MdDeleteForever } from "react-icons/md";



const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 8px;
  background-color: #e7e9eb;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const ImgProfilCard = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #2dd4bf;
  margin-bottom: 12px;
`;


const ButtonCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const Icone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content : flex-end;  
  cursor: pointer;
`;
export interface DeveloperItem {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal?: number;
}

interface DeveloperCardProps {
  developer: DeveloperItem;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  const {
    id,
    thumbnail,
    title,
    price,
    quantity,
    discountPercentage,
  } = developer;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return <div>Loading...</div>;
  }

  return (
    <CardContainer>
      <Icone>
        <MdDeleteForever color="#d4101071" size={24} id="icone" />
        <Tooltip anchorSelect="#icone" content="delete this item" style={{backgroundColor : "red"}} />
      </Icone>
      
      <Card>
      <ImgProfilCard
        src={thumbnail}
        title={title}
        alt={title}
      />

      <Title text={title} />
      <TextMuted text={`Price: $${price}`} />
      <TextMuted text={`Quantity: ${quantity}`} />
      <SkillChip type="button" text={`-${discountPercentage}%`} />

    </Card>

      <ButtonCard>
        <Link to={`/ViewProfil/${id}`} state={{ developer }}>

          <PrimaryButton
            id="tooltip_button"
            type="button"
            text="VIEW DETAILS"
            hover='#738fbd'

          />
          <Tooltip anchorSelect="#tooltip_button" content="hello" style={{ borderRadius: "24px" }} />
        </Link>
        <PrimaryButton
          id="tooltip_button"
          type="button"
          text="BUY"
          bgcolor="#d3d5d8"
          color="#1E293B"
          hover='#738fbd'
        />
        <Tooltip anchorSelect="#tooltip_button" content="quantity limeted" style={{ borderRadius: "24px" }} />
      </ButtonCard>
    </CardContainer>
  );
};