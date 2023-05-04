import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';

import data from '@/data/review.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ReviewCard } from '@/components/slider/ReviewCard';
import 'swiper/css/pagination';

export const Review = () => {
  return (
    <Section className="review-bg relative pb-[120px] notXl:pb-[40px]">
      <div className="container">
        <Title tag="h2" className="mb-10 text-center">
          What Our User Say About Us
        </Title>
        <Swiper
          pagination={{
            clickable: true,
            type: 'bullets',
            dynamicBullets: true,
          }}
          className="!pb-[140px] "
          wrapperTag="ul"
          grabCursor={true}
          loop={true}
          initialSlide={0}
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1440: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {data.slides.map(card => (
            <SwiperSlide
              tag="li"
              key={card.id}
              className="m-0 !flex !justify-center"
            >
              <ReviewCard
                id={card.id}
                path={card.path}
                title={card.title}
                text={card.text}
                personName={card.personName}
                personText={card.personText}
                personPath={card.personPath}
                rating={card.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};
