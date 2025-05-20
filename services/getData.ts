import * as uuid from 'uuid';
import { API, get, post, SPOTIFY_GET_TOKEN } from '@/services/api';
import { NEWS_EVERYTHING, NEWS_SOURCES } from '@/utils/constants';
import {
  NewsParams,
  NewsData,
  Article,
  TopNewsParams,
  TopNewsData,
} from '@/types/newsTypes';

export async function getNews(params: NewsParams): Promise<NewsData> {
  try {
    const response = await get<NewsData>(API, NEWS_EVERYTHING, {
      params: {
        ...params,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
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

export async function getTopNewsByCategory(
  params: TopNewsParams
): Promise<TopNewsData> {
  try {
    const response = await get<TopNewsData>(API, NEWS_SOURCES, {
      params: {
        ...params,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });

    return response;
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

export async function getSpotifyAuthToken() {
  try {
    const response = await post(
      SPOTIFY_GET_TOKEN,
      '/token',
      {
        grant_type: 'client_credentials',
        client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET_ID,
      },
      {
        params: {},
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log('response ', response);
  } catch (err) {
    throw err;
  }
}
