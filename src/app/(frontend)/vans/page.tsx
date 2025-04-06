import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import VanCard from '@/components/VanCard';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { VANS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

const VansPage = async () => {
  const { data: vans } = await sanityFetch({ query: VANS_QUERY });

  return (
    <Bounded className="space-y-5 px-5 py-3">
      <div className="flex flex-col gap-5">
        <Title as="h3" size="sm">
          Explore our van options
        </Title>

        {/* filters */}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {vans.length > 0 ? (
          vans.map((van) => <VanCard key={van.slug?.current} {...van} />)
        ) : (
          <p>No Vans Data...</p>
        )}
      </div>
    </Bounded>
  );
};

export default VansPage;
