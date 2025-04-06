import clsx from 'clsx';

const TypeBadge = ({ type }: { type: string }) => {
  return (
    <div
      className={clsx(
        `px-4 py-1 rounded-sm capitalize font-bold self-start text-brand-white`,
        type === 'simple' && 'bg-brand-simple',
        type === 'luxury' && 'bg-brand-luxury',
        type === 'rugged' && 'bg-brand-rugged',
      )}
    >
      {type}
    </div>
  );
};

export default TypeBadge;
