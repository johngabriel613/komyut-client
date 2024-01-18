import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Routes from "./pages/Routes"
import RootLayout from "./templates/RootLayout"
import { action as routesAction } from "./pages/Routes"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/routes" element={<Routes/>} action={routesAction}/>
    </Route>
  ))

  return <RouterProvider router={router}/>
}

export default App
