import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import MovieDetails from './pages/MovieDetails'
import Footer from './components/Footer'
import SearchResult from './pages/SearchResult'

function App() {

  return (
    <div className="relative">
      <div className="absolute z-10 w-full flex bg-black/70">
        <Navbar />
      </div>
      <div className='lg:w-[1010px] md:flex md:flex-col m-auto'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:mediaType/:id" element={<MovieDetails/>}/>
          <Route path="/search/multi/:query" element={<SearchResult/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
