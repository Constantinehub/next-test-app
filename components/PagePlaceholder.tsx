import { Typography } from '@mui/material';

interface PlaceholderProps {
  entity?: string;
}

function Placeholder(props: PlaceholderProps) {
  const { entity = 'This' } = props;

  return (
    <div className='grow flex flex-col p-6 pt-20 bg-slate-100'>
      <Typography align='center' variant='h2' sx={{ fontWeight: 500 }}>
        {`${entity} page is still in progress...`}
      </Typography>
    </div>
  );
}

export default Placeholder;
