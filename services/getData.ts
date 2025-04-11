import * as uuid from 'uuid';
import { API, get } from '@/services/api';
import { URL_EVERYTHING } from '@/utils/constants';
import { NewsParams, NewsData, Article } from '@/types/newsTypes';

export async function getNewsByCategory(params: NewsParams): Promise<NewsData> {
  try {
    const response = await get<NewsData>(API, URL_EVERYTHING, {
      params,
    });

    const { articles = [], totalResults = 0 } = response || {};

    return {
      articles: articles.map((item) => ({
        ...item,
        id: uuid.v4(),
      })),
      totalResults,
    };
  } catch (error) {
    throw error;
  }
}

export async function updateNewsItem(
  data: Article
): Promise<{ status: string }> {
  console.log('UPDATED DATA ', data);

  try {
    const response = await new Promise<{ status: string }>((resolve) =>
      setTimeout(() => resolve({ status: 'OK' }), 1500)
    );

    const { status } = response || {};

    return { status };
  } catch (err) {
    throw err;
  }
}
