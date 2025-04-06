import { CallToActionProps } from '@/app/_types/definition';
import clsx from 'clsx';
import Link from 'next/link';

const CallToAction = ({
  href,
  children,
  variant,
  className,
}: CallToActionProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        `text-brand-white rounded-sm p-2 font-semibold text-center`,
        variant === 'orange' && 'bg-brand-orange',
        variant === 'black' && 'bg-brand-black-900',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default CallToAction;
