export interface Comment {
  userId: number;
  id: number;
  date: Date;
  body: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  category: string;
  rating: number;
  comments: Comment[];
}
