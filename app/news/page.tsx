'use client';

import {
  useNewsByQuery,
  // useAuthToken,
  // useTopNewsByCategory,
} from '@/queries/newsQueries';
import useSearch from '@/store/useSearch';
import { twMerge } from 'tailwind-merge';
import { BASE_PAGE_SIZE } from '@/utils/constants';
import NewsCard from '@/components/NewsCard';
import Loading from '@/components/Loading';

export default function Home() {
  const query = useSearch((state) => state.query);
  const { data = { articles: [], total: 0 }, isLoading } = useNewsByQuery({
    q: query,
    pageSize: BASE_PAGE_SIZE + 1,
  });

  // const { data: topData } = useTopNewsByCategory({
  //   category: 'business',
  //   language: 'en',
  // });

  // const { data: authData } = useAuthToken();

  // console.log('Top_Data ', topData);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className='grow grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {data.articles.map((item, index) => (
            <li
              key={item.title}
              className={twMerge(`${index === 0 && 'col-span-2'}`)}
            >
              <NewsCard card={item} primary={index === 0} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
