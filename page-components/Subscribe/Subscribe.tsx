import { SearchBar } from '@/components/common/SearchBar';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { useState } from 'react';

export const Subscribe = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (newValue: string) => {
    setSearchValue(newValue);
  };
  return (
    <Section className="relative pb-[120px] notXl:pb-[40px]">
      <div className="container">
        <div className="subscribe-bg w-full rounded-[32px] bg-auto bg-no-repeat py-[65px]">
          <Title tag="h2" className="mx-auto mb-8 max-w-[450px] text-center">
            Subscribe For More Info and update from Hounter
          </Title>
          <SearchBar
            value={searchValue}
            onChange={handleSearchChange}
            icon="envelope"
            placeholder="Your email here"
            buttonText="Subscribe Now"
            arrow={false}
            className="mx-auto max-w-[496px]"
          />
        </div>
      </div>
    </Section>
  );
};
