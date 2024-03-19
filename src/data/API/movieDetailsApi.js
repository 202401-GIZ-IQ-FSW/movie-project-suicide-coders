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
