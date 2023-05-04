import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';

import { Button } from '@/components/button/Button';
import { FeaturedHouseCard } from '@/components/slider/FeaturedHouseCard';

import data from '@/data/featured.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNav } from '@/components/common/SwiperNav';
import { useRef, useState, useEffect } from 'react';
import { Navigation } from 'swiper';

export const Recomendations = () => {
  const [selectedType, setSelectedType] = useState('');
  const [firstSlide, setFirstSlide] = useState(1);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filteredSlides = selectedType
    ? data.slides.filter(slide => slide.type === selectedType)
    : data.slides;

  useEffect(() => {
    if (filteredSlides.length > 0) {
      setFirstSlide(0);
    }
  }, [filteredSlides]);

  return (
    <Section className="relative pb-[120px] notXl:pb-[40px]">
      <div className="container">
        <div className="mb-10 pt-2 xl:flex">
          <Title tag="h2" className="xl:ml-10 xl:mr-[140px]">
            Featured House
          </Title>
          <div className="flex gap-8 xl:mr-[139px] notXl:mb-2 notXl:flex-wrap notXl:gap-2">
            <Button
              icon="house"
              variant={selectedType === 'house' ? 'primary' : 'ghost'}
              onClick={() => {
                setSelectedType(selectedType === 'house' ? '' : 'house');
              }}
            >
              House
            </Button>
            <Button
              icon="villa"
              variant={selectedType === 'villa' ? 'primary' : 'ghost'}
              onClick={() => {
                setSelectedType(selectedType === 'villa' ? '' : 'villa');
              }}
            >
              Villa
            </Button>
            <Button
              icon="apartments"
              variant={selectedType === 'apartment' ? 'primary' : 'ghost'}
              onClick={() => {
                setSelectedType(
                  selectedType === 'apartment' ? '' : 'apartment',
                );
              }}
            >
              Apartment
            </Button>
          </div>
          <SwiperNav prevRef={prevRef} nextRef={nextRef} />
        </div>
        {prevRef.current && nextRef.current && (
          <Swiper
            className="xl:ml-10"
            wrapperTag="ul"
            grabCursor={true}
            loop={true}
            initialSlide={firstSlide}
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
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
        )}
      </div>
    </Section>
  );
};
