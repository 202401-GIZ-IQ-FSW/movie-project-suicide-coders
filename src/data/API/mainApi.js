// DON'T TOUCH
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_APP_AUTH
    }
  };
// 




  
export async function nowPlayingMovies(){
   const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
   const data = await res.json();
    return data;
}
       

export async function popularMovies(){
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const data = await res.json();
    return data;
 }

 
 export async function topRatedMovies(){
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const data = await res.json();
    return data;
 }


 export async function upComingMovies(){
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const data = await res.json();
    return data;
 }


 export async function trendingNowMovies(){
   const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
   const data = await res.json();
   return data;
}

export async function genresList(){
   const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
   const data = await res.json();
   return data;
}



