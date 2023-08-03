import dayjs from "dayjs"

interface Result {
    poster_path: string,
    id: number,
    original_title: string,
    adult: boolean,
    backdrop_path: string,
    release_date: string
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
          <div key={item.id} className="flex flex-col flex-shrink-0 basis-28 ml-0 m-2 rounded-lg overflow-hidden shadow-lg shadow-gray-950">
            <img className="" src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}/>
            <div className="text-sm overflow-hidden text-ellipsis whitespace-nowrap p-1">{item.original_title}</div>
            <div className="text-sm p-1">{dayjs(item.release_date).format("MMM D, YYYY")}</div>
          </div>)
        })}
      </div>
  )
}

export default OverflowCards