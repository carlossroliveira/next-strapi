import axios from 'axios'
import ArticleContent from './ArticleContent'

export default async function PageId({ params }: { params: { id: string } }) {
  const { id } = params

  const STRAPI_URL: string = 'http://127.0.0.1:4000'

  const response = await axios.get(`${STRAPI_URL}/api/artigos/${id}`, {
    params: { populate: '*' }
  })

  const article = response.data.data

  return <ArticleContent article={article} />
}
