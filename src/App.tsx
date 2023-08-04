import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import MovieDetails from './pages/MovieDetails'

function App() {

  return (
    <div className="relative">
      <div className="absolute z-10 w-full flex bg-gray-900/60">
            <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
