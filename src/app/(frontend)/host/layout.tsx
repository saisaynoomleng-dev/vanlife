import HostHeader from './HostHeader';

const HostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HostHeader />
      {children}
    </div>
  );
};

export default HostLayout;
