import {useGetPopularMovieQuery} from '../features/movie-api-slice'
import OverflowCards from "../utils/OverflowCards"

const Popular = () => {
    const { data } = useGetPopularMovieQuery()

    return (
        <div className="pl-2 mt-6">
            <div>Top Rated Movies</div>
            {data && <OverflowCards data={data}/>}
        </div>
    )
}

export default Popular