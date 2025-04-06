import { BoundedProps } from '@/app/_types/definition';
import clsx from 'clsx';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return <Comp className={clsx(`py-5`, className)}>{children}</Comp>;
};

export default Bounded;
