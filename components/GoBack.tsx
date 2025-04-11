'use client';

import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter, usePathname } from 'next/navigation';

const GoBack = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <IconButton onClick={router.back} disabled={pathname === '/'}>
      <ChevronLeftIcon />
    </IconButton>
  );
};

export default GoBack;
