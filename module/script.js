const apiUrl="https://api.themoviedb.org/3"
const trendingMovies="/trending/movie/week?"
const trendingTvShows='/trending/tv/week?'
const trendingPeople='/trending/person/week?'
const apiKey="api_key=75de9c2bf1d5b6ca46e3e0b5407fc0f2&"
const imgpath='https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

async function getMovies(url){
    let result = await fetch(url)
     console.log(result)
    let data= await result.json()
    console.log(data)
    let movie = await data.results
    console.log(movie)
    return movie

}
async function getPeople(url){
    let result = await fetch(url)
    console.log(result)
   let data= await result.json()
   console.log(data)
   let people = await data.results
   console.log(people)
   return people

}
async function getTv(url){
   let result = await fetch(url)
    console.log(result)
   let data= await result.json()
   console.log(data)
   let tv = await data.results
   console.log(tv)
   return tv

}

async function showMoviesInHome (){
    const movieSec=document.getElementById('movies-section')
    movieSec.innerHTML=''
    getMovies(apiUrl+trendingMovies+apiKey).then((data)=>{
        data.splice(4,15)
        console.log(data.length)
        data.forEach(movie => {
            const {title , poster_path}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}" alt="moviePic">
            <p>${title}</p>`;
        movieSec.appendChild(movieCard)
        });
        
    })
}
async function showTvInHome (){
    const movieSec=document.getElementById('tv-section')
    movieSec.innerHTML=''
    getTv(apiUrl+trendingTvShows+apiKey).then((data)=>{
        data.splice(4,15)
        console.log(data.length)
        data.forEach(movie => {
            const {original_name , poster_path}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <img src="${imgpath+poster_path}" alt="moviePic">
            <p>${original_name}</p>`;
        movieSec.appendChild(movieCard)
        });
        
    })
}
async function showPeopleInHome (){
    const movieSec=document.getElementById('people-section')
    movieSec.innerHTML=''
    getTv(apiUrl+trendingPeople+apiKey).then((data)=>{
        data.splice(4,15)
        console.log(data.length)
        data.forEach(movie => {
            const {original_name , profile_path}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <img src="${imgpath+profile_path}" alt="moviePic">
            <p>${original_name}</p>`;
        movieSec.appendChild(movieCard)
        });
        
    })
}
showMoviesInHome()
showTvInHome()
showPeopleInHome()