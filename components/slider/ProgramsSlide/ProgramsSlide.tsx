import { FC } from 'react';
import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import Image from 'next/image';

import { ProgramsSlideProps } from './ProgramsSlide.props';

export const ProgramsSlide: FC<ProgramsSlideProps> = ({
  text,
  title,
  path,
  width,
  height,
}) => {
  return (
    <CardWrapper
      tag="div"
      className="inline-block max-h-[104px] items-center bg-white p-6"
    >
      <div className="flex">
        <div className="mr-4">
          <Image src={path} alt={'comment'} width={width} height={height} />
        </div>
        <div>
          <Title
            tag="h3"
            className="mb-[2px] line-clamp-1 text-[16px] leading-[calc(24/16)]"
          >
            {title}
          </Title>
          <Paragraph className="line-clamp-1" variant="secondary">
            {text}
          </Paragraph>
        </div>
      </div>
    </CardWrapper>
  );
};
