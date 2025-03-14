import axios from 'axios'
import { Article } from './posts/types'
import PostsComponent from './posts/PostsComponent'

export default async function Home() {
  const response = await axios.get<{ data: Article[] }>(
    'http://127.0.0.1:4000/api/artigos',
    {
      params: { populate: '*' }
    }
  )

  const articles: Article[] = response.data.data

  return <PostsComponent articles={articles} />
}
