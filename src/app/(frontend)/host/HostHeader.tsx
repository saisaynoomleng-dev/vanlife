import NavLink from '@/components/NavLink';
import { sanityFetch } from '@/sanity/lib/live';
import { HOST_NAV_QUERY } from '@/sanity/lib/queries';

const HostHeader = async () => {
  const { data } = await sanityFetch({ query: HOST_NAV_QUERY });

  if (!data?.links) {
    return null;
  }
  return (
    <header className="px-5">
      <nav className="flex gap-5 items-center">
        {data?.links.map((link) => (
          <NavLink key={link.name} name={link.name} url={link.url!} />
        ))}
      </nav>
    </header>
  );
};

export default HostHeader;
