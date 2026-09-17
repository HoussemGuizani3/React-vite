import { styled } from 'styled-components';
import { Title } from '../shared/title/Title.tsx';
import { ContentData } from '../shared/navigation/ContentData.tsx';
import { TextMuted } from '../shared/title/TextMuted.tsx';


const CardGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 80px;
    width: 100%;
    max-width: 1000px;
    min-height: 50px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.76) 0px 4px 6px;
    margin: 32px auto;
    padding: 16px;
    border-radius: 8px;
    box-sizing: border-box;
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const CardStatSection = () => {
    const statData = ContentData.statSection || [];
    
    return(
        <div>
        <CardGrid>
            {statData.map((item) =>(
                <Card key={item.id}>
                    <Title text={item.title} />
                    <TextMuted text={item.description}/>
                </Card>
            ))}
        </CardGrid>
        </div>
    );
}