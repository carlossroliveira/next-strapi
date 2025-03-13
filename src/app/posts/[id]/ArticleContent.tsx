'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styled from '../../../../config/theme/styled-theme'

const ArticleContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f3f4f6, #dbeafe);
  border-radius: 1.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1e3a8a;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`

const ContentBlock = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  line-height: 1.8;
  color: #374151;
  text-align: left;
  font-size: 1.1rem;
`

const BackButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  border: 1px solid #1e40af;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

export default function ArticleContent({ article }: { article: any }) {
  const router = useRouter()

  return (
    <ArticleContainer>
      <BackButton onClick={() => router.back()}>Voltar</BackButton>

      <Title>{article.title}</Title>

      {article.image && (
        <Image
          height={200}
          width={200}
          src={'http://localhost:4000' + article.image.url}
          alt={article.image.alternativeText || article.title}
        />
      )}

      <div>
        {article.content.map((block: any, index: number) => {
          if (block.type === 'paragraph') {
            return (
              <ContentBlock key={index}>
                {block.children.map((child: any, i: number) => (
                  <span key={i}>{child.text}</span>
                ))}
              </ContentBlock>
            )
          }
          return null
        })}
      </div>
    </ArticleContainer>
  )
}
