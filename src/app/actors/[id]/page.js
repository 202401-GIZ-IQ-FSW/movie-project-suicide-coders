import { ActorDetails, ActorHasMovie } from "@/data/API/actors"


async function page ({params}) {
  const ActorId = params.id;
  const actorDetailsData = await ActorDetails(ActorId);
  const actorHasMovieData = await ActorHasMovie(ActorId);

  const { name, profilePath, gender, popularity, birthday, biography } = actorDetailsData;
  
  return (
    <div className="flex flex-col items-center py-8">
      {profilePath && (
        <img
          src={`https://image.tmdb.org/t/p/original${profilePath}`}
          alt={name}
          className="rounded-full h-48 w-48 object-cover shadow-lg mb-4"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <div className="flex flex-col items-start w-full max-w-md px-4">
        <p className="text-gray-600 mb-2">Gender: {gender === 1 ? 'Female' : 'Male'}</p>
        <p className="text-gray-600 mb-2">Popularity: {popularity}</p>
        <p className="text-gray-600 mb-2">Birthday: {birthday}</p>
        <p className="text-gray-600 mb-2">Biography:</p>
        <p className="text-gray-600 mb-2">{biography}</p>
      </div>
    </div>
  )
}

export default page