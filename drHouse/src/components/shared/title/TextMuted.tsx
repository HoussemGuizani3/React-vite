import styled from "styled-components";

const MutedText = styled.span<{
  $color?: string;
  $size?: string;
  $margin?: string;
}>`
  font-size: ${props => props.$size || "12px"};
  font-weight: 600;
  color:${props => props.$color || "inherit"};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: ${props => props.$margin || "0"};
  
`;

interface TextMutedProps {
  text: string;
  color?: string;
  size?: string;
  margin?: string;
}

export const TextMuted: React.FunctionComponent<TextMutedProps>= ({ text, color, size, margin }: TextMutedProps) => {
  return <MutedText
    $color={color}
    $size={size}
    $margin={margin}>
    {text}
  </MutedText>;
};
