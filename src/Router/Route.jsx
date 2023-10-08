import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../components/Login/Login';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import Coupon from '../components/Coupon/Coupon';
import Register from '../components/Register/Register';
import PrivateRoute from './PrivateRoute';

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
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/coupon',
        element: <Coupon></Coupon>,
      },
      {
        path: '/service-details/:id',
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch('/events.json'),
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default myRoute;
