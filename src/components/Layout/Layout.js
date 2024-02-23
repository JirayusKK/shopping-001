import { Outlet } from 'react-router-dom'
import Tbar from '../Top-bar/Topbar'
import '../SASS/Layout.scss'

const Layout = () => {
  return (
    <>
      <div className="App">
        <Tbar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
