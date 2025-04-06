import Bounded from '@/components/Bounded';
import CallToAction from '@/components/CallToAction';
import Title from '@/components/Title';

export default async function Home() {
  return (
    <Bounded className="homepage-bg text-brand-white flex flex-col gap-10 p-10 justify-center">
      <Title size="sm" className="font-semibold leading-[2.5rem]">
        You got the travel plans, we got the travel vans.
      </Title>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <CallToAction href="/vans" variant="orange">
        Find your van
      </CallToAction>
    </Bounded>
  );
}
