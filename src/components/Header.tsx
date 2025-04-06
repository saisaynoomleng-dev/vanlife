import { sanityFetch } from '@/sanity/lib/live';
import { MAIN_NAV_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';

const Header = async () => {
  const { data } = await sanityFetch({ query: MAIN_NAV_QUERY });

  if (!data?.links) {
    return null;
  }

  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/">
        <Image src="/logo.png" width={100} height={100} alt="" priority />
      </Link>

      <nav
        role="navigation"
        aria-label="Main Navigation Menu"
        className="flex gap-3 items-center"
      >
        {data.links.map((link) => (
          <NavLink key={link.name} name={link.name!} url={link.url!} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
