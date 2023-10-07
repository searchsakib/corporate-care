import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className="bg-blue-50 pt-12 pb-12">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <div className="pt-14 pb-14 bg-blue-800">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
