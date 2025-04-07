import Bounded from '@/components/Bounded';
import HostVanCard from '@/components/HostVanCard';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { HOST_VANS_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';

const HostPage = async () => {
  const { data: vans } = await sanityFetch({ query: HOST_VANS_QUERY });

  console.log(vans);

  if (!vans) {
    return <p>NO Vans Data...</p>;
  }
  return (
    <Bounded className="p-5">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <Title as="h3">Your Listed Vans</Title>
          <Link href="/host/vans" className="underline underline-offset-2">
            View all
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          {vans.map((van) => (
            <HostVanCard key={van?.slug?.current} {...van} />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default HostPage;
