import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: #4A7FA7;
  border: 1px solid #4A7FA7;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4A7FA7;
    color: white;   
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const SecondaryButton = ({
    text,
    type = 'button',
}: {
    text: string;
    type?: 'button' | 'submit' | 'reset';
}) => {
    return (
        <Button type={type}>
            {text}
        </Button>
    );
};