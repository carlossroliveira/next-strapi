'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Article } from './types'
import styled from '../../../config/theme/styled-theme'

const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 2.5rem 1.25rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #1f2937;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`

const CardDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: #fff;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d4ed8;
  }
`

export default function Posts({ articles }: { articles: Article[] }) {
  const STRAPI_URL: string = 'http://127.0.0.1:4000'

  return (
    <Container>
      <Title>Artigos</Title>

      <Grid>
        {articles.map((article) => (
          <Card key={article.id}>
            {article.image && (
              <Image
                priority
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto' }}
                src={`${STRAPI_URL}${article?.image?.url}`}
                alt={
                  article.image.alternativeText ||
                  article.title ||
                  'Imagem do artigo'
                }
              />
            )}

            <CardContent>
              <CardTitle>{article.title}</CardTitle>

              <CardDescription>{article.description}</CardDescription>

              <StyledLink href={`/posts/${article.documentId}`}>
                Acessar detalhes
              </StyledLink>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}
