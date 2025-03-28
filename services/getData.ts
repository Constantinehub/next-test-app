import { Post } from '@/types/postTypes';

export async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  return response.json();
}

export async function getMockedPosts(): Promise<Post[]> {
  const response = await fetch('http://localhost:4000/posts');

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
}

export async function getMockedPostsBySearch(query: string): Promise<Post[]> {
  const response = await fetch(`http://localhost:4000/posts?q=${query}`);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
}
