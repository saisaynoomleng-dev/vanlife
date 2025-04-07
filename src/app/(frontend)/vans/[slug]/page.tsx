import Bounded from '@/components/Bounded';
import CallToAction from '@/components/CallToAction';
import Title from '@/components/Title';
import TypeBadge from '@/components/TypeBadge';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { VAN_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const VansDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: van } = await sanityFetch({
    query: VAN_QUERY,
    params: await params,
  });

  if (!van) {
    return notFound();
  }
  return (
    <Bounded className="p-5 flex flex-col gap-3">
      <Link href="/vans">
        &larr;{' '}
        <span className="underline underline-offset-2">Back to all vans</span>
      </Link>
      {van?.mainImage?.asset?.url ? (
        <Image
          src={urlFor(van.mainImage.asset.url)
            .width(600)
            .height(600)
            .auto('format')
            .url()}
          width={400}
          height={600}
          alt={van.mainImage.alt || ''}
          priority
          className="min-w-full rounded-lg"
        />
      ) : null}

      {van?.type && <TypeBadge type={van?.type} />}

      <Title size="sm" as="h2">
        {van?.name}
      </Title>

      <p>
        <span className="font-bold">${van?.price}</span> /day
      </p>

      <p>{van?.description}</p>

      <CallToAction href="/" variant="orange">
        Rent This Van
      </CallToAction>
    </Bounded>
  );
};

export default VansDetailPage;
