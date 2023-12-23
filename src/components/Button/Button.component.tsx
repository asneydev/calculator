import React from 'react';
import { Btn } from './Button.style';

interface ButtonProps {
  bg: string;
  align?: number;
  children?: React.ReactNode;
  onClick?: () => void;
  rest?: object;
}

function Button({
  align,
  bg,
  children,
  onClick,
  ...rest
}: Readonly<ButtonProps>) {
  return (
    <Btn align={align} primary={bg} dark={bg === 'dark'} {...rest}>
      {children}
    </Btn>
  );
}

export default Button;
