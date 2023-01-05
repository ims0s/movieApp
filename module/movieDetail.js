import {apiKey , apiUrl , imgpath , getMovies ,trendingMovies } from "./module.js"

const getMovie="/movie/"

const pageOverview=document.getElementById("overview")
const pageTitle=document.getElementById("title")
const pagePoster = document.getElementById("poster")
const movieId=location.search.split('=')[1]
const pagegenres=document.getElementById('genre')
async function getmovie(id){
    let result = await fetch(apiUrl+getMovie+`${id}?`+apiKey)
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

showDetail()