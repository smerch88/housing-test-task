import { Button } from '@/components/button/Button';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import data from '@/data/tips.json';
import { TipsCard } from '@/components/common/TipsCard';

export const Tips = () => {
  return (
    <Section className="relative pb-[120px] pt-10">
      <div className="container">
        <Title tag="h2" className="mx-auto mb-6 max-w-[500px] text-center">
          Find out more about selling and buying homes
        </Title>
        <Button variant="secondary" className="mx-auto mb-10">
          More Artikel
        </Button>
        <div className="grid grid-cols-2 gap-[68px]">
          <ul className="flex flex-wrap gap-11">
            {data.cards
              .slice(0, 3)
              .map(({ id, personName, personPath, title, path, ttr, date }) => (
                <TipsCard
                  key={id}
                  id={id}
                  personName={personName}
                  personPath={personPath}
                  title={title}
                  path={path}
                  ttr={ttr}
                  date={date}
                />
              ))}
          </ul>
          <div>
            {data.cards
              .slice(3, 4)
              .map(({ id, personName, personPath, title, path, ttr, date }) => (
                <TipsCard
                  key={id}
                  id={id}
                  personName={personName}
                  personPath={personPath}
                  title={title}
                  path={path}
                  ttr={ttr}
                  date={date}
                  big
                  extratext="Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house"
                />
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
