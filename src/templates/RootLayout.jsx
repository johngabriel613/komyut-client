import { Outlet } from "react-router-dom"
import Navbar from "../components/header/Navbar"

const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default RootLayout
