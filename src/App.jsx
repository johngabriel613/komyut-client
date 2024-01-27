import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Routes from "./pages/Routes"
import RootLayout from "./templates/RootLayout"
import { action as routesAction } from "./pages/Routes"
import Fares from "./pages/Fares"
import About from "./pages/About"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/routes" element={<Routes/>} action={routesAction}/>
      <Route path="/fares" element={<Fares/>} action={routesAction}/>
      <Route path="/about" element={<About/>} action={routesAction}/>
    </Route>
  ))

  return <RouterProvider router={router}/>
}

export default App
