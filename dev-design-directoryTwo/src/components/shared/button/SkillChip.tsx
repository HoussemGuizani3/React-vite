import React from 'react';
import styled from 'styled-components';

const Button = styled.button<{
    $bgcolor?: string;
    $color?: string;
    $width?: string;
    $height?: string;
    $radius?: string;
    $border?: string;
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.$width || 'fit-content'};
    height: ${props => props.$height || 'auto'};
    padding: 6px 14px; 
    background-color: ${props => props.$bgcolor || '#EEF2F5'}; 
    color: ${props => props.$color || '#2D3748'};
    border-radius: ${props => props.$radius || '20px'};
    border: ${props => props.$border || '1px solid transparent'};

    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #E2E8F0;
        transform: translateY(-1px);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

interface Props {
    text: string;
    type: 'button' | 'submit' | 'reset'; 
    disabled?: boolean;
    bgcolor?: string;
    color?: string;
    width?: string;
    height?: string; 
    radius?: string;
    border?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SkillChip: React.FunctionComponent<Props> = ({
    text,
    type ,
    disabled,
    bgcolor,
    color,
    width,
    height,
    radius,
    border,
    onClick
}) => {
    return (
        <Button
            type={type}
            onClick={onClick} 
            disabled={disabled}
            $bgcolor={bgcolor}
            $color={color}
            $width={width}
            $height={height}
            $radius={radius}
            $border={border} 
        >
            {text}
        </Button>
    );
};