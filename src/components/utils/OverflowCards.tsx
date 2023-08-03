import dayjs from "dayjs"

interface Result {
    poster_path: string,
    id: number,
    title: string,
    adult: boolean,
    backdrop_path: string,
    release_date: string,
    vote_average: number
}

interface ResultArr {
    results: Result[]
}

interface OverflowCards {
    data: ResultArr
}


const OverflowCards: React.FC<OverflowCards> = ({data}) => {
  return (
    <div className="flex overflow-x-auto">
        {data?.results.map((item:Result) => {
          return (
          <div key={item.id} className="flex text-sm justify-between flex-col relative flex-shrink-0 basis-28 ml-0 m-2 rounded-lg overflow-hidden shadow-lg shadow-gray-950">
            <img className="" src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}/>
            <div className="absolute bottom-14 right-0.5 flex justify-center items-center h-8 w-8 bg-black rounded-full border border-[#F7BE38] font-medium">{item.vote_average}</div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap mt-3 p-1">{item.title}</div>
            <div className="p-1">{dayjs(item.release_date).format("MMM D, YYYY")}</div>
          </div>)
        })}
      </div>
  )
}

export default OverflowCards