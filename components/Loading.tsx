import { CircularProgress } from '@mui/material';

function Loading() {
  return (
    <div className='grow flex justify-center mt-[20rem]'>
      <CircularProgress size='4rem' />
    </div>
  );
}

export default Loading;
