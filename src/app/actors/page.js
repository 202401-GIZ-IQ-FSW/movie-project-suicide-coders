
import ActorsMain from "@/components/ActorsPage/ActorsMain";
import { popularActors } from "../../data/API/actors";
import { useRouter } from "next/navigation";




async function ActorsList({searchParams}) {
  const pageNumber = searchParams.page ? searchParams.page : 1;
  const actorsData = await popularActors(pageNumber);
  

  return (
    <ActorsMain actorsData={actorsData} pageNumber={pageNumber}/>
  );
};

export default ActorsList;
