import {useGetPopularMovieQuery} from '../features/movie-api-slice'

const Popular = () => {
    const { data=[] } = useGetPopularMovieQuery()
    return (
        <div>
            <p className=''>Popular Movies</p>
        </div>
    )
}

export default Popular