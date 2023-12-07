import { BrowserRouter, Routes, Route } from "react-router-dom/dist/index.js";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Trends from "./components/trends/trends.jsx";

import('./style/reset.css')
import('./style/App.css')
export default function App() {
  return (
    <Layout>
      <>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
        <Trends />
      </>
    </Layout>
  )
}
