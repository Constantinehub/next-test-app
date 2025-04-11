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

export interface NewsParams {
  q: string;
  country?: Country;
  category?: Category;
  searchIn?: 'title' | 'description' | 'content';
  pageSize?: number;
  page?: number;
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

export type EditArticle = Pick<
  Article,
  'author' | 'title' | 'content' | 'description'
>;

export type UpdateArticle = {
  data: EditArticle;
  q?: string;
};
