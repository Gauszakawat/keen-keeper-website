import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import Root from './loyout/Root';
import Home from './componen/Pages/Home';
import Timeline from './componen/Pages/Timeline';
import Stats from './componen/Pages/Stats';
import Singleprofilepage from './componen/Pages/Card/Singleprofilepage';
import Frendprovider from './context/Frendprovider';




const router= createBrowserRouter([
  {
  path:"/",
  element:<Root></Root>,
  children: [
    {
      index: true,
      element: <Home/>,
    },
    {
      path:"Timeline",
      element: <Timeline/>,
    },
    {
      path:"Stats",
      element:<Stats/>
    },{
      path:"Singleprofilepage/:id",
      element:<Singleprofilepage/>,
    }
  ]
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Frendprovider>
     <RouterProvider router={router} />
     </Frendprovider>
     
  </StrictMode>,
)


