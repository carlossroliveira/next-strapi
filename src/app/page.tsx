import dynamic from 'next/dynamic'
import ServerWrapper from './ServerWrapper'

const DynamicHeader = dynamic(() => import('./parts/Header'))

const Home = () => {
  return (
    <ServerWrapper>
      <DynamicHeader />
    </ServerWrapper>
  )
}

export default Home
