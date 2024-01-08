import { BrowserRouter, Routes, Route } from "react-router-dom/dist/index.js";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Layout from "./components/layout.jsx";

import('./style/reset.css')
import('./style/App.css')
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}
