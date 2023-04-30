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
}) => {
  return (
    <div className={cn('relative flex rounded-[32px] border p-1', className)}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-6">
        {icon == 'geotag' && <GeoTag width="24px" height="24px" />}
        {icon == 'envelope' && <Envelope width="24px" height="24px" />}
      </span>
      <input
        type="text"
        className="w-full rounded-[32px] border-none bg-transparent pl-14"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Button
        type="button"
        variant="secondary"
        arrow="right"
        onClick={() => console.log('search')}
      >
        Search
      </Button>
    </div>
  );
};
