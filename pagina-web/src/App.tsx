import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import CardsLugares from './components/CardsLugares';
import FormularioReservacion from './components/FormularioReservacion';
import FormularioUsuario from './components/FormularioUsuario';
import Home from './components/routes/Home';
import Index from './components/routes/Index';
import Lugares from './components/routes/Lugares';
import Reservacion from './components/routes/Reservacion';
import Usuario from './components/routes/Usuario';

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
        element: <FormularioUsuario/>
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