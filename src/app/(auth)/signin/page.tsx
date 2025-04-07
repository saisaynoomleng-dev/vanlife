import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SignInPage = () => {
  return (
    <Bounded className="flex flex-col gap-5 p-10">
      <Title as="h2" className="text-center" size="sm">
        Sign Into your Account
      </Title>

      <form action="" className="flex flex-col gap-4">
        <Input type="text" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />

        <Button variant="default">Sign In</Button>
      </form>
    </Bounded>
  );
};

export default SignInPage;
