import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  className = '',
  ...props
}) => (
  <button className={`${color} ${className || ''}`} type="button" {...props}>
    {children}
  </button>
);

export default Button;
