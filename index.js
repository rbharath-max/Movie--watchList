const btn = document.getElementById("btn-search")
const inputEl = document.getElementById("input-el")
const replaceMovies = document.getElementById("replace-movie")

const movieArray =[]
let watchList = []




document.addEventListener("click", (e) => {
    e.preventDefault

    if(e.target.dataset.add){
        handleWatchList(e.target.dataset.add)
    }
})







btn.addEventListener("click", (e)=> {
    e.preventDefault
    console.log(inputEl.value)
   fetch(`https://www.omdbapi.com/?s=${inputEl.value}&apikey=da83bfc2`)
        .then(res => res.json())
        .then(data => {
            data.Search.forEach((searchTitle) => {
                fetch(`https://www.omdbapi.com/?t=${searchTitle.Title}&apikey=da83bfc2`)
                .then(res => res.json())
                .then( data => {
                    movieArray.push(data)
                    render(data)

                } )
            })
        })


})

function handleWatchList(mov){
    const targetObj = movieArray.find((id) => id.imdbID === mov)
        console.log(targetObj)

    watchList.push(targetObj)
    console.log(watchList)
    localStorage.setItem("watchListMovies", JSON.stringify(watchList))

}


function render(datas){
    replaceMovies.innerHTML += renderMovie(datas)
}


function renderMovie(movies){
    let html = ''
    return `
    <div class="movies-details">
           <img src="${movies.Poster}">
           <div class="sub-details">
               <div class="sub">
                <h3>${movies.Title}</h3>
                <i class="fa-solid fa-star">${movies.imdbRating}</i>
               </div>
                
               <div class="sub-details2">
               <p3>${movies.Runtime}</p3>
               <p4>${movies.Genre}</p4>
               <i id="watchlist" class="fa-solid fa-circle-plus"
                data-add="${movies.imdbID}"><span>Watchlist</span></i>
               
           </div> 
           <div class="plot">
                   <p3>${movies.Plot}</p3>
               </div>   
           </div>
        
           
           </div>
    
    
    
    `
    
}

document.getElementById("watch-html-two").addEventListener("click", (e) => {
    console.log("buttonclicked")
window.location.assign("watchlist.html")
})


