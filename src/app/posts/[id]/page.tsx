import axios from 'axios'
import ArticleContent from './ArticleContent'

export default async function PageId({ params }: { params: { id: string } }) {
  const { id } = params

  const response = await axios.get(`http://127.0.0.1:4000/api/artigos/${id}`, {
    params: { populate: '*' }
  })

  const article = response.data.data

  return <ArticleContent article={article} />
}
