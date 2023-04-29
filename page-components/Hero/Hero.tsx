import { Section } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import data from '@/data/partners.json';
import Image from 'next/image';

export const Hero = () => {
  return (
    <Section className="hero-bg pb-[220px] pt-[182px]">
      <div className="container min-h-[720px]">
        <div className="max-w-[510px]">
          <Title tag="h1" className="font-outline-1 mb-6">
            find the place to <br /> live{' '}
            <span className="font-outline-0 heading text-white">
              your dreams
            </span>
            <br />
            easily here
          </Title>
          <Paragraph className="mb-8">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </Paragraph>
          <Paragraph className="leading-[32/16]">Our Partnership</Paragraph>
          <ul className="flex gap-8">
            {data.partners.map(item => (
              <li key={item.id}>
                <Image
                  src={item.image}
                  alt={'partner'}
                  width={item.width}
                  height={item.height}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
