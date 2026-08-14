import styled from "styled-components";


const TitleSpan = styled.span<{
    $color?: string;
    $size?: string;
    $fontfamily?: string;
    $fontweight?: string;
}>`
    color: ${props => props.$color || '#242424'};
    font-size: ${props => props.$size || '16px'};
    font-family: ${props => props.$fontfamily || "'Inter', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"};    
    font-weight: ${props => props.$fontweight || 900};
    text-align: start;
    
`;

interface props {
    text: string;
    color?: string;
    size?: string;
    fontfamily?: string;
    fontweight?: string;

}
export const Title: React.FunctionComponent<props> = ({ text, color, size, fontfamily, fontweight }) => {
    return (

        <TitleSpan
            $color={color}
            $size={size}
            $fontfamily={fontfamily}
            $fontweight={fontweight}
        >{text}
        </TitleSpan>

    );
}