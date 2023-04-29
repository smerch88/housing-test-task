import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import LogoImg from '@/public/images/logo.svg';
import { LogoProps } from './Logo.props';
import { routes } from '@/utils/routes';

export const Logo: FC<LogoProps> = ({
  sticky,
  width = 36,
  height = 36,
  className,
}) => {
  return (
    <Link
      href={routes.HOME}
      className={cn(
        'block hover:outline-primary focus:outline-primary',
        { ['py-4']: sticky },
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <LogoImg width={width} height={height} aria-label="Логотип сайту" />
        <p className="font-bold leading-[calc(20/16)] text-primary">Hounter</p>
      </div>
    </Link>
  );
};
