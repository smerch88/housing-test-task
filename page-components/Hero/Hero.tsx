import { Section } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { SearchBar } from '@/components/common/SearchBar';
import { Title } from '@/components/typography/Title';
import data from '@/data/partners.json';
import sliderData from '@/data/headerslider.json';
import Image from 'next/image';
import { useState } from 'react';
import { ProgramsSlide } from '@/components/slider/ProgramsSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

export const Hero = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (newValue: string) => {
    setSearchValue(newValue);
  };
  return (
    <Section className="hero-bg pb-[230px] pt-[182px]">
      <div className="container relative">
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
          <SearchBar
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search for the location you want!"
            className="mb-8"
          />
          <Paragraph className="leading-[32/16]">Our Partnership</Paragraph>
          {/* partners */}
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
          {/*end of partners */}
        </div>
        <div className="absolute bottom-[-52px] right-0 w-[50%] pl-6">
          <Swiper
            wrapperTag="ul"
            grabCursor={false}
            // slidesPerView={'auto'}
            // rewind={true}
            loop={true}
            modules={[Autoplay]}
            allowTouchMove={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // 320: {
              //   slidesPerView: 1,
              //   spaceBetween: 15,
              // },
              768: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
            }}
          >
            {sliderData.slides.map(slide => (
              <SwiperSlide tag="li" key={slide.id} className="m-0">
                <ProgramsSlide
                  id={slide.id}
                  text={slide.text}
                  title={slide.title}
                  path={slide.path}
                  width={slide.width}
                  height={slide.height}
                />{' '}
              </SwiperSlide>
            ))}{' '}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};
