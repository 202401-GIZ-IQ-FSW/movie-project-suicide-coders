"use client"
import { faStar, faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";


const ActorCard = ({ actor }) => {
    const src = "https://image.tmdb.org/t/p/original";
  
    return (
  <div className="card card-compact bg-base-100 shadow-xl md:w-[13rem] w-[9rem]  h-full m-1">
      <Link href={{
          pathname: `/actors/${actor.id}`,
      }}>
                  <figure>
                    <img
                    className="w-[14rem] rounded-md"
                     src={src + actor.profile_path}
            alt={actor.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-base lg:text-xl">{actor.name}</h2>
              <p>{actor.popularity.toFixed(1)}</p>
                  </div>
        </Link>
      </div>
    );
  };
  



const ActorsMain = ({actorsData, pageNumber}) => {
    const router = useRouter();

     function handleClick({target}) {
    router.push(`/actors?page=${target.value}`)
  }
  return (
    <div className="w-full px-4 py-8">
    <div className="flex justify-between w-full">
      <h2 className="text-2xl font-bold mb-4">Popular Actors</h2>
      <div className="join ">
        <button onClick={()=>{
            pageNumber > 1 ? router.push(`actors?page=${pageNumber - 1}`): false;
          }} className="join-item btn md:text-[16px] md:mx-2 text-red-600"><FontAwesomeIcon icon={faBackward}/></button>
          <button onClick={handleClick} value={pageNumber} className="join-item btn md:text-[16px] md:mx-2">{pageNumber}</button>
          <button onClick={()=>{
            router.push(`/actors?page=${1}`)
          }}  className="join-item btn md:text-[16px] md:mx-2">Reset</button>
          <button onClick={handleClick} value={actorsData.total_pages > 1000 ? 500 : actorsData.total_pages} className="join-item btn md:text-[16px] md:mx-2">{actorsData.total_pages > 1000 ? 500 : actorsData.total_pages}</button>
          <button onClick={()=>{
            pageNumber < 500 ? router.push(`/actors?page=${pageNumber - 1 + 2}`): false;
          }} className="join-item btn md:text-[16px] md:mx-2 text-red-600"><FontAwesomeIcon icon={faForward}/></button>
        </div>
    </div>
      <div className="flex flex-wrap gap-2 items-center py-5 justify-evenly">
        {actorsData.results.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  )
}

export default ActorsMain