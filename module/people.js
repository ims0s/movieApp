import {apiKey,apiUrl,getPeople,imgpath,trendingPeople} from "./module.js"


async function showAllPeople(){
    const movieSec=document.getElementById('people-section')
    movieSec.innerHTML=''
    getPeople(apiUrl+trendingPeople+apiKey).then((data)=>{
        console.log(data.length)
        data.forEach(movie => {
            const {original_name , profile_path,id}=movie
            const movieCard=document.createElement('div')
            movieCard.classList.add('card')
            movieCard.innerHTML=`
            <a href=./personDetail.html?id=${id}><img src="${imgpath+profile_path}" alt="person photo">
            <p>${original_name}</p></a>`;
        movieSec.appendChild(movieCard)
        });
        
    })
}

showAllPeople();