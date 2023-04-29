import Link, { LinkProps } from 'next/link';
import { Link as Scroll } from 'react-scroll';
import cn from 'classnames';

import Arrow from 'public/images/right-arrow.svg';
import { BtnLinkProps } from './BtnLink.props';
import { FC } from 'react';

export const BtnLink: FC<BtnLinkProps & LinkProps> = ({
  variant = 'primary',
  disabled = false,
  href,
  arrow = false,
  children,
  scroll,
  className,
  onClick,
  ...props
}) => {
  const disabledProps = disabled
    ? { role: 'link', 'aria-disabled': disabled }
    : {};

  if (scroll) {
    return (
      <Scroll
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onClick={onClick}
        to={href}
        smooth={true}
        offset={-50}
        duration={100}
        className={cn(
          'flex w-full max-w-[107px] cursor-pointer items-center gap-3 rounded-sm border-2 border-solid p-[10px] text-lg',
          className,
          !disabled && {
            ['text-white_light hover:bg-hover focus:bg-hover justify-center border-primary bg-primary duration-300']:
              variant == 'primary',
            ['border-white_light bg-white_light hover:shadow-button_hover justify-center text-primary duration-300']:
              variant == 'secondary',
            ['hover:bg-hover hover:text-white_light justify-center border-primary bg-transparent text-primary duration-300']:
              variant == 'ghost',
            ['max-w-auto justify-start border-none bg-transparent px-0 text-dark duration-300 hover:text-primary']:
              variant == 'simple',
          },
          disabled && {
            ['primary text-white_light pointer-events-none justify-center border-gray_light bg-gray_light']:
              variant == 'primary',
            ['border-disabled_secondary bg-disabled_secondary pointer-events-none justify-center text-primary ']:
              variant == 'secondary',
            ['pointer-events-none justify-center border-gray_light bg-transparent text-gray_light']:
              variant == 'ghost',
            ['pointer-events-none w-auto justify-start border-none px-0  text-gray_light']:
              variant == 'simple',
          },
        )}
      >
        {children}
      </Scroll>
    );
  }

  return (
    <Link legacyBehavior href={href} {...disabledProps}>
      <a
        className={cn(
          'flex w-full max-w-[212px] cursor-pointer items-center gap-3 rounded-sm border-2 border-solid p-[10px] text-lg',
          className,
          !disabled && {
            ['text-white_light hover:bg-hover focus:bg-hover justify-center border-primary bg-primary duration-300']:
              variant == 'primary',
            ['border-white_light bg-white_light hover:shadow-button_hover justify-center text-primary duration-300']:
              variant == 'secondary',
            ['hover:bg-hover hover:text-white_light justify-center border-primary bg-transparent text-primary duration-300']:
              variant == 'ghost',
            ['max-w-auto justify-start border-none bg-transparent px-0 text-dark duration-300 hover:text-primary']:
              variant == 'simple',
          },
          disabled && {
            ['primary text-white_light pointer-events-none justify-center border-gray_light bg-gray_light']:
              variant == 'primary',
            ['border-disabled_secondary bg-disabled_secondary pointer-events-none justify-center text-primary ']:
              variant == 'secondary',
            ['pointer-events-none justify-center border-gray_light bg-transparent text-gray_light']:
              variant == 'ghost',
            ['pointer-events-none w-auto justify-start border-none px-0  text-gray_light']:
              variant == 'simple',
          },
        )}
        {...props}
      >
        {children}
        {arrow && variant == 'simple' && (
          <Arrow className={'h-5 w-5 fill-current'} />
        )}
      </a>
    </Link>
  );
};
