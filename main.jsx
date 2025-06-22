import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Bag from './routes/Bag.jsx'
import Main from './routes/Main.jsx'
import { Provider } from 'react-redux'
import myntraStore from './store/itemStore.js'
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {path:"/",element:<Main/>},
    {
      path:"/bag",
      element:<Bag/>
    }]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      
    <RouterProvider router={router}>
      
    </RouterProvider>
    </Provider>
   
  </StrictMode>,
)
