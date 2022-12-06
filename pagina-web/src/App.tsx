import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import CardsLugares from './components/CardsLugares';
import FormularioReservacion from './components/FormularioReservacion';
import Home from './components/routes/Home';
import Index from './components/routes/Index';
import Lugares from './components/routes/Lugares';
import Reservacion from './components/routes/Reservacion';
import Usuario from './components/routes/Usuario';
import FormularioRegistro from './components/FormularioRegistro';
import FormularioLogin from './components/FormularioLogin';
import Favoritos from './components/Favoritos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/',
        index: true,
        element: <Navigate to = '/index'/>
      },
      {
        path: '/index',
        element: <Index/>
      }
    ]
  },
  {
    path: '/lugares',
    element: <Lugares/>,
    children: [
      {
        path: '/lugares',
        index: true,
        element: <CardsLugares/>
      }
    ]
  },
  {
    path: '/reservacion',
    element: <Reservacion/>,
    children: [
      {
        path: '/reservacion',
        index: true,
        element: <FormularioReservacion/>
      }
    ]
  },
  {
    path: '/auth',
    element: <Usuario/>,
    children: [
      {
        path: '/auth',
        index: true,
        element: <FormularioRegistro/>
      },
      {
        path: '/auth/login',
        element: <FormularioLogin/>
      },
      {
        path: '/auth/favorite',
        element: <Favoritos/>
      }
    ]
  }
])

export default function App(){
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}