import { faTv } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


const TvShows = () => {
  return (
    
    <p className="text-xl cha-font md:mt-[2px]  md:text-xl   mt-10 md:p-0 md:border-none border-b-[.2px] w-screen md:w-fit py-4">
    <Link href={{
        pathname: `/tvshows`,
    }}>
    <FontAwesomeIcon className="text-sm w-5" icon={faTv}/> Tv Shows
    </Link>
    
    </p>
  )
}

export default TvShows