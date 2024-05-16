import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/layout"
import { Home } from "./pages/home"
import { Profile } from "./pages/profile"
import { Private } from "./routes/Private"

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
        element: <Private> <Profile/> </Private>
      },
      
    ]
  }
])

export { router }