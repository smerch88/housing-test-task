import { FC, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

import { BtnLink } from '@/components/button/BtnLink';
import { Logo } from '@/components/typography/Logo';

import { MenuItemProps } from './Header.props';
import data from '@/data/header.json';
import { Button } from '@/components/button/Button';

export const Header: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const isDesktop = useMediaQuery({ query: `(min-width: 1024px)` });

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  useEffect(() => {
    if (navbarOpen && !isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isDesktop, navbarOpen]);

  return (
    <header
      className={`absolute left-0 top-0 z-40 flex w-full items-center bg-transparent ${'shadow-header absolute'} pt-[46px]`}
    >
      <div className="container">
        <div className={cn('relative -mx-5 flex items-center justify-between')}>
          <div className="ml-5 max-w-[200px] md:ml-8">
            <Logo className="" />
          </div>

          <div className="flex w-full items-center justify-end">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="кнопка мобільного меню"
                className="absolute right-2 top-1/2 block translate-y-[-50%] rounded-lg px-[6px] py-[6px] xl:hidden"
              >
                <span
                  className={cn(
                    'relative my-1.5 block h-0.5 w-[26px] bg-primary transition-all duration-300 ',
                    navbarOpen ? ' top-[7px] rotate-45' : ' ',
                  )}
                />
                <span
                  className={cn(
                    'relative my-1.5 block h-0.5 w-[26px] bg-primary transition-all duration-300 ',
                    navbarOpen ? ' opacity-0' : ' ',
                  )}
                />
                <span
                  className={cn(
                    'relative my-1.5 ml-auto block h-0.5 w-[15px] bg-primary transition-all duration-300',
                    navbarOpen ? ' top-[-9px] w-[26px] -rotate-45' : ' ',
                  )}
                />
              </button>

              <nav
                id="navbarCollapse"
                className={cn(
                  'navbar notXl:shadow-header absolute right-0 top-0 z-30 w-full rounded bg-white px-6 py-16 duration-300 md:py-4 xl:visible xl:static xl:w-full xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 smOnly:landscape:py-4 mdOnly:landscape:py-4',
                  navbarOpen
                    ? 'visibility top-full opacity-100'
                    : 'invisible top-[120%] opacity-0',
                )}
              >
                <ul className="flex flex-col gap-6 xl:mr-14 xl:flex-row xl:gap-8 notXl:mb-10">
                  {data.menuItems.map((menuItem: MenuItemProps) => (
                    <li key={menuItem.id} className="group relative">
                      <Link
                        activeClass="text-primary"
                        className="flex cursor-pointer whitespace-nowrap rounded-[32px] border-2 border-solid border-white bg-btnLinkBg text-sm leading-[calc(18/14)] text-white hover:outline-primary focus:outline-primary group-hover:text-primary xl:inline-flex xl:px-4 xl:py-2 notXl:justify-center
                        "
                        href=""
                        duration={100}
                        offset={-50}
                        onClick={navbarToggleHandler}
                        smooth={true}
                        spy={true}
                        to={menuItem.url}
                      >
                        {menuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <BtnLink
                  className="mx-auto md:hidden"
                  href={'program'}
                  onClick={navbarToggleHandler}
                  scroll
                  variant="ghost"
                >
                  {data.btn}
                </BtnLink>
              </nav>
            </div>
          </div>
          <Button className="hidden min-w-[110px] text-[14px] leading-[calc(22/14)] text-accent_heavy md:ml-5 md:block md:text-center mdOnly:mr-20">
            {data.btn}
          </Button>
        </div>
      </div>
    </header>
  );
};
