
function getMovies(url){
    fetch(url).then((res) => res.json()).then((data) => {
        for(let i =0 ; i<5;i++){
            console.log(data.results[i])
        }
    })
}
getMovies("https://api.themoviedb.org/3/trending/movie/week?api_key=75de9c2bf1d5b6ca46e3e0b5407fc0f2&limit=5")