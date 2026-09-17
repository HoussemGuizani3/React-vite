import styled from "styled-components";

const Input = styled.input<{
    $border?: string;
    $width?: string;
    $color?: string;
    $bgcolor?: string;
    $radius?: string;
    $disabled?: boolean;
    
}>`

    width: ${props => props.$width || '100%'};
    height: 40px;
    padding-left: 8px;
    background-color: ${props => props.$bgcolor || '#E7E9Eb'};
    color: ${props => props.$color || '#1E293B'};
    border-radius: ${props => props.$radius || '16px'};
    border: ${props => props.$border || 'none'};

    &[type="checkbox"], &[type="radio"] {
        appearance: none; 
        -webkit-appearance: none;
        
        width: 18px;
        height: 18px;
        background-color: #E7E9Eb; 
        border: 2px solid #E5E7Eb; 
        cursor: pointer;
        display: inline-grid;
        place-content: center;
        transition: all 0.2s ease-in-out;

        border-radius: 4px; 

        &:hover {
            border-color: #0D9488; 
        }
    
        &:checked {
            background-color: #0D9488; 
            border-color: #0D9488;
        }

        &[type="checkbox"]:checked::before {
            content: "";
            width: 8px;
            height: 5px;
            border-left: 2px solid #E5E7Eb;
            border-bottom: 2px solid #E5E7Eb;
            transform: rotate(-45deg);
            margin-bottom: 2px;
        }

        &[type="radio"] {
            border-radius: 50%; 
        }

        &[type="radio"]:checked::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #E5E7Eb;
        }
    }
`;

const Error = styled.span`
    color :  red;
`;
interface Props {
    text?: string;
    type: string;
    name?: string;
    placeholder?: string;
    width?: string;
    color?: string;
    radius?: string;
    bgcolor?: string;
    border?: string;
    id?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    error?: string;
}


export const InputField: React.FunctionComponent<Props> = ({
    text, 
    type, 
    name, 
    placeholder,
    width,
    color,
    radius,
    bgcolor,
    border,
    id,
    disabled,
    checked,
    error,
    onChange
}) => {
    return (
        <>
        <Input 
            id={id}
            value={text} 
            type={type} 
            name={name} 
            placeholder={placeholder}
            $disabled={disabled} 
            $width={width}
            $color={color}
            $radius={radius}
            $bgcolor={bgcolor}
            $border={border}
            checked={checked}
            onChange={onChange}
        />
        <Error>{error}</Error>
    </>
    );

};