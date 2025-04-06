'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({
  url,
  name,
  className,
}: {
  url: string;
  name: string | null;
  className?: string;
}) => {
  const pathname = usePathname();

  if (url === null && name === null) {
    return null;
  }
  return (
    <Link
      href={url}
      className={clsx(
        ``,
        pathname === url && 'text-brand-orange font-semibold',
        className,
      )}
    >
      {name}
    </Link>
  );
};

export default NavLink;
