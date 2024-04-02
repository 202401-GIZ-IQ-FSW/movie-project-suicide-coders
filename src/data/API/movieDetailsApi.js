"use server"

// DON'T TOUCH
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_APP_AUTH
    }
  };
// 



export async function movieDetails(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
    const data = await res.json();
    return data;
}

export async function MovieSimilar(id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options);
  const data = await res.json();
  return data;
}

export async function MovieVideos(id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)  ;
  const data = await res.json();
  return data;
}

export async function ActorsInMovie(id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
  const data = await res.json();
  return data;
}






export async function Reviews(){
  const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
  const data = await res.json();
  return data;
}

