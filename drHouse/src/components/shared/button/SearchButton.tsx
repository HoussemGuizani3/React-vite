import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: white;
    border: 1px solid #4A7FA7;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    color: #4A7FA7;

    &:hover {
        background-color: #4A7FA7;
        color: white;
    }
`;

interface SearchButtonProps {
    text: string;
}

export const SearchButton = ({ text }: SearchButtonProps) => {
    return (
        <Button type='button'>{text} <CiSearch /> </Button>  
    );
};