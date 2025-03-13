import { ReactNode } from 'react'
import Registry from './registry'
import { Mulish } from 'next/font/google'

export const metadata = {
  title: 'Strapi + Next',
  description: 'Projeto Teste'
}

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt-br">
      <body className={mulish.className}>
        <Registry>{children}</Registry>
      </body>
    </html>
  )
}

export default RootLayout
