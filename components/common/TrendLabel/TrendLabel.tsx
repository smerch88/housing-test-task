import { FC } from 'react';
import cn from 'classnames';
import { TrendLabelProps } from './TrendLabel.props';
import Best from 'public/images/labels/best.svg';
import New from 'public/images/labels/new.svg';
import Popular from 'public/images/labels/popular.svg';

export const TrendLabel: FC<TrendLabelProps> = ({
  className,
  tag,
  ...props
}) => {
  return (
    <div className={cn('inline-block rounded-[32px]', className)} {...props}>
      {tag === 'popular' && (
        <div className="flex gap-[10px] rounded-[32px] bg-[#FEE2E2] px-4 py-2 text-[#EF4444]">
          <Popular width="16px" height="16px" />
          <p className="inline-block text-[14px] leading-[calc(18/14)]">
            Popular
          </p>
        </div>
      )}
      {tag === 'best' && (
        <div className="flex gap-[10px] rounded-[32px] bg-[#D1FAE5] px-4 py-2 text-[#047857]">
          <Best width="16px" height="16px" />
          <p className="inline-block text-[14px] leading-[calc(18/14)]">
            Best Deals
          </p>
        </div>
      )}
      {tag === 'new' && (
        <div className="flex gap-[10px] rounded-[32px] bg-[#DBEAFE] px-4 py-2 text-[#1D4ED8]">
          <New width="16px" height="16px" />
          <p className="inline-block text-[14px] leading-[calc(18/14)]">
            New house
          </p>
        </div>
      )}
    </div>
  );
};
