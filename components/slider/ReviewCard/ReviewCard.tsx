import { FC } from 'react';
import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import Image from 'next/image';

import { ReviewCardProps } from './ReviewCard.props';

import Star from '/public/images/review/start.svg';

export const ReviewCard: FC<ReviewCardProps> = ({
  text,
  title,
  path,
  personName,
  personText,
  personPath,
  rating,
}) => {
  return (
    <CardWrapper tag="div" className="relative w-[740px]">
      <div className="relative h-[400px] w-[740px]">
        <Image src={path} alt={'house image'} className="" fill object-cover />
      </div>
      <div className="absolute bottom-[-105px] left-1/2 w-full max-w-[612px] -translate-x-1/2 transform rounded-[16px] bg-white p-8">
        <Title
          tag="h3"
          className="mb-4 !text-[20px] font-semibold leading-[calc(25/20)]"
        >
          {title}
        </Title>
        <Paragraph variant="secondary" className="mb-4 font-normal text-dark">
          {text}
        </Paragraph>

        <div className="flex justify-between">
          <div className="flex">
            <div className="my-auto mr-6">
              <div className="relative h-10 w-10">
                <Image src={personPath} alt={'avatar'} fill object-cover />
              </div>
            </div>
            <div>
              <Title
                tag="h3"
                className="mb-[4px] line-clamp-1 !text-[14px] leading-[calc(22/14)]"
              >
                {personName}
              </Title>
              <Paragraph variant="secondary" className="line-clamp-1 ">
                {personText}
              </Paragraph>
            </div>
          </div>
          <div className="flex items-end gap-4">
            <Star width={32} height={32} />
            <Paragraph className="!text-[20px] font-semibold leading-[calc(28/20)] text-dark">
              {rating}
            </Paragraph>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
