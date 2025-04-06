import { urlFor } from '@/sanity/lib/image';
import { VANS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Title from './Title';
import clsx from 'clsx';
import Link from 'next/link';
import TypeBadge from './TypeBadge';

const VanCard = (props: VANS_QUERYResult[number]) => {
  const { name, slug, price, type, mainImage } = props;
  return (
    <Link href={`/vans/${slug?.current!}`} className="flex flex-col gap-3">
      {mainImage?.asset?.url ? (
        <Image
          src={urlFor(mainImage.asset.url)
            .width(400)
            .height(400)
            .auto('format')
            .quality(100)
            .url()}
          width={100}
          height={100}
          alt={mainImage.alt || ''}
          priority
          className="min-w-full"
        />
      ) : null}

      <div className="flex justify-between">
        <Title>{name}</Title>
        <p className="font-bold">
          ${price} <span className="font-normal block">/day</span>
        </p>
      </div>

      <TypeBadge type={type!} />
    </Link>
  );
};

export default VanCard;
