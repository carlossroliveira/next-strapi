'use client'

import { ReactNode } from 'react'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from '@seidor/ds-marketing'

const ServerWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider themeName="OrbitTheme" language="pt-BR">
      {children}

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default ServerWrapper
