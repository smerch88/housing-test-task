import cn from 'classnames';

import Arrow from 'public/images/right-arrow.svg';
import { ButtonProps } from './Button.props';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  arrow = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex w-full max-w-[212px] items-center gap-3 rounded-sm border-2 border-solid p-[10px] text-lg',
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
    </button>
  );
};
