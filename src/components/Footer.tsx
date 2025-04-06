import { TimeStamp } from '@/app/_lib/actions';

const Footer = () => {
  const date = new Date();
  return (
    <footer className="py-2 text-center flex justify-center items-center bg-brand-black-900 text-brand-white/50">
      <p>
        &copy; {TimeStamp()}&nbsp;
        <span className="uppercase">#vanlife</span>
      </p>
    </footer>
  );
};

export default Footer;
