import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'secondary';
  arrow?: 'right' | 'down';
  icon?: 'house' | 'villa' | 'apartments' | 'phone';
  link?: boolean;
}
