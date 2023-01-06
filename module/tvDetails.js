import {apiKey , apiUrl , imgpath , getMovies ,trendingMovies } from "./module.js"

const getMovie="/tv/"
const recommendation="/recommendations"
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
        const {title , overview , poster_path,genres} = movie
        pagePoster.src=imgpath+poster_path
        pageTitle.innerHTML=title
        pageOverview.innerHTML=overview
        pagegenres.innerText=""
        genres.forEach(genre => {
            let page=document.createElement("p")
            page.innerHTML=genre.name
            pagegenres.appendChild(page)
        });

    })
    
}
async function showRecommendedMovies (){
    const movieSec=document.getElementById('movies-section')
    movieSec.innerHTML=''
    getMovies(apiUrl+getMovie+movieId+recommendation+apiKey).then((data)=>{
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
showDetail()
showRecommendedMovies()