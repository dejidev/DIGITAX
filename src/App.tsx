import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='bg-black'>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
