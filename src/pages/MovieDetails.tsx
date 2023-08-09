import {useParams} from 'react-router-dom'
import { useFetchDetailsQuery, useFetchCreditsQuery, useFetchSimilarQuery } from '../features/movie-api-slice'
import OverflowCards from '../utils/OverflowCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import {TailSpin} from 'react-loader-spinner'
 
const MovieDetails = () => {
    const {id, mediaType} = useParams()
    const {data, isLoading } = useFetchDetailsQuery({id, mediaType})
    const credits = useFetchCreditsQuery({id, mediaType})
    const similar = useFetchSimilarQuery({id, mediaType})  
    
    return (
        <>
            {isLoading && 
                <div className="h-screen flex justify-center items-center">
                <TailSpin
                    height="80"
                    width="80"
                    color="#F7BE38"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    visible={true}
                />
                </div>}
            {!isLoading && <><div className='relative'>
                {data?.poster_path ? 
                    <img className='opacity-20 w-full object-cover' style={{height: '500px'}} src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} alt="Movie Poster" /> :
                    <img className='opacity-20 w-full object-cover' style={{height: '500px'}} src='/no-poster.png' alt="Movie Poster"/>
                }
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '200px',
                    bottom: '0',
                    left: '0',
                    zIndex: '0',
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(36, 36, 36, 10))'
                }}></div>
                {data?.poster_path ? 
                    <img className='absolute z-1 top-16 rounded-xl w-auto mx-auto right-0 left-0 shadow-lg shadow-gray-900' style={{maxHeight: '415px'}} src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} alt="Movie Poster" /> :
                    <img className='absolute z-1 top-16 rounded-xl w-auto mx-auto right-0 left-0 shadow-lg shadow-gray-900' style={{maxHeight: '415px'}} src='/no-poster.png' alt="Movie Poster" />
                }
            </div>
            <div className='mx-4'>
                <p className='text-3xl'>{mediaType === 'movie' ? data?.title : data?.name}</p>
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
                    <div className='flex flex-col justify-center items-center w-1/2'>
                        <div className='text-gray-400'>Ratings</div>
                        <div className='text-sm'><FontAwesomeIcon icon={faStar} style={{color: "#f7be38",}} /> {data && Math.round(data.vote_average * 10)/10}</div>
                    </div>
                    <div className='border-l-2 border-gray-500'></div>
                    <div className='flex flex-col justify-center items-center w-1/2'>
                        <div className='text-gray-400 flex flex-wrap mx-3 text-center'>{mediaType==='tv' && 'Episode '}Runtime</div>
                        <div className='text-sm'><FontAwesomeIcon icon={faClock} style={{color: "#f7be38",}} /> {mediaType==='movie' ? data?.runtime :(data?.episode_run_time[0]!==undefined ? <span>{data?.episode_run_time[0]} min</span> : 'N.A')}</div>
                    </div>
                </div>
                <div className="text-lg my-2" style={{textShadow: '1px 0px 10px #d6cece'}}>Overview</div>
                <div className='text-sm text-gray-400 mb-4'>{data?.overview}</div>
                <hr className='border-gray-700'/>
                <div className='flex my-4 justify-between'>
                    <div className='flex flex-col text-sm'>
                        <div>Status: </div>
                        <div className='text-gray-400'>{data?.status}</div>
                    </div>
                    <div className='flex flex-col text-sm'>
                        <div>Release Date: </div>
                        <div className='text-gray-400'>{mediaType==='movie' ? data?.release_date : data?.first_air_date}</div>
                    </div>
                    <div className='flex flex-col text-sm'>
                        <div>Language: </div>
                        <div className='text-gray-400'>{data?.original_language}</div>
                    </div>
                </div>
                <hr className='border-gray-700'/>

                {mediaType === 'movie' ? 
                    <div className='text-sm my-4'>
                        Director: 
                        <span className='text-gray-400'> {credits.data?.crew.filter(item => item.job === 'Director')[0]?.name}</span>
                    </div>:
                    <div className='text-sm my-4'>
                        Creator: 
                        <span className='text-gray-400'> {(data?.created_by && data?.created_by.length>0) ? data?.created_by.map(item=> <span key={item.id}>{item.name}</span>) : 'N.A'}</span>
                    </div>
                }

                <hr className='border-gray-700'/>
                <div className='my-5'>
                    <h2 className="text-lg my-2" style={{textShadow: '1px 0px 10px #d6cece'}}>Top Cast</h2>
                    <div className='flex overflow-x-auto overflow-hidden gap-2 no-scrollbar'>
                        {credits.data?.cast.map((item,index) => {
                            if(index<20){
                                return (
                                    <div key={item.id}>
                                        <div className=' flex-shrink-0 h-24 w-24'>
                                            {item.profile_path ? 
                                                <img className='rounded-full h-full w-full object-cover bg-top' src={`https://image.tmdb.org/t/p/w154${item.profile_path}`} alt="" /> :
                                                <img className='rounded-full h-full w-full object-cover bg-top' src='/avatar.png'/>}
                                        </div>
                                        <div className='text-sm text-center'>{item.name}</div>
                                        <div className='text-sm text-center text-gray-400'>{item.character}</div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className='my-5'>
                    <div className="text-lg my-2" style={{textShadow: '1px 0px 10px #d6cece'}}>Similar {mediaType==='movie' ? 'Movies' : 'Shows'}</div>
                    {similar.data && <OverflowCards data={similar.data} mediaType={mediaType}/>}
                </div>
            </div></>}
        </>
    )
}

export default MovieDetails