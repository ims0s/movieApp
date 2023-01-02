import {apiKey , apiUrl , imgpath , getMovies ,trendingMovies } from "./module.js"

console.log(apiUrl+trendingMovies+apiKey)

async function showAllMovies(){
    const movieSec=document.getElementById('movies-section')
    movieSec.innerHTML=''
    getMovies(apiUrl+trendingMovies+apiKey).then((data)=>{
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
showAllMovies()
