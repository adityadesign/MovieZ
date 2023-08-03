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
                <p className="text-2xl font-bold">Welcome.</p>
                <p className="text-sm text-center">Millions of movies, TV shows and people to discover</p>
                <span className="text-sm">Explore Now</span>
                
            </div>
            <div className="absolute bottom-8 flex w-full justify-center">
                <input className="p-2 rounded-l-lg bg-slate-50 text-black text-sm" type="text" placeholder="Search for movies or tv shows..."/>
                <button className="text-white rounded-r-lg px-2 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300">Search</button>
            </div>
        </div>
    )
}

export default HeroBanner