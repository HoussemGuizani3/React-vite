import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DeveloperCard } from '../developer_card/DeveloperCard';
import { axiosClient } from '../../../api/axiosClient';
import { Footer } from '../../common/footer/Footer';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';


const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
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
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

const Paragraphe = styled.div`
  margin-top: 20px;
  color: #64748b;
`;

interface ProductItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
  cartId?: number;
}

interface DeveloperGridProps {
  searchTerm: string;
}

const LIMIT = 8;

export const DeveloperGrid: React.FC<DeveloperGridProps> = ({ searchTerm }) => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCarts, setTotalCarts] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    const skip = (currentPage - 1) * LIMIT;

    axiosClient
      .get('/carts', {
        params: { 
          limit: LIMIT,
           skip },
      })
      .then((response) => {
        const extractedProducts: ProductItem[] = response.data.carts
          .map((cart: any) =>
            cart.products.map((p: any) => ({
              ...p,
              cartId: cart.id,
            }))
          )
          .flat()
          .slice(0, LIMIT);

        setProducts(extractedProducts);
        setTotalCarts(response.data.total);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [currentPage]);

  const filteredProducts = products.filter((item) => {
    const query = searchTerm.toLowerCase().trim();
    return (item.title || '').toLowerCase().includes(query);
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const totalPages = Math.ceil(totalCarts / LIMIT) || 1;

  return (
    <MainWrapper>
      <GridContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <DeveloperCard
              key={`${item.cartId}-${item.id}-${index}`}
              developer={{
                id: item.id,
                thumbnail: item.thumbnail,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
                total: item.total,
                discountPercentage: item.discountPercentage,
                discountedTotal: item.discountedTotal,
              }}
            />
          ))
        ) : (
          <Paragraphe>No items found matching "{searchTerm}"</Paragraphe>
        )}
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