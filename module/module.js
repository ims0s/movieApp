export const apiUrl="https://api.themoviedb.org/3"
export const trendingMovies="/trending/movie/week"
export const trendingTvShows='/trending/tv/week'
export const trendingPeople='/trending/person/week'
export const apiKey="?api_key=75de9c2bf1d5b6ca46e3e0b5407fc0f2&"
export const imgpath='https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

export async function getMovies(url){
    let result = await fetch(url)
     console.log(result)
    let data= await result.json()
    console.log(data)
    let movie = await data.results
    console.log(movie)
    return movie

}
export async function getPeople(url){
    let result = await fetch(url)
    console.log(result)
   let data= await result.json()
   console.log(data)
   let people = await data.results
   console.log(people)
   return people

}
export async function getTv(url){
   let result = await fetch(url)
    console.log(result)
   let data= await result.json()
   console.log(data)
   let tv = await data.results
   console.log(tv)
   return tv

}