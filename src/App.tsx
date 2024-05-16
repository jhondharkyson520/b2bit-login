import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/layout"
import { Home } from "./pages/home"
import { Profile } from "./pages/profile"

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      
    ]
  }
])

export { router }