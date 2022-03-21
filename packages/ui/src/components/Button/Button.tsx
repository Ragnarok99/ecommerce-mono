import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, color }) => (
  <button className={color} type="button">
    {children}
  </button>
);

export default Button;
