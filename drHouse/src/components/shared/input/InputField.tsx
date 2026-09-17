import styled from 'styled-components';
import { GoStop } from "react-icons/go";

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 500px;
    gap:4px;

`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: black; 
`;

const StyledInput = styled.input<{
    $border?:string;
}>`
    width: 100%;
    height: 48px;
    padding: 12px 16px;
    padding-right:12px;
    font-size: 15px;
    border: ${props => props.$border || '1px solid #cbd5e1'};
    border-radius: 12px; 
    background-color: #ffffff;
    color: #334155;
    outline: none;
    transition: border-color 0.2s ease;
    box-sizing: border-box;
    
    &::placeholder {
        color: #94a3b8;
    }

`;
const Error = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 4px;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    gap: 4px;
`;

interface Props {
    label?: string;
    type?: string;
    placeholder: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    border?: string;
    error?: string;
}
export const InputField: React.FunctionComponent<Props> = ({label,type,placeholder,name,value,onChange,border,error}) => {

    return (
        <InputWrapper>
            <Label>{label}</Label>
            <StyledInput type={type || "text"}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                $border={border}
            />
            <Error>
                {error && <GoStop color='red' />}                
                {error}
            </Error>
        </InputWrapper>
    );
}