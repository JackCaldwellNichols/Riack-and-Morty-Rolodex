import Home from "./Home"
import { useState, useEffect } from "react"
import { fetchData } from "./components/utils/fetchData"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Episodes from "./pages/Episodes"
import Locations from "./pages/Locations"

import Nav from "./components/Navbar/Nav";
import DrawerAppBar from "./components/Navbar/DrawerApp";

const App = () => { 

  return (
      <BrowserRouter>
        <Nav />
        {/* <DrawerAppBar /> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/locations" element={<Locations />}/>
          <Route path="/episodes" element={<Episodes />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
