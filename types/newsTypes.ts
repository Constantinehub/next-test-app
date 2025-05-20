export type Category =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

export type Country =
  | 'ae'
  | 'ar'
  | 'at'
  | 'au'
  | 'be'
  | 'br'
  | 'ca'
  | 'ch'
  | 'cn'
  | 'co'
  | 'cz'
  | 'it'
  | 'jp'
  | 'pl'
  | 'sa'
  | 'th'
  | 'ua'
  | 'us'
  | 've';

export type Language =
  | 'ar'
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'he'
  | 'it'
  | 'nl'
  | 'no'
  | 'pt'
  | 'ru'
  | 'sv'
  | 'ud'
  | 'zh';

export interface NewsParams {
  [key: string]: string | number | boolean | undefined;
  q: string;
  country?: Country;
  category?: Category;
  searchIn?: 'title' | 'description' | 'content';
  pageSize?: number;
  page?: number;
}

export interface TopNewsParams {
  [key: string]: string | number | boolean | undefined;
  category?: Category;
  language?: Language;
  country?: Country;
}

export interface NewsOptions {
  params: NewsParams;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string | Date;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
  id?: string | number;
}

export interface NewsData {
  articles: Article[];
  totalResults: number;
}

export interface TopNews {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Category;
  language: Language;
  country: Category;
}

export interface TopNewsData {
  status: string;
  sources: TopNews[];
}

export type EditArticle = Pick<
  Article,
  'author' | 'title' | 'content' | 'description'
>;

export type UpdateArticle = {
  data: EditArticle;
  q?: string;
};
