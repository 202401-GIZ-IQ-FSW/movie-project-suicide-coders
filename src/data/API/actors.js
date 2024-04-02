// DON'T TOUCH
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_APP_AUTH
    }
  };
// 


export async function popularActors(pageNumber = 1){
    const res = await fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${pageNumber}`, options);
    const data = await res.json();
    return data;
 }


 
export async function ActorDetails(id){
  const res = await fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`, options);
  const data = await res.json();
  return data;
}


export async function ActorHasMovie(id){
  const res = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`, options)  ;
  const data = await res.json();
  return data;
}
