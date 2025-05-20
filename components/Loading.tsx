import { CircularProgress } from '@mui/material';
import { twMerge } from 'tailwind-merge';

type Props = {
  covered?: boolean;
};

function Loading({ covered = false }: Props) {
  return (
    <div
      className={twMerge(
        'grow flex justify-center mt-[20rem]',
        covered &&
          'absolute left-0 top-0 w-full h-full z-50 mt-0 items-center bg-white/50'
      )}
    >
      <CircularProgress size='4rem' color='warning' thickness={1} />
    </div>
  );
}

export default Loading;
