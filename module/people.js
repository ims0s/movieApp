import {apiKey,apiUrl,getPeople,imgpath,trendingPeople} from "./module.js"


async function showAllPeople(){
    const movieSec=document.getElementById('people-section')
    movieSec.innerHTML=''
    getPeople(apiUrl+trendingPeople+apiKey).then((data)=>{
        console.log(data.length)
        data.forEach(movie => {
            const {original_name , profile_path}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <img src="${imgpath+profile_path}" alt="person photo">
            <p>${original_name}</p>`;
        movieSec.appendChild(movieCard)
        });
        
    })
}

showAllPeople();