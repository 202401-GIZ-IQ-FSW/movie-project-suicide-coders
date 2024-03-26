// DON'T TOUCH
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_APP_AUTH
    }
  };
// 




  
export async function nowPlayingMovies(pageNumber = 3){
   const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`, options);
   const data = await res.json();
    return data;
}
       

export async function popularMovies(pageNumber = 2){
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`, options)
    const data = await res.json();
    return data;
 }

 
 export async function topRatedMovies(pageNumber = 1){
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}`, options);
    const data = await res.json();
    return data;
 }


 export async function upComingMovies(pageNumber = 2){
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber}`, options);
    const data = await res.json();
    return data;
 }


 export async function trendingNowMovies(trendTime = "day"){
   const res = await fetch(`https://api.themoviedb.org/3/trending/movie/${trendTime}?language=en-US`, options);
   const data = await res.json();
   return data;
}

export async function genresList(){
   const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
   const data = await res.json();
   return data;
}



export async function SearchQuery(query, pageNumber){
   const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${pageNumber}`, options);
   const data = await res.json();
   return data;
}


export async function trendingNowTv(trendTime = "day"){
   const res = await fetch(`https://api.themoviedb.org/3/trending/tv/${trendTime}?language=en-US`, options);
   const data = await res.json();
   return data;
}

export async function airingToday(){
   const res = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options) ;
   const data = await res.json();
   return data;
}

export async function onTheAir(){
   const res = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=3', options)   ;
   const data = await res.json();
   return data;
}

export async function popularTvShows(){
   const res = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=2', options)   ;
   const data = await res.json();
   return data;
}


export async function topRatedTvShows(){
   const res = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)   ;
   const data = await res.json();
   return data;
}




