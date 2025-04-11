import Search from '@/components/Search';
import GoBack from './GoBack';

function Header() {
  return (
    <div className='flex items-center gap-3 min-h-20 px-6 bg-white border-b border-b-gray-300'>
      <GoBack />
      <Search />
    </div>
  );
}

export default Header;
