import styled from 'styled-components';

const Button = styled.button<{
    $bgcolor?: string;
    $color?: string;
    $width?: string;
    $height?: string;
    $radius?: string;
    $border?: string;
    $hover?: string;
   
}>`
    background-color: ${props => props.$bgcolor || '#1E293B'}; 
    color: ${props => props.$color || '#E7E9Eb'};
    width: ${props => props.$width || '120px'};
    height: ${props => props.$height || '32px'};
    border-radius: ${props => props.$radius || '8px'};
    border: ${props => props.$border || 'none'};
    font-weight: 600;
    &:hover {
        background-color:${props => props.$hover || 'none'};
        color: #e5e7eb;
        
    }
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
`;

interface Props {
    id?:string;
    text: string;
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    bgcolor?: string;
    color?: string;
    width?: string;
    height?: string; 
    radius?: string;
    border?: string;
    hover?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const PrimaryButton: React.FunctionComponent<Props> = ({
    id,
    text,
    type,
    disabled,
    bgcolor,
    color,
    width,
    height,
    radius,
    border,
    hover,
    onClick
}) => {
    return(
        <Button
            id={id}
            type={type}
            onClick={onClick} 
            disabled={disabled}
            $bgcolor={bgcolor}
            $color={color}
            $width={width}
            $height={height}
            $radius={radius}
            $border={border} 
            $hover={hover}
        >
            {text}
        </Button>
    );
};