import {apiKey,apiUrl,getTv,imgpath,trendingTvShows,} from "./module.js"


async function showAllTvShows(){
    const movieSec=document.getElementById('tv-section')
    movieSec.innerHTML=''
    getTv(apiUrl+trendingTvShows+apiKey).then((data)=>{
        console.log(data.length)
        data.forEach(movie => {
            const {original_name , poster_path}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <img src="${imgpath+poster_path}" alt="tvPoster">
            <p>${original_name}</p>`;
        movieSec.appendChild(movieCard)
        });
        
    })
}

showAllTvShows();