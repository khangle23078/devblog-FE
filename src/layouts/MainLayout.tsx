import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <div className='max-w-[1140px] mx-auto py-4'>
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout