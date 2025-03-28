import type { Metadata } from 'next';

import GoBack from '@/components/GoBack';

export const metadata: Metadata = {
  title: 'Todos',
};

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grow flex flex-col bg-amber-200'>
      <header className='py-4 px-8'>
        <GoBack />
      </header>
      <div className='grow flex flex-col px-8'>{children}</div>
    </div>
  );
};

export default InnerLayout;
