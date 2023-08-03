import HeroBanner from "./components/HeroBanner"
import Navbar from "./components/Navbar"
import NowPlaying from "./components/NowPlaying"
import Popular from "./components/Popular"

function App() {

  return (
    <div className="relative">
      <div className="absolute z-10 w-full flex justify-center backdrop-blur-sm h-14 shadow-2xl	bg-white/10">
        <Navbar />
      </div>
      <div className="h-64">
        <HeroBanner />
      </div>
      <NowPlaying />
      <Popular />
    </div>
  )
}

export default App
