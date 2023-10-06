import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../components/About/About';
import Bookings from '../components/Bookings/Bookings';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../components/Login/Login';

const myRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/bookings',
        element: <Bookings></Bookings>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default myRoute;
