import { Outlet, Route, Routes } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Navbar } from "../Header/NavMenu"

const Layout = () => {
  return (
    <>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout