import { useGetNowPlayingMovieQuery } from "../features/movie-api-slice"
import OverflowCards from "../utils/OverflowCards"

const NowPlaying: React.FC = () => {
    const {data} = useGetNowPlayingMovieQuery()
  
    return (
      <div className="pl-2 mt-6">
        <div className="flex justify-between items-center py-1">
          <div>Now Playing</div>
          <div className="rounded-md" role="group">
            <button type="button" className="px-2 py-1 text-sm font-medium text-gray-900 bg-transparent border border-r-0 border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              Movie
            </button>
            <button type="button" className="px-2 py-1 text-sm font-medium text-gray-900 bg-transparent border border-l-0 border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              TV show
            </button>
          </div>
        </div>
        {data && <OverflowCards data={data}/>}
      </div>
    )
}

export default NowPlaying