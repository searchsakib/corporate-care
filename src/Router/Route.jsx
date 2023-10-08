import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../components/Login/Login';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import Member from '../components/Member/Member';

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
        path: '/member',
        element: <Member></Member>,
      },
      {
        path: '/service-details/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch('/events.json'),
      },
    ],
  },
]);

export default myRoute;
