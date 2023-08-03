import HeroBanner from "./components/HeroBanner"
import Navbar from "./components/Navbar"
import NowPlaying from "./components/NowPlaying"
import Popular from "./components/Popular"

function App() {

  return (
    <div className="relative">
      <div className="absolute z-10 w-full flex bg-gray-900/60">
        <Navbar />
      </div>
      <HeroBanner />
      <NowPlaying />
      <Popular />
    </div>
  )
}

export default App
