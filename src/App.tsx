import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import MovieDetails from './pages/MovieDetails'
import Footer from './components/Footer'
import SearchResult from './pages/SearchResult'

function App() {

  return (
    <div className="relative">
      <div className="absolute z-10 w-full flex bg-gray-900/60">
            <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        <Route path="/search/multi/:query" element={<SearchResult/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
