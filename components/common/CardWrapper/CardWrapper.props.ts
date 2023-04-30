import { ReactNode } from 'react';

export interface CardWrapperProps {
  tag?: 'li' | 'div';
  className?: string;
  children: ReactNode;
}
