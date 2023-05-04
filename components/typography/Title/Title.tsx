import cn from 'classnames';
import { TitleProps } from './Title.props';

export const Title = ({
  tag,
  children,
  className,
  content,
}: TitleProps): JSX.Element => {
  const Tag = tag ?? 'h2';

  return (
    <Tag
      className={cn(className, 'capitalize text-headline', {
        ['text-[40px] font-bold leading-[calc(5/4)] notXl:text-[30px]']:
          tag == 'h1',
        ['leading-[calc(40/32) notXl:text-base] text-[32px] font-semibold']:
          tag == 'h2',
        ['leading-[calc(32/18)	]	text-lg font-medium	notXl:text-base']:
          tag == 'h3',
      })}
      {...(content ? { dangerouslySetInnerHTML: { __html: content } } : {})}
    >
      {children}
    </Tag>
  );
};
