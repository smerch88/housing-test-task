import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import Bed from '/public/images/sell/bed.svg';
import Car from '/public/images/sell/car.svg';
import Bath from '/public/images/sell/bath.svg';
import Stairs from '/public/images/sell/stairs.svg';
import Image from 'next/image';
import { Button } from '@/components/button/Button';
import data from '@/data/readyslider.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

export const Ready = () => {
  return (
    <Section className="sell-bg relative pb-[120px] notXl:pb-[40px]">
      <div className="container">
        <div className="grid grid-cols-2 xl:ml-10 notXl:grid-cols-1">
          <div>
            <Title tag="h2" className="mb-4 xl:mt-[58px]">
              Let’s tour and see our house!
            </Title>
            <Paragraph className="mb-4 max-w-[420px]">
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </Paragraph>
            <Title
              tag="h3"
              className="mb-4 max-w-[420px] text-[16px] leading-[calc(28/16)]"
            >
              House Detail
            </Title>
            <ul className="mb-16 grid grid-cols-2 grid-rows-2 gap-y-4 notXl:mb-6">
              <li className="items-center gap-4 xl:flex">
                <Bed width={32} height={32} />
                <Paragraph className="font-medium leading-[calc(20/16)] text-dark">
                  4 Bedrooms
                </Paragraph>
              </li>
              <li className="flex items-center gap-4">
                <Bath width={32} height={32} />
                <Paragraph className="font-medium leading-[calc(20/16)] text-dark">
                  2 Bathrooms
                </Paragraph>
              </li>
              <li className="flex items-center gap-4">
                <Car width={32} height={32} />
                <Paragraph className="font-medium leading-[calc(20/16)] text-dark">
                  1 Carport
                </Paragraph>
              </li>
              <li className="flex items-center gap-4">
                <Stairs width={32} height={32} />
                <Paragraph className="font-medium leading-[calc(20/16)] text-dark">
                  2 Floors
                </Paragraph>
              </li>
            </ul>
            <div className="flex notXl:mb-6 notXl:flex-wrap">
              <div className="my-auto mr-6 notXl:mb-6">
                <Image
                  src={'/images/featuredSlides/person1.png'}
                  alt={'avatar'}
                  width={56}
                  height={56}
                />
              </div>
              <div className="xl:mr-[60px] notXl:mb-6">
                <Title tag="h3" className="line-clamp-1 leading-[calc(24/18)]">
                  Dianne Russell
                </Title>
                <Paragraph variant="secondary" className="line-clamp-1 ">
                  Manager Director
                </Paragraph>
              </div>
              <Button variant="secondary" icon="phone">
                Contact Now
              </Button>
            </div>
          </div>
          <div className="relative xl:h-[459px] notXl:h-[200px]">
            <Swiper
              className="h-[416px] w-[488px] notXl:h-[200px] notXl:w-auto"
              wrapperTag="ul"
              grabCursor={false}
              loop={true}
              initialSlide={0}
              modules={[Autoplay]}
              allowTouchMove={false}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1440: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
              }}
            >
              {data.slides.map(card => (
                <SwiperSlide tag="li" key={card.id} className="m-0">
                  <Image
                    src={card.path}
                    alt="house"
                    fill
                    object-fit="cover"
                    object-position="center"
                    className="rounded-[4px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute bottom-0 left-0 z-50 notXl:hidden">
              <Swiper
                className="h-[168px] w-[296px]"
                wrapperTag="ul"
                grabCursor={false}
                loop={true}
                initialSlide={1}
                modules={[Autoplay]}
                allowTouchMove={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1440: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                }}
              >
                {data.slides.map(card => (
                  <SwiperSlide tag="li" key={card.id} className="m-0">
                    <Image
                      src={card.path}
                      alt="house"
                      fill
                      object-fit="cover"
                      className="rounded-[4px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute bottom-0 left-[308px] z-50 notXl:hidden">
              <Swiper
                className="h-[80px] w-[200px]"
                wrapperTag="ul"
                grabCursor={false}
                loop={true}
                initialSlide={2}
                modules={[Autoplay]}
                allowTouchMove={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                  },
                  1440: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                  },
                }}
              >
                {data.slides.map(card => (
                  <SwiperSlide tag="li" key={card.id} className="m-0">
                    <Image
                      src={card.path}
                      alt="house"
                      fill
                      object-position="center"
                      className="rounded-[4px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
