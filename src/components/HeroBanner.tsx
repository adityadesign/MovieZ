import { useGetNowPlayingMovieQuery } from "../features/movie-api-slice"

const HeroBanner = () => {
    const {data} = useGetNowPlayingMovieQuery()
    const randomImg:string = data?.results ? `https://image.tmdb.org/t/p/w780${data?.results[Math.floor(Math.random()*data.results.length)].backdrop_path}` : 'https://i.gifer.com/OVTb.gif'

    return (
        <div className="h-80 relative">
            <img className="absolute h-full  w-full object-cover -z-10 opacity-20" src={randomImg} alt="HeroBanner" 
                style={{backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',}}/>
            <div className="flex justify-center items-center h-full flex-col" style={{textShadow: '2px 2px 4px #000000'}}> 
                <p className="text-4xl font-bold  text-white">Welcome.</p>
                <p className="text-md text-center text-slate-200">Millions of movies, TV shows and people to discover</p>
                <span className="text-md text-slate-200">Explore Now</span>   
            </div>
            <div className="absolute bottom-12 flex w-full justify-center">
                <input className="p-2 w-2/3 rounded-l-lg bg-slate-50 text-black text-sm" type="text" placeholder="Search for movies or tv shows..."/>
                <button className="text-gray-900 rounded-r-lg px-2 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50">Search</button>
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