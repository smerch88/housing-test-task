import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';

import { Button } from '@/components/button/Button';
import { FeaturedHouseCard } from '@/components/slider/FeaturedHouseCard';

import data from '@/data/featured.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNav } from '@/components/common/SwiperNav';
import { useState } from 'react';

export const Recomendations = () => {
  const [selectedType, setSelectedType] = useState('');

  const filteredSlides = selectedType
    ? data.slides.filter(slide => slide.type === selectedType)
    : data.slides;

  return (
    <Section className="relative pb-[120px]">
      <div className="container">
        <div className="absolute !z-[999999999] mb-10 flex pt-2">
          <Title tag="h2" className="ml-10 mr-[140px]">
            Featured House
          </Title>
          <div className="flex gap-8">
            <Button
              icon="house"
              variant={selectedType === 'house' ? 'primary' : 'ghost'}
              onClick={() => {
                selectedType === 'house'
                  ? setSelectedType('')
                  : setSelectedType('house');
              }}
            >
              House
            </Button>
            <Button
              icon="villa"
              variant={selectedType === 'villa' ? 'primary' : 'ghost'}
              onClick={() => {
                selectedType === 'villa'
                  ? setSelectedType('')
                  : setSelectedType('villa');
              }}
            >
              Villa
            </Button>
            <Button
              icon="apartments"
              variant={selectedType === 'apartment' ? 'primary' : 'ghost'}
              onClick={() => {
                selectedType === 'apartment'
                  ? setSelectedType('')
                  : setSelectedType('apartment');
              }}
            >
              Apartment
            </Button>
          </div>
        </div>

        <Swiper
          wrapperTag="ul"
          grabCursor={true}
          loop={true}
          breakpoints={{
            // 320: {
            //   slidesPerView: 1,
            //   spaceBetween: 15,
            // },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperNav className="absolute right-0 top-0 !z-[999999999]" />
          {filteredSlides.map(card => (
            <SwiperSlide tag="li" key={card.id} className="m-0">
              <FeaturedHouseCard
                id={card.id}
                path={card.path}
                title={card.title}
                text={card.text}
                width={card.width}
                height={card.height}
                personName={card.personName}
                personText={card.personText}
                personPath={card.personPath}
                personWidth={card.personWidth}
                personHeight={card.personHeight}
                tag={card.tag}
                type={card.type}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};
