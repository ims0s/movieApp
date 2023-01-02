import * as get from "./module.js"

async function showMoviesInHome (){
    const movieSec=document.getElementById('movies-section')
    movieSec.innerHTML=''
    get.getMovies(get.apiUrl+get.trendingMovies+get.apiKey).then((data)=>{
        data.splice(5,15)
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
    get.getTv(get.apiUrl+get.trendingTvShows+get.apiKey).then((data)=>{
        data.splice(5,15)
        console.log(data.length)
        data.forEach(movie => {
            const {original_name , poster_path}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <img src="${get.imgpath+poster_path}" alt="tvPoster">
            <p>${original_name}</p>`;
        movieSec.appendChild(movieCard)
        });
        
    })
}
async function showPeopleInHome (){
    const movieSec=document.getElementById('people-section')
    movieSec.innerHTML=''
    get.getTv(get.apiUrl+get.trendingPeople+get.apiKey).then((data)=>{
        data.splice(5,15)
        console.log(data.length)
        data.forEach(movie => {
            const {original_name , profile_path}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <img src="${get.imgpath+profile_path}" alt="person photo">
            <p>${original_name}</p>`;
        movieSec.appendChild(movieCard)
        });
        
    })
}
showMoviesInHome()
showTvInHome()
showPeopleInHome()