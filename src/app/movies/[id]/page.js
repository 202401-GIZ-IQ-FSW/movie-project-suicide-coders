import { movieDetails } from "@/data/API/movieDetailsApi";

async function page({params}) {
    const movieId = params.id;

    const movieDeatilsData = await movieDetails(movieId)

  return (
    <div className="">
        <h1>{movieDeatilsData?.original_title}</h1>
    </div>
  )
}

export default page