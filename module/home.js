import * as get from "./module.js"

async function showMoviesInHome (){
    const movieSec=document.getElementById('movies-section')
    movieSec.innerHTML=''
    get.getMovies(get.apiUrl+get.trendingMovies+get.apiKey).then((data)=>{
        data.splice(5,15)
        console.log(data.length)
        data.forEach(movie => {
            const {title , poster_path,id}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <a href="./pages/detail.html?id=${id}"><img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}" alt="moviePic">
            <p>${title}</p></a>`;
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
            const {original_name , poster_path,id}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <a href="./pages/tvDetails.html?id=${id}"><img src="${get.imgpath+poster_path}" alt="tvPoster">
            <p>${original_name}</p></a>`;
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
            const {original_name , profile_path,id}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <a href=./pages/personDetail.html?id=${id}><img src="${get.imgpath+profile_path}" alt="person photo">
            <p>${original_name}</p>`;
        movieSec.appendChild(movieCard)
        });
        
    })
}
showMoviesInHome()
showTvInHome()
showPeopleInHome()