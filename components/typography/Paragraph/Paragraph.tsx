import { FC } from 'react';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph: FC<ParagraphProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        '',
        {
          'text-base leading-[calc(28/16)] opacity-75': variant === 'primary',
          'font-font-medium text-sm leading-[calc(22/14)] text-secondary':
            variant === 'secondary',
        },
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
