import React from 'react';
import { Btn } from './Button.style';

interface ButtonProps {
  toDisplay: VoidFunction;
  bg: string;
  align: number;
  children?: React.ReactNode;
  rest?: object;
}

function Button({ align, bg, toDisplay, children, ...rest }: Readonly<ButtonProps>) {
  return (
    <Btn
      align={align}
      primary={bg}
      dark={bg === 'dark'}
      onClick={toDisplay}
      {...rest}
    >
      {children}
    </Btn>
  );
}

export default Button;
