import {apiKey , apiUrl , imgpath , getMovies ,trendingMovies } from "./module.js"

const getMovie="/person/"
const recommendation="/movie_credits"
const pageOverview=document.getElementById("overview")
const pageTitle=document.getElementById("title")
const pagePoster = document.getElementById("poster")
const movieId=location.search.split('=')[1]
const pagegenres=document.getElementById('genre')


async function getmovie(id){
    let result = await fetch(apiUrl+getMovie+`${id}`+apiKey)
     console.log(result)
    let data= await result.json()
    
    return data
}

async function showDetail(){
    getmovie(movieId).then((movie) =>{
        console.log(movie)
        const {name , biography , profile_path,place_of_birth} = movie
        pagePoster.src=imgpath+profile_path
        pageTitle.innerHTML=name
        pageOverview.innerHTML=biography
        pagegenres.innerText=""
        
        let page=document.createElement("p")
        page.innerHTML=place_of_birth
        pagegenres.appendChild(page)
        

    })
    
}
async function showRecommendedMovies (){
    const movieSec=document.getElementById('movies-section')
    movieSec.innerHTML=''
    getmovie(movieId+recommendation).then((data)=>{return data.cast}).then((data)=>{
        data.splice(6,data.length - 6)
        console.log(data.length)
        data.forEach(movie => {
            const {title , poster_path,id}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <a href="./detail.html?id=${id}"><img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}" alt="moviePic">
            <p>${title}</p></a>`;
            movieSec.appendChild(movieCard)
        });
        
    })
}
showDetail()
showRecommendedMovies()