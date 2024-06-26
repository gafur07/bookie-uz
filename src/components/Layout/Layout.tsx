import { Outlet } from "react-router-dom"

import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Navbar } from "./NavMenu/Navbar"

const Layout = () => {
  return (
    <div className="min-h-full">
        <Header />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export { Layout }