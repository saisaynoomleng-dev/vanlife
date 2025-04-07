import Bounded from '@/components/Bounded';
import CallToAction from '@/components/CallToAction';

const NotFoundPage = () => {
  return (
    <Bounded className="flex flex-col gap-5 p-5">
      <p className="font-semibold text-3xl">
        Sorry, the page you were looking for was not found.
      </p>
      <CallToAction href="/" variant="black">
        Return To Home
      </CallToAction>
    </Bounded>
  );
};

export default NotFoundPage;
