import axios from 'axios'
import Blog from './blog'

export default async function Posts() {
  const response = await axios.get('http://127.0.0.1:4000/api/artigos', {
    params: { populate: '*' }
  })

  const articles = response.data.data

  return <Blog articles={articles} />
}
