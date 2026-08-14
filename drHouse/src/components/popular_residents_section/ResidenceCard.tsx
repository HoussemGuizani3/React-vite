import { ContentData } from "../shared/navigation/ContentData.tsx";
import styled from "styled-components";
import { Title } from '../shared/title/Title.tsx';
import { PrimaryButton } from '../shared/button/PrimaryButton.tsx';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 24px;
    width: max-content;
    margin-left: 30px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 16px;
    padding-bottom: 8px;
    gap: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    text-align: left;
    width: 250px;
    min-width: 250px;
    flex-shrink: 0;
`;
const PropertyImage = styled.img`
    width: 100%;
    height: 200px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    object-fit: cover;
`;
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
`;
const Price = styled.span`
    color: red;
`;

const Desc = styled.span`
    color: gray;
`;
export const ResidenceCard = () => {
    const ResidenceData = ContentData.residentsSection || [];

    return (
        <CardContainer>
            {ResidenceData.map((item) => (
                <Card key={item.id}>
                    <PropertyImage src={item.image} alt={item.title} />
                    <InfoWrapper>
                        <Price>{item.price}</Price>
                        <Title text={item.title} />
                        <Desc>{item.description}</Desc>
                        <PrimaryButton text="See details" />
                    </InfoWrapper>
                </Card>
            ))
            }
        </CardContainer>
    );
}