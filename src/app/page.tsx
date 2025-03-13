import axios from 'axios'
import Posts from './posts/page'

export default async function Home() {
  const response = await axios.get('http://127.0.0.1:4000/api/artigos', {
    params: { populate: '*' }
  })

  const articles = response.data.data

  return <Posts articles={articles} />
}
