import { urlFor } from '@/sanity/lib/image';
import { HOST_VANS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import Title from './Title';

const HostVanCard = ({
  name,
  price,
  slug,
  mainImage,
}: NonNullable<HOST_VANS_QUERYResult>[number]) => {
  return (
    <Link
      href={`/host/vans/${slug?.current}`}
      className="flex justify-between mt-3 bg-brand-white/70"
    >
      <div className="flex gap-3 mt-3">
        {mainImage?.asset?.url ? (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(200)
              .height(200)
              .auto('format')
              .url()}
            width={50}
            height={50}
            alt={mainImage.alt || ''}
            priority
            className="rounded-sm"
          />
        ) : null}

        <div>
          <Title as="h3">{name}</Title>
          <p>
            <span className="font-semibold">${price}</span>
            /day
          </p>
        </div>
      </div>
      <p>Edit</p>
    </Link>
  );
};

export default HostVanCard;
