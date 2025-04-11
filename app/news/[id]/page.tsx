'use client';

import { useState, useCallback } from 'react';
import { format } from 'date-fns';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

import useNews from '@/store/useNews';
import ArticleForm from '@/components/ArticleForm';

function NewsItem() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const article = useNews((state) => state.article);
  const {
    id,
    title,
    author,
    content,
    publishedAt,
    urlToImage,
    source: { name } = {},
  } = article;
  const date = format(publishedAt, 'EEE MMMM d, yyyy');

  const handleEditOpen = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleEditClose = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleItemRemove = () => {
    console.log('I am going to remove this item ', id);
  };

  return (
    <div>
      {isEditing ? (
        <div className='flex flex-col'>
          <div className='flex items-center justify-between border-b border-b-gray-300 py-3 mb-4'>
            <Typography variant='h4'>Edit Article:</Typography>
            <IconButton size='large'>
              <CloseIcon fontSize='large' onClick={handleEditClose} />
            </IconButton>
          </div>
          <ArticleForm article={article} onClose={handleEditClose} />
        </div>
      ) : (
        <>
          <div
            className='w-full h-[30rem] mb-5 bg-cover'
            style={{ backgroundImage: `url('${urlToImage}')` }}
          />
          <Typography variant='h3' sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <div className='flex items-center mt-2'>
            <ul className='flex items-center text-xl'>
              <li className='uppercase'>{name}</li>
              <li className='list-decor text-sky-600'>{author}</li>
              <li className='list-decor'>{date}</li>
            </ul>
          </div>
          <Typography variant='body1' sx={{ mt: 2, fontSize: 24 }}>
            {content}
          </Typography>

          <div className='mt-5'>
            <Stack direction='row' spacing={2}>
              <Button
                color='primary'
                variant='outlined'
                startIcon={<EditIcon />}
                onClick={handleEditOpen}
              >
                Edit
              </Button>
              <Button
                color='error'
                variant='contained'
                startIcon={<DeleteIcon />}
                onClick={handleItemRemove}
              >
                Remove
              </Button>
            </Stack>
          </div>
        </>
      )}
    </div>
  );
}

export default NewsItem;
