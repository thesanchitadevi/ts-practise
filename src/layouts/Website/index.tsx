import { Outlet } from 'react-router-dom';
import WebsiteFooter from './Footer';
import WebsiteHeader from './Header';
import Sidebar from './Shared/Sidebar';

const WebsiteLayout = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Sidebar ></Sidebar>
      </div>
      <div className="col-span-4 ">

        <WebsiteHeader />
        <Outlet></Outlet>
        <WebsiteFooter />
      </div>
    </div>
  )
}

export default WebsiteLayout