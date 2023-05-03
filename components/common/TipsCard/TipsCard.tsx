import { FC } from 'react';
import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import Image from 'next/image';
import Clock from '@/public/images/tips/clock.svg';
import cn from 'classnames';

import { TipsCardProps } from './TipsCard.props';

export const TipsCard: FC<TipsCardProps> = ({
  id,
  personName,
  personPath,
  title,
  path,
  ttr,
  date,
  big = false,
  extratext,
}) => {
  return (
    <CardWrapper tag={big ? 'div' : 'li'} className="relative">
      <div className={cn('flex gap-8', big && 'flex-col gap-6')}>
        <div
          className={cn('relative', {
            'h-[280px] w-[560px]': big,
            'h-[144px] w-[200px]': !big,
          })}
        >
          <Image
            src={path}
            alt={'house image'}
            className="rounded-[16px]"
            fill
            object-cover
          />
        </div>
        <div className={big ? 'w-full' : 'max-w-[340px]'}>
          <div className="mb-3 flex items-center gap-4">
            <div className="relative h-[32px] w-[32px]">
              <Image
                src={personPath}
                alt={'person image'}
                className="rounded-[16px]"
                fill
                object-cover
              />
            </div>
            <Paragraph className="!text-dark" variant="secondary">
              {personName}
            </Paragraph>
          </div>
          <Title tag="h3" className={cn('mb-4', big && '!text-[24px]')}>
            {title}
          </Title>
          {big && (
            <Paragraph
              className={cn('mb-4', big && 'mb-3')}
              variant="secondary"
            >
              {extratext}
            </Paragraph>
          )}
          <div className="flex gap-3">
            <Clock width={24} height={24} />
            <Paragraph
              variant="secondary"
              className="relative !font-normal !leading-[calc(24/14)] after:absolute after:bottom-1/2 after:right-[-6px] after:my-auto after:h-[16px] after:w-[1px] after:translate-y-1/2 after:transform after:bg-secondary after:content-['']"
            >
              {ttr}
            </Paragraph>
            <Paragraph
              variant="secondary"
              className="!font-normal !leading-[calc(24/14)]"
            >
              {date}
            </Paragraph>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
