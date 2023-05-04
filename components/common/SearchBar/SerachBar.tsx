import cn from 'classnames';
import Envelope from 'public/images/searchbar/envelope.svg';
import GeoTag from 'public/images/searchbar/geotag.svg';
import { FC } from 'react';
import { Button } from '../../button/Button';
import { SearchBarProps } from './SearchBar.props';

export const SearchBar: FC<SearchBarProps> = ({
  value,
  icon = 'geotag',
  onChange,
  placeholder = 'Search',
  className,
  buttonText = 'Search',
  arrow = true,
}) => {
  return (
    <div
      className={cn(
        'relative flex rounded-[32px] border bg-white  p-1',
        className,
      )}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-6">
        {icon == 'geotag' && <GeoTag width="24px" height="24px" />}
        {icon == 'envelope' && <Envelope width="24px" height="24px" />}
      </span>
      <input
        type="text"
        className="w-full text-ellipsis rounded-[32px] border-none bg-white pl-14 text-secondary"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <div className="whitespace-nowrap">
        {arrow ? (
          <Button
            type="button"
            variant="secondary"
            arrow="right"
            onClick={() => console.log('search')}
            className="w-full"
          >
            {buttonText}
          </Button>
        ) : (
          <Button
            type="button"
            variant="secondary"
            onClick={() => console.log('subscribe')}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
