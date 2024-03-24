// DON'T TOUCH
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_APP_AUTH
    }
  };
// 


export async function popularActors(){
    const res = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options);
    const data = await res.json();
    return data;
 }

 const fetchActors = async () => {
  try {
    const data = await popularActors();
    setActors(data);
  } catch (error) {
    console.error("Error fetching actors:", error);
    // Handle error (e.g., show error message to user)
  }
};

fetchActors()