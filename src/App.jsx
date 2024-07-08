import { Outlet } from "react-router-dom"
import AppbarComponent from "./layouts/AppbarComponent"
import Navbar from "./components/Navbar"
import Footer from "./layouts/Footer"

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <AppbarComponent />
      {/* render pages */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
