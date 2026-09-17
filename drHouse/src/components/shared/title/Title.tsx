import styled from 'styled-components';

interface TitleSpanProps {
  customColor?: string;
  customSize?: string;
  customMargin?: string;
  customWeight?: string;
}

interface TitleProps {
  text: string;
  color?: string;
  size?: string;
  marginLeft?: string;
  weight?: string;
}

const TitleSpan = styled.h2<TitleSpanProps>`
  display: block;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
  color: ${props => props.customColor || '#1a1a1a'};
  font-size: ${props => props.customSize || '16px'};
  font-weight: ${props => props.customWeight || '700'};
  text-align: start;
  margin-left: ${props => props.customMargin || '0'};
`;

export const Title = ({ text, color, size, marginLeft, weight }: TitleProps) => {
  return (
    <TitleSpan
      customColor={color}
      customSize={size}
      customMargin={marginLeft}
      customWeight={weight}
    >
      {text}
    </TitleSpan>
  );
};