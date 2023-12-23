import React from 'react';
import { Btn } from './Button.style';

interface ButtonProps {
  bg: string;
  children?: React.ReactNode;
  onClick?: () => void;
  rest?: object;
}

function Button({ bg, children, onClick, ...rest }: Readonly<ButtonProps>) {
  return (
    <Btn primary={bg} dark={bg === 'dark'} onClick={onClick} {...rest}>
      {children}
    </Btn>
  );
}

export default Button;
