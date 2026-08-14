import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css'; 
import { DeveloperCard } from '../developer_card/DeveloperCard';
import { axiosClient } from '../../../api/axiosClient';
import { Footer } from "../../common/footer/Footer";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  flex-wrap: wrap;
  gap: 16px;
`;

const PaginationWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const DeveloperGrid: React.FC = () => {
  const [users, setUsers] = useState<JSON[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const limit = 8; 

  useEffect(() => {
    setLoading(true);

    const skip = (currentPage - 1) * limit;

    axiosClient
      .get('/users', {
        params: {
          limit: limit,
          skip: skip,
        },
      })
      .then((response) => {
        setUsers(response.data.users);
        setTotalUsers(response.data.total); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const totalPages = Math.ceil(totalUsers / limit);

  return (
    <MainWrapper>
      <GridContainer>
        {users.map((u: any) => (
          <DeveloperCard
            key={u.id}
            developer={{
              id: u.id, 
              image: u.image,
              firstName: u.firstName,
              lastName: u.lastName,
              name:`${u.firstName || ''} ${u.lastName || ''}`,
              maidenName: u.maidenName,
              age: u.age,
              gender: u.gender,
              email: u.email,
              username: u.username,
              password: u.password,
              role: u.company?.title || 'Developer',
              phone: u.phone,
              location: `${u.address?.country || ''} , ${u.address?.city || ''}`,
              university: u.university,
              cardExpire: u.bank.cardExpire,
              cardNumber: u.bank.cardNumber,
              cardType: u.bank.cardType,
              currency: u.bank.currency,
              iban: u.bank.iban,
            }}
          />
        ))}
      </GridContainer>
        
      <PaginationWrapper>
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </PaginationWrapper>
      <hr style={{ width: '92%', borderColor: '#e5e7eb' }} />
      <Footer />
      
    </MainWrapper>
  );
};