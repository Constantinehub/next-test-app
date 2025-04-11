'use client';

import { formatDistance } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from '@mui/material';
import useNews from '@/store/useNews';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import { Article } from '@/types/newsTypes';
import Link from 'next/link';

interface NewsCardProps {
  card: Article;
  primary?: boolean;
}

function NewsCard(props: NewsCardProps) {
  const {
    card: {
      id,
      author,
      title,
      publishedAt,
      urlToImage,
      source: { name },
    },
    primary,
  } = props;
  const setArticle = useNews((state) => state.setArticle);

  const authorName = author ? author : 'Anonymous';
  const direction = `/news/${id}`;

  return (
    <article className='relative shadow-sm rounded-md overflow-hidden'>
      <Link href={direction} onClick={() => setArticle(props.card)}>
        <div
          className={twMerge(
            `aspect-8/4 overflow-hidden bg-gray-300 bg-cover bg-center ${
              primary && 'aspect-8/4'
            }`
          )}
          style={{
            backgroundImage: `url("${urlToImage}")`,
          }}
        />
      </Link>
      <div
        className={twMerge(
          `px-6 pt-6 w-full flex flex-col bg-white ${
            primary &&
            'absolute left-0 bottom-0 bg-linear-to-b bg-transparent from-transparent to-stone-800 to-90%'
          }`
        )}
      >
        <span
          className={twMerge(
            `text-stone-400 font-semibold ${
              primary && 'text-stone-100 text-xl'
            }`
          )}
        >
          {name}
        </span>
        <Link href={direction}>
          <p
            className={twMerge(
              `mt-2 min-h-[56px] text-xl text-black line-clamp-2 transition-colors hover:text-black/60 ${
                primary &&
                'text-white font-extrabold text-3xl hover:text-gray-300'
              }`
            )}
          >
            {title}
          </p>
        </Link>
        <div
          className={twMerge(
            `relative flex items-center mt-3 py-3 border-t border-t-gray-300 ${
              primary &&
              'before:absolute before:left-0 before:-top-[2px] before:h-[2px] before:bg-sky-500 before:w-[25%] before:max-w-[200px] border-t-gray-300/50'
            }`
          )}
        >
          <ListItem
            alignItems='center'
            sx={{
              px: 0,
              color: primary ? 'white' : 'black',
              '.MuiListItemSecondaryAction-root': {
                right: 0,
              },
            }}
            secondaryAction={
              <Stack direction='row' spacing={1}>
                <IconButton
                  size='large'
                  sx={{ color: primary ? 'white' : 'rgba(0,0,0, 0.54)' }}
                >
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton
                  size='large'
                  sx={{ color: primary ? 'white' : 'rgba(0,0,0, 0.54)' }}
                >
                  <ShareIcon />
                </IconButton>
              </Stack>
            }
          >
            <ListItemAvatar>
              <Avatar alt={authorName} />
            </ListItemAvatar>
            <ListItemText
              primary={authorName}
              secondary={formatDistance(publishedAt, new Date(), {
                addSuffix: true,
              })}
              slotProps={{
                primary: {
                  color: primary ? 'white' : 'black',
                },
                secondary: {
                  color: primary ? 'white' : 'black',
                },
              }}
            />
          </ListItem>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
