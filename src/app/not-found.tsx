'use client'

import styled from 'styled-components'
import { useRouter } from 'next/navigation'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
  color: #fff;
  text-align: center;
  padding: 20px;
`

const ErrorTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
`

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  background: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }
`

export default function PageNotFound() {
  const router = useRouter()

  return (
    <ErrorContainer>
      <ErrorTitle>Página não encontrada</ErrorTitle>
      <BackButton onClick={() => router.push('/')}>Voltar para Home</BackButton>
    </ErrorContainer>
  )
}
