import { FC } from 'react';
import { Link } from 'react-scroll';

import { IconLink } from '@/components/button/IconLink';
import { Logo } from '@/components/typography/Logo';

import Facebook from '@/public/images/social/facebook.svg';
import Twitter from '@/public/images/social/twitter.svg';
import Instagram from '@/public/images/social/instagram.svg';
import data from '@/data/footer.json';

import { MenuItemProps } from '../Header/Header.props';

export const Footer: FC = () => {
  return (
    <footer className="footer-bg pb-10 xl:pb-[120px]">
      <div className="container text-lg xl:flex xl:justify-between">
        <div>
          <div className="mb-6 mdOnly:flex mdOnly:justify-between">
            <div className="mb-6 smOnly:mx-auto">
              <Logo
                className="mb-4 block smOnly:mx-auto"
                width={36}
                height={36}
              />
              <p className="mb-6 max-w-[320px] text-sm leading-[1.71] text-secondary opacity-75 notXl:text-center">
                We provide information about properties such as houses, villas
                and apartments to help people find their dream home
              </p>
              <div className="flex gap-5 smOnly:justify-center">
                <IconLink
                  href={data.social.facebook}
                  label="Посилання на Behance"
                  className="duration-300 hover:scale-110 focus:scale-110"
                >
                  <Facebook />
                </IconLink>

                <IconLink
                  href={data.social.twitter}
                  label="Посилання на Instagram"
                  className="duration-300 hover:scale-110 focus:scale-110"
                >
                  <Twitter />
                </IconLink>

                <IconLink
                  href={data.social.instagramm}
                  label="Посилання на Linkedin"
                  className="duration-300 hover:scale-110 focus:scale-110"
                >
                  <Instagram />
                </IconLink>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-24">
          <div className="hidden xl:block">
            <h2 className="mb-6 text-2xl font-semibold">Property</h2>
            <nav>
              <ul className="block xl:flex xl:flex-col xl:gap-[18px] ">
                {data.edges.PropertyItems.map((menuItem: MenuItemProps) => (
                  <li key={menuItem.id} className="group relative">
                    <Link
                      className={`flex cursor-pointer flex-col text-sm leading-[calc(18/14)] text-secondary opacity-75 duration-300 hover:outline-primary focus:outline-primary group-hover:text-primary group-focus:text-primary`}
                      href=""
                      offset={-50}
                      smooth={true}
                      to={menuItem.url}
                    >
                      {menuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden xl:block">
            <h2 className="mb-6 text-2xl font-semibold">Article</h2>
            <nav>
              <ul className="block xl:flex xl:flex-col xl:gap-[18px] ">
                {data.edges.ArticleItems.map((menuItem: MenuItemProps) => (
                  <li key={menuItem.id} className="group relative">
                    <Link
                      className={`flex cursor-pointer flex-col text-sm leading-[calc(18/14)] text-secondary opacity-75 duration-300 hover:outline-primary focus:outline-primary group-hover:text-primary group-focus:text-primary`}
                      href=""
                      offset={-50}
                      smooth={true}
                      to={menuItem.url}
                    >
                      {menuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden xl:block">
            <h2 className="mb-6 text-2xl font-semibold">Contact</h2>
            <nav>
              <ul className="block xl:flex xl:flex-col xl:gap-[18px] ">
                {data.edges.ContactItems.map((menuItem: MenuItemProps) => (
                  <li key={menuItem.id} className="group relative">
                    <Link
                      className={`flex cursor-pointer flex-col text-sm leading-[calc(18/14)] text-secondary opacity-75 duration-300 hover:outline-primary focus:outline-primary group-hover:text-primary group-focus:text-primary`}
                      href=""
                      offset={-50}
                      smooth={true}
                      to={menuItem.url}
                    >
                      {menuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
