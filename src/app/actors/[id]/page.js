import { ActorDetails, ActorHasMovie } from "@/data/API/actors"


async function page ({params}) {
  const ActorId = params.id;
  const actorDetailsData = await ActorDetails(ActorId);
  const actorHasMovieData = await ActorHasMovie(ActorId);
  
  return (
    <div>each actors page</div>
  )
}

export default page