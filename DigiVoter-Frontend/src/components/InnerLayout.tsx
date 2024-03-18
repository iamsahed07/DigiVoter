import { Outlet } from 'react-router-dom'
import { Drawer } from './Drawer'

export const InnerLayout = () => {
  return (
    <>
    <div className='grid grid-cols-12 '>
    <Drawer/>
    <Outlet/>
    </div>
    </>
    
  )
}
