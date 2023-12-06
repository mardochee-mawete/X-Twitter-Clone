import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";

import('./style/reset.css')
import('./style/App.css')
export default function App() {
  return (
    <Layout>
      <>
        <Sidebar />
        <Home />
      </>
    </Layout>
  )
}
