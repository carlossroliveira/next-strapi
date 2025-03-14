import axios from 'axios'
import { Article } from '../types'
import ArticleContent from './ArticleContent'

const STRAPI_URL: string = 'http://127.0.0.1:4000'

export default async function PageId({ params }: { params: { id: string } }) {
  const { id } = params

  const response = await axios.get(`${STRAPI_URL}/api/artigos/${id}`, {
    params: { populate: '*' }
  })

  const article: Article = response?.data?.data

  return <ArticleContent article={article} />
}

export const generateStaticParams = async () => {
  const response = await axios.get(`${STRAPI_URL}/api/artigos`, {
    params: { populate: '*' }
  })

  return response.data.data.map(
    (article: { documentId: { toString: () => string } }) => ({
      documentId: article.documentId.toString()
    })
  )
}
