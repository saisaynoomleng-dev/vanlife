import { TitleProps } from '@/app/_types/definition';
import clsx from 'clsx';

const Title = ({ children, as: Comp = 'h1', size, className }: TitleProps) => {
  return (
    <Comp
      className={clsx(
        'font-bold capitalize',
        size === 'lg' && 'text-[5rem]',
        size === 'md' && 'text-[3rem]',
        size === 'sm' && 'text-[2.5rem]',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;
