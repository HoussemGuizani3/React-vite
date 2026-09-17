import styled from "styled-components";


const Text =styled.span<{
    $color?: string;
    $size?:string;
    $weight?: string;
}>`
    color: ${props => props.$color || '#757373;'};
    text-align: start;
    font-size:${props => props.$size || '16px'};
    font-weight: ${props => props.$weight || '300'};
`
interface props{
    text: string;
    color?: string;
    size?: string;
    weight?: string;
}
export const TextMuted: React.FC<props> = ({text,color, size, weight}) => {
    return(
        <Text
        $color={color} 
        $size={size}
        $weight={weight}
        >{text}</Text>
    );
}