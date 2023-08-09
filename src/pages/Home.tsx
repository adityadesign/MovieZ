import HeroBanner from "../components/HeroBanner"
import NowPlaying from "../components/NowPlaying"
import TopRated from "../components/TopRated"
import Upcoming from "../components/Upcoming"

const Home = () => {
  return (
    <>
        <HeroBanner />
        <NowPlaying />
        <TopRated /> 
        <Upcoming />
    </>
  )
}

export default Home