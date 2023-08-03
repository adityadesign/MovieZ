import { useGetNowPlayingMovieQuery } from "../features/movie-api-slice"

const HeroBanner = () => {
    const {data} = useGetNowPlayingMovieQuery()
    const randomImg:string = data?.results ? `https://image.tmdb.org/t/p/w780${data?.results[Math.floor(Math.random()*data.results.length)].backdrop_path}` : 'https://i.gifer.com/OVTb.gif'

    return (
        <div className="h-full relative">
            <img className="absolute h-full  w-full object-cover -z-10 opacity-40" src={randomImg} alt="HeroBanner" 
                style={{backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',}}/>
            <div className="flex justify-center items-center h-full flex-col"> 
                <p className="text-2xl font-bold  text-white">Welcome.</p>
                <p className="text-sm text-center text-slate-200">Millions of movies, TV shows and people to discover</p>
                <span className="text-sm text-slate-200">Explore Now</span>
                
            </div>
            <div className="absolute bottom-12 flex w-full justify-center">
                <input className="p-2 w-2/3 rounded-l-lg bg-slate-50 text-black text-sm" type="text" placeholder="Search for movies or tv shows..."/>
                <button className="text-white rounded-r-lg px-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300">Search</button>
            </div>
            <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '50px',
                    bottom: '0',
                    left: '0',
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(36, 36, 36, 10))'
                }}>
            </div>
        </div>
    )
}

export default HeroBanner