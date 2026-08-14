import styled from 'styled-components';


const SelectContainer = styled.select`
    padding: 8px 12px;
    height: 40px;
    width:160px;
    background-color: #E7E9Eb;
    color: #1E293B;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
`;

const Option = styled.option`
    background-color: #ffffff;;
`;


interface TypeSelectList {
    id: number | string;
    name: string;
}

interface ListProps {
    items: TypeSelectList[];
    text: string;      
}
export const Selector: React.FunctionComponent<ListProps> = ({ items, text }) => {
    return (

        <SelectContainer defaultValue="">
            <Option value="" disabled>
                {text}
            </Option>

            {items.map((item) => (
                <Option
                    key={item.id}
                    value={item.id}
                >
                    {item.name}
                </Option>
            ))}
        </SelectContainer>
    );
};