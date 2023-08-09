import HeroBanner from "../components/HeroBanner"
import NowPlaying from "../components/NowPlaying"
import Popular from "../components/TopRated"

const Home = () => {
  return (
    <>
        <HeroBanner />
        <NowPlaying />
        <Popular /> 
    </>
  )
}

export default Home