import { FC } from 'react';
import { useSwiper } from 'swiper/react';
import cn from 'classnames';

import { SwiperNavProps } from './SwiperNav.props';
import Arrow from '@/public/images/feedback/arrow.svg';

export const SwiperNav: FC<SwiperNavProps> = ({ className = '' }) => {
  const swiper = useSwiper();

  return (
    <div className={cn('flex items-center justify-center gap-4', className)}>
      <button
        aria-label="Previous Slide"
        onClick={() => swiper.slidePrev()}
        className={`rounded-[32px] bg-border px-4 py-3 text-dark  duration-300 hover:bg-accent hover:text-white`}
      >
        <Arrow className="h-7 w-7 rotate-180 fill-current" />
      </button>

      <button
        aria-label="Next Slide"
        onClick={() => {
          swiper.slideNext();
        }}
        className={`rounded-[32px] bg-border px-4 py-3 text-dark  duration-300 hover:bg-accent hover:text-white`}
      >
        <Arrow className="h-7 w-7 fill-current" />
      </button>
    </div>
  );
};
