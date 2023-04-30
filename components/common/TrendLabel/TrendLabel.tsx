import { FC } from 'react';
import cn from 'classnames';
import { TrendLabelProps } from './TrendLabel.props';

export const TrendLabel: FC<TrendLabelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('rounded-[32px]', className)} {...props}>
      {children}
    </div>
  );
};
