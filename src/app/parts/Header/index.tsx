'use client'

import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchData } from '../fetchData'

interface ImageData {
  id: number
  documentId?: string
  name: string
  url: string
  width?: number
  height?: number
}

interface Aside {
  id: number
  aside_title: string
  aside_text: string
  aside_image?: ImageData
}

interface Content {
  id: number
  content_title: string
  content_text: string
  content_image?: ImageData
}

interface Header {
  id: number
  header_title: string
  header_image?: ImageData
}

interface InfoData {
  id: number
  aside: Aside[]
  content: Content[]
  header: Header[]
}

interface ApiResponse {
  data: InfoData[]
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`

const Aside = styled.aside`
  background: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
`

const Main = styled.main`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
`

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
  }
`

const Card = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
  }
`

const HomePage = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const result: ApiResponse = await fetchData()
      setData(result)
    }

    loadData()
  }, [])

  if (!data?.data || data.data.length === 0) return <div>Carregando...</div>

  const pageData = data.data[0]

  return (
    <Container>
      <Main>
        <Header>
          {pageData.header?.[0]?.header_image?.url && (
            <Image
              src={
                'http://localhost:4000' + pageData.header[0].header_image.url
              }
              alt={pageData.header[0].header_image.name || 'Header Image'}
              width={pageData.header[0].header_image.width || 800}
              height={pageData.header[0].header_image.height || 400}
              priority
              unoptimized={!pageData.header[0].header_image.url.startsWith('/')}
            />
          )}

          <h1>{pageData.header?.[0]?.header_title}</h1>
        </Header>

        {(pageData.content ?? []).map((item) => (
          <Card key={item.id}>
            <h2>{item.content_title}</h2>
            <p>{item.content_text}</p>
            {item.content_image?.url && (
              <Image
                src={'http://localhost:4000' + item.content_image.url}
                alt={item.content_image.name || 'Content Image'}
                width={item.content_image.width || 600}
                height={item.content_image.height || 400}
                unoptimized={!item.content_image.url.startsWith('/')}
              />
            )}
          </Card>
        ))}
      </Main>

      <Aside>
        {(pageData.aside ?? []).map((item) => (
          <Card key={item.id}>
            <h2>{item.aside_title}</h2>
            <p>{item.aside_text}</p>
            {item.aside_image?.url && (
              <Image
                src={'http://localhost:4000' + item.aside_image.url}
                alt={item.aside_image.name || 'Aside Image'}
                width={item.aside_image.width || 300}
                height={item.aside_image.height || 200}
                unoptimized={!item.aside_image.url.startsWith('/')}
              />
            )}
          </Card>
        ))}
      </Aside>
    </Container>
  )
}

export default HomePage
