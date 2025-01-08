import React from 'react';
import styled from 'styled-components';

interface ButtonProps { // Cambiado a ButtonProps para evitar confusión con el componente
  text: string;
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  ariaLabel?: string;
  hoverColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  font-weight: bold;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: ${ (props: ButtonProps) => props.backgroundColor };
  color: ${ (props: ButtonProps) => props.textColor };
  border: ${ (props: ButtonProps) => props.borderWidth } solid ${ (props: ButtonProps) => props.borderColor };
  border-radius: ${ (props: ButtonProps) => props.borderRadius };
  aria-label: ${ (props: ButtonProps) => props.ariaLabel };
  transition: background-color 0.3s ease; // Transición suave

  &:hover {
    background-color: ${ (props: ButtonProps) => props.hoverColor || props.backgroundColor };
  }
`;

const Button: React.FC<ButtonProps> = ({ // Usando React.FC para tipado más claro
  text,
  backgroundColor,
  textColor,
  borderColor = 'transparent',
  borderWidth = '1px',
  borderRadius = '4px',
  ariaLabel,
  hoverColor,
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    textColor={textColor}
    borderColor={borderColor}
    borderWidth={borderWidth}
    borderRadius={borderRadius}
    ariaLabel={ariaLabel}
    hoverColor={hoverColor}
    text={text}
  >
    {text}
  </StyledButton>
);

export default Button;