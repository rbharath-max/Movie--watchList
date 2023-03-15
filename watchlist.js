

const rep = document.getElementById("replace-watchmovie")

const wListMovies = JSON.parse(localStorage.getItem("watchListMovies"))


document.addEventListener("click", (e) => {
    if(e.target.dataset.rem){
        handleRemove(e.target.dataset.rem)
        
    }
})
function handleRemove(mov){
    const removeBt = wListMovies.findIndex((data) => {
        return data.imdbID === mov
    })
    

    wListMovies.splice(removeBt, 1)
    localStorage.setItem("watchListMovies", JSON.stringify(wListMovies))
    renderdatas()
        
   
   

}


document.getElementById("search-movies").addEventListener("click", (e) => {
    e.preventDefault
    window.location.assign("index.html")
})


function renderdatas(){
    rep.innerHTML =''
    wListMovies.forEach(m => {
        rep.innerHTML += renderWmovies(m)
    })
    
}
renderdatas()



function renderWmovies(wmov){
    
    return    `<div class="movies-details">
           <img src="${wmov.Poster}">
           <div class="sub-details">
               <div class="sub">
                <h3>${wmov.Title}</h3>
                <i class="fa-solid fa-star">${wmov.imdbRating}</i>
               </div>
                
               <div class="sub-details2">
               <p3>${wmov.Runtime}</p3>
               <p4>${wmov.Genre}</p4>
               <i id="watchlist1" class="fa-sharp fa-solid fa-xmark" data-rem="${wmov.imdbID}"><span>Remove</span></i>
            
               
           </div> 
           <div class="plot">
                   <p3>${wmov.Plot}</p3>
               </div>   
           </div>
        
           
           </div>
    `
    
}
// renderdatas(wListMovies)
