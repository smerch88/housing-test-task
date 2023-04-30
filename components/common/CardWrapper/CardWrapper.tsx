import { FC } from 'react';
import cn from 'classnames';
import { CardWrapperProps } from './CardWrapper.props';

export const CardWrapper: FC<CardWrapperProps> = ({
  tag,
  children,
  className,
  ...props
}) => {
  const Tag = tag ?? 'li';

  return (
    <Tag className={cn('rounded-[32px]', className)} {...props}>
      {children}
    </Tag>
  );
};
