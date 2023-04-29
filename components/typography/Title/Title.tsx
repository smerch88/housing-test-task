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
        ['text-[40px] font-bold leading-[calc(5/4)]']: tag == 'h1',
        ['text-[32px] font-semibold leading-[calc(40/32)]']: tag == 'h2',
        ['text-lg	font-medium	leading-[calc(32/18)]']: tag == 'h3',
      })}
      {...(content ? { dangerouslySetInnerHTML: { __html: content } } : {})}
    >
      {children}
    </Tag>
  );
};
