import { FC } from 'react';
import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import Image from 'next/image';

import { FeaturedHouseCardProps } from './FeaturedHouseCard.props';
import { TrendLabel } from '@/components/common/TrendLabel';

export const FeaturedHouseCard: FC<FeaturedHouseCardProps> = ({
  text,
  title,
  path,
  width,
  height,
  personName,
  personText,
  personPath,
  personWidth,
  personHeight,
  tag,
  type,
}) => {
  return (
    <CardWrapper tag="div" className="max-h-[552px]">
      <div className="relative">
        <Image
          src={path}
          alt={'house image'}
          width={width}
          height={height}
          className="mb-6"
        />
        <TrendLabel tag={tag} className="absolute bottom-4 left-4" />
      </div>
      <Title tag="h3" className="mb-2  text-[24px] leading-[calc(32/24)]">
        {title}
      </Title>
      <Paragraph className="mb-6 text-[20px] leading-[calc(32/20)] text-dark">
        {text}
      </Paragraph>

      <div className="flex">
        <div className="my-auto mr-4">
          <Image
            src={personPath}
            alt={'avatar'}
            width={personWidth}
            height={personHeight}
          />
        </div>
        <div>
          <Title tag="h3" className="line-clamp-1 leading-[calc(24/18)]">
            {personName}
          </Title>
          <Paragraph variant="secondary" className="line-clamp-1">
            {personText}
          </Paragraph>
        </div>
      </div>
    </CardWrapper>
  );
};
