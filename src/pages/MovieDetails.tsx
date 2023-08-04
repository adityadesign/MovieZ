import {useParams} from 'react-router-dom'
import { useFetchMovieDetailsQuery } from '../features/movie-api-slice'

const MovieDetails = () => {
    const {id} = useParams()
    const {data} = useFetchMovieDetailsQuery(id)
    const randomImg:string = data ? `https://image.tmdb.org/t/p/w780${data.poster_path}` : 'https://i.gifer.com/OVTb.gif'

    return (
        <div className=''>
            <div className='relative'>
                <img className='opacity-20 sepia w-full object-cover' style={{height: '500px'}} src={randomImg} alt="Movie Poster" />
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '200px',
                    bottom: '0',
                    left: '0',
                    zIndex: '0',
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(36, 36, 36, 10))'
                }}></div>
                <img className='absolute z-1 top-16 rounded-xl w-auto mx-auto right-0 left-0 shadow-lg shadow-gray-900' style={{maxHeight: '415px'}} src={randomImg} alt="Movie Poster" />
            </div>
            <div className='mx-4'>
                <p className='text-2xl font-bold'>{data?.title}</p>
                <span className='text-sm text-slate-400'>{data?.tagline}</span>
                <div className='flex gap-2 mt-2 flex-wrap'>
                {data?.genres.map(item => {
                    return (
                    <div key={item.id} className='bg-[#F7BE38] py-1 px-2 rounded-md shadow-md shadow-black'>
                        <div className='text-sm text-gray-950'>{item.name}</div>
                    </div>)
                })}
                </div>
                <div className='flex w-full justify-around my-5'>
                    <div className='flex justify-center items-center w-14 h-14 text-md rounded-full border-4 bg-gray-950 border-[#F7BE38]'>{data?.vote_average}</div>
                    <div className='border-l-2 border-gray-500'></div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-gray-400'>Runtime</div>
                        <div className='text-sm'>{data?.runtime} min</div>
                    </div>
                </div>
                <div>
                    <div className='text-lg font-semibold'>Overview</div>
                    <div className='text-sm text-gray-400'>{data?.overview}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails