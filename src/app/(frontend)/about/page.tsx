import Bounded from '@/components/Bounded';
import CallToAction from '@/components/CallToAction';
import Title from '@/components/Title';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Bounded>
      <Image
        src="/about-hero.png"
        width={800}
        height={400}
        alt="a guy sitting on the roof of the van at night"
        priority
      />

      <div className="px-5 py-4 flex flex-col gap-10">
        <Title size="sm">
          Don't squeeze in a sedan when you could relax in a van.
        </Title>

        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hit.(Hitch costs extra)
        </p>

        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="p-5 bg-brand-pale flex flex-col gap-4 items-start">
          <p className="font-bold">Your desitnation is waiting.</p>
          <p className="font-bold">Your van is ready.</p>
          <CallToAction href="vans" variant="black">
            Explore our vans
          </CallToAction>
        </div>
      </div>
    </Bounded>
  );
};

export default AboutPage;
