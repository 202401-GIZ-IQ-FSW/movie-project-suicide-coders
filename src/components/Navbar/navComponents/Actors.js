import Link from "next/link"


const Actors = () => {
  return (
    
    <p className="text-xl md:mt-[2px]  md:text-xl   mt-10 md:p-0 md:border-none border-b-[.2px] w-screen md:w-fit py-4">
    <Link href={{
        pathname: `/actors`,
    }}>
    Actors
    </Link>
    
    </p>
  )
}

export default Actors