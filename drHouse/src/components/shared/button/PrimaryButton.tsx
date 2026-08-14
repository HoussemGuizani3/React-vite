import Styled from 'styled-components';

const Button = Styled.button<{
    $bgColor?: string;
    $bgColorHover?: string;
    $color?: string;
    $border?: string;
    $borderRadius?: string;
    $cursor?: string;
    $width?: string;
    $height?: string;
}>`
    background-color: ${props => props.$bgColor || '#4A7FA7'};
    color: ${props => props.$color || 'white'};
    border: none;
    padding: 8px 16px;
    border-radius: ${props => props.$borderRadius || '4px'};
    cursor: ${props => props.$cursor || 'pointer'};
    font-size: 16px;
    width: ${props => props.$width || 'auto'};
    height: ${props => props.$height || 'auto'}; 
&:hover {
    background-color: ${props => props.disabled ? props.$bgColor || '#4A7FA7' : props.$bgColorHover || '#1A3D63'};
}
`;


interface Props {
    text?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    width?: string;
    bgColor?: string;
    color?: string;
    height?: string;
    radius?: string;
    cursor?: string;
    bgColorHover?: string;
    onClick?:  (e: React.MouseEvent<HTMLButtonElement>) => void;

}
export const PrimaryButton: React.FunctionComponent<Props> = ({ text, type, disabled, width, bgColor, color, height, radius, cursor, bgColorHover, onClick}) => {
    return (
        <Button
            type={type}
            onClick={onClick}
            disabled={disabled}
            $width={width}
            $bgColor={bgColor}
            $bgColorHover={bgColorHover}
            $color={color}
            $height={height}
            $borderRadius={radius}
            $cursor={cursor}
        >
            {text}
        </Button>
    );
}; 