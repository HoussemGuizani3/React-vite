import styled from 'styled-components';
import { Title } from '../../shared/title/Title';
import { TextMuted } from '../../shared/title/TextMuted';
import { PrimaryButton } from '../../shared/button/PrimaryButton';
import { InputField } from '../../shared/input/InputField';
import type { Users } from './DeveloperCard';
import { Navbar } from '../../common/navbar/Navbar';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Modal from 'react-modal';


const ProfilSection = styled.div`
  min-height: 100vh;
  background-color: #f1f5f9;
  padding-bottom: 40px;
`;

const ProfilContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const ProfileHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ImgProfil = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ProfilText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const CardPart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 24px;
    border-top: 1px solid #f1f5f9;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;
const CardItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
const ButtonCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding-top: 24px;
  border-top: 1px solid #f1f5f9;
`;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '16px',
        padding: '24px',
        maxWidth: '450px',
        width: '90%',
        border: 'none',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1000
    }
};

const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
`;

interface UpdateCardProps {
    developer?: Users;
}

export const ViewProfil: React.FC<UpdateCardProps> = () => {
    const location = useLocation();


    const [modalIsOpen, setIsOpen] = useState(false);
    const developerData = location.state?.developer;
    const [isEditing, setIsEditing] = useState(false);

    const [form, setForm] = useState<Users>({
        username: developerData?.username || '',
        password: developerData?.password || '',
        firstName: developerData?.firstName || '',
        lastName: developerData?.lastName || '',
        name: developerData?.name || '',
        maidenName: developerData?.maidenName || '',
        image: developerData?.image || '',
        age: developerData?.age || '',
        gender: developerData?.gender || '',
        role: developerData?.role || '',
        email: developerData?.email || '',
        phone: developerData?.phone || '',
        location: developerData?.location || '',
        university: developerData?.university || '',
        cardExpire: developerData?.cardExpire || '',
        cardNumber: developerData?.cardNumber || '',
        cardType: developerData?.cardType || '',
        currency: developerData?.currency || '',
        iban: developerData?.iban || ''
    });

    const EditMode = () => {
        setIsEditing(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleClickOpen = () => setIsOpen(true);
    const handleClickClose = () => setIsOpen(false);

    const handleConfirmCancel = () => {
        setIsOpen(false);
        setIsEditing(false);
    };

    return (
        <ProfilSection>
            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={handleClickClose}>
                <ModalTitle>
                    <Title text='Are you sure?' />
                    <TextMuted text='Are you sure you want to cancel? Any unsaved changes will be lost.' />
                </ModalTitle>
                <ModalButton>
                    <PrimaryButton text='Back' type='button' bgcolor="#f1f5f9" color="#0f172a" onClick={handleClickClose} />
                    <PrimaryButton text='Yes, Cancel' type='button' onClick={handleConfirmCancel} />
                </ModalButton>
            </Modal>

            <Navbar width="auto" />

            <ProfilContainer>
                <HeaderCard>
                    <ProfileHeaderInfo>
                        <ImgProfil src={form.image || ''} title="profil" alt="Profile" />
                        <ProfilText>
                            <Title text={form.name || `${form.firstName} ${form.lastName}`} />
                            <TextMuted text={form.role || 'Developer'} />
                        </ProfilText>
                    </ProfileHeaderInfo>
                    {!isEditing && (
                        <PrimaryButton type="button" text="Edit Profile" onClick={EditMode} />
                    )}
                </HeaderCard>


                <CardForm method='POST'>
                    <CardPart>
                        <Title text="Personal Details" />
                        <GridContainer>
                            <CardItems>
                                <CardItem>
                                    <TextMuted text="First Name :" />
                                    <InputField
                                        name="firstName"
                                        text={form.firstName}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                                <CardItem>
                                    <TextMuted text="Last Name :" />
                                    <InputField
                                        name="lastName"
                                        text={form.lastName}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                            </CardItems>
                            <CardItems>
                                <CardItem>
                                    <TextMuted text="Maiden Name :" />
                                    <InputField
                                        name="maidenName"
                                        text={form.maidenName}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                                <CardItem>
                                    <TextMuted text="Age :" />
                                    <InputField
                                        name="age"
                                        text={String(form.age)}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                            </CardItems>
                            <CardItems>
                                <CardItem>
                                    <TextMuted text="Gender :" />
                                    <InputField
                                        name="gender"
                                        text={form.gender}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                                <CardItem>
                                    <TextMuted text="Mobile :" />
                                    <InputField
                                        name="phone"
                                        type="text"
                                        text={form.phone}
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                            </CardItems>
                            <CardItems>
                                <CardItem>
                                    <TextMuted text="Email :" />
                                    <InputField
                                        name="email"
                                        text={form.email}
                                        type="email"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                                <CardItem>
                                    <TextMuted text="Login :" />
                                    <InputField
                                        name="username"
                                        text={form.username}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                            </CardItems>
                            <CardItems>
                                <CardItem>
                                    <TextMuted text="Password :" />
                                    <InputField
                                        name="password"
                                        text={form.password}
                                        type="password"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                                <CardItem>
                                    <TextMuted text="Role :" />
                                    <InputField
                                        name="role"
                                        text={form.role}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                            </CardItems>
                        </GridContainer>
                    </CardPart>

                    <CardPart>
                        <Title text="Address" />
                        <GridContainer>
                            <CardItems>
                                <CardItem>
                                    <TextMuted text="Location :" />
                                    <InputField
                                        name="location"
                                        type="text"
                                        text={form.location}
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                                <CardItem>
                                    <TextMuted text="University :" />
                                    <InputField
                                        name="university"
                                        text={form.university}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                            </CardItems>
                        </GridContainer>
                    </CardPart>

                    <CardPart>
                        <Title text="Bank Card Information" />
                        <GridContainer>
                            <CardItems>
                                <CardItem>
                                    <TextMuted text="Card Number :" />
                                    <InputField
                                        name="cardNumber"
                                        text={form.cardNumber}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                                <CardItem>
                                    <TextMuted text="Card Expire :" />
                                    <InputField
                                        name="cardExpire"
                                        text={form.cardExpire}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                            </CardItems>
                            <CardItems>
                                <CardItem>
                                    <TextMuted text="Currency :" />
                                    <InputField
                                        name="currency"
                                        text={form.currency}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                                <CardItem>
                                    <TextMuted text="IBAN :" />
                                    <InputField
                                        name="iban"
                                        text={form.iban}
                                        type="text"
                                        width="550px"
                                        radius="8px"
                                        bgcolor={isEditing ? "#ffffff" : "#f8fafc"}
                                        border="1px solid #cbd5e1"
                                        disabled={!isEditing}
                                        onChange={isEditing ? handleChange : undefined}
                                    />
                                </CardItem>
                            </CardItems>
                        </GridContainer>
                    </CardPart>

                    {isEditing && (
                        <ButtonCard>
                            <PrimaryButton
                                type="button"
                                text="Cancel"
                                bgcolor="#ffffff"
                                color="#242424"
                                border="1px solid #cbd5e1"
                                onClick={handleClickOpen}
                            />
                            <Link to={`/UpdateCard/${developerData?.id}`} state={{ developer: form }}>
                                <PrimaryButton type="button" text="Save Changes" bgcolor="#242424" color="#ffffff" />
                            </Link>
                        </ButtonCard>
                    )}
                </CardForm>
            </ProfilContainer>
        </ProfilSection>
    );
};