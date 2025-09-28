import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import img from "./assets/AbstractDesign.png";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className='bg-black'>
        {isHome && (
          <section className="mn-h-[100vh] relative">
            <img
              src={img}
              alt="Hero"
              className="absolute top-0 left-0 w-full md:w-1/2 h-[100vh] object-cover z-10 opacity-90"
              style={{ pointerEvents: 'none' }}
            />
          </section>
        )}
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
