'use client';

import { useState } from 'react';
import { Nunito } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton } from '@mui/material';

import NavLink from '@/components/NavLink';
import MenuItem from '@/components/MenuItem';
import { menu } from '@/data';

const nunito = Nunito({
  weight: '800',
  subsets: ['latin'],
});

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigate = (direction: string): void => {
    router.push(direction);
  };

  const BurgerIcon = isOpen ? MenuOpenIcon : MenuIcon;

  return (
    <aside className='border-r border-r-gray-300 bg-white w-full max-w-[250px]'>
      <div className='flex items-center justify-between h-20 pl-6 pr-4 border-b border-b-gray-300'>
        <NavLink
          direction='/'
          content={
            <div className='flex items-center'>
              <DeviceHubIcon fontSize='medium' color='info' />
              <span
                className={`ml-1 text-black font-bold uppercase ${nunito.className}`}
              >
                News
              </span>
            </div>
          }
        />
        <IconButton onClick={handleMenuToggle}>
          <BurgerIcon fontSize='medium' />
        </IconButton>
      </div>
      <ul className='mt-4'>
        {menu.map((item) => (
          <li key={item.label}>
            <MenuItem
              item={item}
              onClick={() => handleNavigate(item.href)}
              isActive={item.href === pathname}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
