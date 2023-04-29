import { ReactNode } from 'react';

export interface ParagraphProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: ReactNode;
}
