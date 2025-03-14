type ArticleContent = {
  type: string
  children: {
    type: string
    text: string
  }[]
}

type ImageFormat = {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

type ArticleImage = {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    thumbnail: ImageFormat
    small: ImageFormat
    medium: ImageFormat
    large: ImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type Article = {
  id: number
  documentId: string
  title: string
  description: string
  slug: string
  content: ArticleContent[]
  createdAt: string
  updatedAt: string
  publishedAt: string
  image?: ArticleImage | null
}
