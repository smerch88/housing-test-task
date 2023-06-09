import cn from 'classnames';

import House from 'public/images/buttonIcons/house.svg';
import Phone from 'public/images/buttonIcons/phone.svg';
import Villa from 'public/images/buttonIcons/villa.svg';
import Apartments from 'public/images/buttonIcons/apartments.svg';
import ArrowDown from 'public/images/arrows/arrow-down.svg';
import ArrowRight from 'public/images/arrows/arrow-right.svg';
import { ButtonProps } from './Button.props';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  arrow,
  icon,
  link = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex items-center gap-2 rounded-[32px] border-[1px] border-solid px-6 py-3 transition-all duration-300	ease-in-out notXl:w-full		',
        className,
        {
          ['border-buttonBg bg-buttonBg fill-current text-accent  hover:bg-accent hover:text-white']:
            variant == 'primary',
          ['border-border fill-current text-secondary hover:border-accent hover:bg-buttonBg hover:text-accent']:
            variant == 'ghost',
          ['border-accent bg-accent fill-current text-white hover:border-accent hover:bg-buttonBg hover:text-accent']:
            variant == 'secondary',
        },
        icon && 'text-[18px] font-medium leading-[calc(28/18)]',
      )}
      {...props}
    >
      {icon === 'phone' && <Phone className={'h-5 w-5 fill-current'} />}
      {icon === 'house' && <House className={'h-5 w-5 fill-current'} />}
      {icon === 'villa' && <Villa className={'h-5 w-5 fill-current'} />}
      {icon === 'apartments' && (
        <Apartments className={'h-5 w-5 fill-current'} />
      )}
      {children}
      {arrow === 'down' && <ArrowDown className={'h-5 w-5 fill-current'} />}
      {arrow === 'right' && <ArrowRight className={'h-5 w-5 fill-current'} />}
    </button>
  );
};
