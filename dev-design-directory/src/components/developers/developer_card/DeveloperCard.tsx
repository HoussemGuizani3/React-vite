import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Title } from '../../shared/title/Title';
import { TextMuted } from '../../shared/title/TextMuted';
import { PrimaryButton } from '../../shared/button/PrimaryButton';
import { SkillChip } from '../../shared/button/SkillChip';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  gap: 8px;
  background-color: #E7E9Eb;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

const ImgProfilCard = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #2dd4bf;
  margin-bottom: 12px;
`;

const PositionCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  color: #6b7280;
`;

const ButtonCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export interface Users {
  id?: number;
  lastName: string;
  firstName: string;
  name: string;
  maidenName?: string;
  image?: string;
  age?: number;
  gender: string;
  email: string;
  username: string;
  password: string;
  phone?: string;
  role?: string;
  location?: string;
  university?: string;
  cardExpire?: string;
  cardNumber?: string;
  cardType?: string;
  currency?: string;
  iban?: string;

}

interface DeveloperCardProps {
  developer?: Users;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  const { image, name, role, email, phone, location } = developer || {};

  const [isVisible, setIsVisibel] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibel(true)
    }, 2000);
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) {
    return <div>{'Loading...'}</div>;
  }


  return (

    <Card>
      <ImgProfilCard
        src={image || 'image'}
        title="Profil"
        alt={name || 'Developer Avatar'}
      />

      <Title text={name || 'name'} />
      <TextMuted text={role || 'Software Engineer'} />
      <TextMuted text={email || 'Email@email.com'} />
      <SkillChip type="button" text={phone || '+49 - 12345678'} />

      <PositionCard>
        <IoLocationOutline />
        <TextMuted text={location || 'London, UK'} />
      </PositionCard>

      <ButtonCard>
       
        <Link to={`/ViewProfil/${developer?.id}`} state={{ developer }}>
          <PrimaryButton type="button" text="VIEW PROFILE" />
        </Link>

        <PrimaryButton type="button" text="CONTACT" bgcolor="#E7E9Eb" color="#1E293B" />
      </ButtonCard>
    </Card>


  );
};