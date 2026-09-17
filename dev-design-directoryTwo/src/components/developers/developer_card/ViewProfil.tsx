import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../../shared/title/Title';
import { TextMuted } from '../../shared/title/TextMuted';
import { PrimaryButton } from '../../shared/button/PrimaryButton';
import { InputField } from '../../shared/input/InputField';
import { Navbar } from '../../common/navbar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import validator from 'validator';

if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

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
    zIndex: 1000,
  },
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

export interface UserProfileData {
  id?: number;
  title?: string;
  thumbnail?: string;
  price?: number;
  quantity?: number;
  total?: number;
  discountPercentage?: number;
  discountedTotal?: number;
}

export const ViewProfil: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const developerData: UserProfileData = location.state?.developer || {};

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [errorTitle, setErrorTitle] = useState<string>('');

  const [form, setForm] = useState<UserProfileData>({
    id: developerData.id,
    title: developerData.title || '',
    thumbnail: developerData.thumbnail || '',
    price: developerData.price || 0,
    quantity: developerData.quantity || 0,
    total: developerData.total || 0,
    discountPercentage: developerData.discountPercentage || 0,
    discountedTotal: developerData.discountedTotal || 0,
  });

  const EditMode = () => {
    setIsEditing(true);
  };

  const validateField = (fieldName: string, value: string) => {
    if (fieldName === 'title') {
      if (validator.isEmpty(value.trim())) {
        setErrorTitle('Title is required');
      } else {
        setErrorTitle('');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleClickOpen = () => setIsOpen(true);
  const handleClickClose = () => setIsOpen(false);

  const handleConfirmCancel = () => {
    setIsOpen(false);
    setIsEditing(false);
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();

    const isTitleValid = !validator.isEmpty((form.title || '').trim());

    if (!isTitleValid) {
      setErrorTitle('Title is required');
      return;
    }

    setIsEditing(false);
    navigate('/');
  };

  const displayImage = form.thumbnail || 'https://via.placeholder.com/90';
  const displayName = form.title || 'Product Details';

  return (
    <ProfilSection>
      <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={handleClickClose}>
        <ModalTitle>
          <Title text="Are you sure?" />
          <TextMuted text="Are you sure you want to cancel? Any unsaved changes will be lost." />
        </ModalTitle>
        <ModalButton>
          <PrimaryButton
            text="Back"
            type="button"
            bgcolor="#f1f5f9"
            color="#0f172a"
            onClick={handleClickClose}
          />
          <PrimaryButton text="Yes, Cancel" type="button" onClick={handleConfirmCancel} />
        </ModalButton>
      </Modal>

      <Navbar width="auto" />

      <ProfilContainer>
        <HeaderCard>
          <ProfileHeaderInfo>
            <ImgProfil src={displayImage} title="Profile" alt={displayName} />
            <ProfilText>
              <Title text={displayName} />
              <TextMuted text={`Price: $${form.price}`} />
            </ProfilText>
          </ProfileHeaderInfo>
          {!isEditing && (
            <PrimaryButton type="button" text="Edit Profile" onClick={EditMode} />
          )}
        </HeaderCard>

        <CardForm onSubmit={handleSaveChanges}>
          <CardPart>
            <Title text="Product Details" />
            <GridContainer>
              <CardItems>
                <CardItem>
                  <TextMuted text="Title :" />
                  <InputField
                    name="title"
                    text={form.title || ''}
                    type="text"
                    width="550px"
                    radius="8px"
                    bgcolor={isEditing ? '#ffffff' : '#f8fafc'}
                    border="1px solid #cbd5e1"
                    disabled={!isEditing}
                    error={errorTitle}
                    onChange={isEditing ? handleChange : undefined}
                  />
                </CardItem>
                <CardItem>
                  <TextMuted text="Price ($) :" />
                  <InputField
                    name="price"
                    text={String(form.price || '')}
                    type="number"
                    width="550px"
                    radius="8px"
                    bgcolor={isEditing ? '#ffffff' : '#f8fafc'}
                    border="1px solid #cbd5e1"
                    disabled={!isEditing}
                    onChange={isEditing ? handleChange : undefined}
                  />
                </CardItem>
              </CardItems>

              <CardItems>
                <CardItem>
                  <TextMuted text="Quantity :" />
                  <InputField
                    name="quantity"
                    text={String(form.quantity || '')}
                    type="number"
                    width="550px"
                    radius="8px"
                    bgcolor={isEditing ? '#ffffff' : '#f8fafc'}
                    border="1px solid #cbd5e1"
                    disabled={!isEditing}
                    onChange={isEditing ? handleChange : undefined}
                  />
                </CardItem>
                <CardItem>
                  <TextMuted text="Total ($) :" />
                  <InputField
                    name="total"
                    text={String(form.total || '')}
                    type="number"
                    width="550px"
                    radius="8px"
                    bgcolor={isEditing ? '#ffffff' : '#f8fafc'}
                    border="1px solid #cbd5e1"
                    disabled={!isEditing}
                    onChange={isEditing ? handleChange : undefined}
                  />
                </CardItem>
              </CardItems>

              <CardItems>
                <CardItem>
                  <TextMuted text="Discount Percentage (%) :" />
                  <InputField
                    name="discountPercentage"
                    text={String(form.discountPercentage || '')}
                    type="number"
                    width="550px"
                    radius="8px"
                    bgcolor={isEditing ? '#ffffff' : '#f8fafc'}
                    border="1px solid #cbd5e1"
                    disabled={!isEditing}
                    onChange={isEditing ? handleChange : undefined}
                  />
                </CardItem>
                <CardItem>
                  <TextMuted text="Discounted Total ($) :" />
                  <InputField
                    name="discountedTotal"
                    text={String(form.discountedTotal || '')}
                    type="number"
                    width="550px"
                    radius="8px"
                    bgcolor={isEditing ? '#ffffff' : '#f8fafc'}
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
              <PrimaryButton
                type="submit"
                text="Save Changes"
                bgcolor="#242424"
                color="#ffffff"
              />
            </ButtonCard>
          )}
        </CardForm>
      </ProfilContainer>
    </ProfilSection>
  );
};