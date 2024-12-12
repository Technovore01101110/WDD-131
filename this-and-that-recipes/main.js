import recipes from "./recipes.mjs";

function tagsTemplate(tags){
    let code =``;
    for (let i = 0; i < tags.length; i++){
        code += `<h3>${tags[i]}</h3>`
    }
    return code;
}

function ratingTemplate(rating){
    let code = `<h3 
    aria-label= "Rating: ${rating} out of 5 stars">`

    for (let i = 1; i < 6; i++){
        if (i <= rating){
            code += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else{
            code += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }

    code += `</h3>`

    return code
}

function recipeTemplate(recipe){
    const tags = tagsTemplate(recipe.tags);
    const rating = ratingTemplate(recipe.rating);
    return `<article class="recipe">
                <img src="${recipe.image}" alt="${recipe.name}"> 
                <div>
                    <h2>${recipe.name}</h2>
                    ${rating}
                    <div class="tags">${tags}</div>
                    <p>${recipe.description}</p>
                </div>  
            </article>`
}

function filterRecipes(query, sort, type, maxTime, rating){
    maxTime = parseInt(maxTime);
    
    if (rating != 'any'){
        rating = parseInt(rating);
    }

    if (isNaN(maxTime)){
        maxTime = '10000000'
    }
 
    const filteredSearch = recipes.filter((item) => {
        return(
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.tags.find((tag) => tag.toLowerCase().includes(query))
        )});
    let filtered;
    if (type == 'any' && rating == 'any'){
        filtered = filteredSearch.filter((item) => {
            return(
                item.time <= maxTime
            )
        });
    }else if (type == 'any'){
        filtered = filteredSearch.filter((item) => {
            return(
                item.time <= maxTime &&
                item.rating >= rating
            )
        });
    } else if (rating == 'any'){
        filtered = filteredSearch.filter((item) => {
            return(
                item.tags.find((tag) => tag.toLowerCase().includes(type)) &&
                item.time <= maxTime
            ) 
        });
    } else{
        filtered = filteredSearch.filter((item) => {
            return(
                item.tags.find((tag) => tag.toLowerCase().includes(type)) &&
                item.time <= maxTime &&
                item.rating >= rating
            ) 
        });
    }

    let sortedRecipes;

    switch (sort) {
        case 'aToz':
            sortedRecipes = filtered.sort((a,b) => a.name.localeCompare(b.name));
        break;
        case 'time':
            sortedRecipes = filtered.sort((a,b) => a.time - b.time);
        break;
        default:
            sortedRecipes = filtered.sort((a,b) => a.name.localeCompare(b.name));
    }

    return sortedRecipes;

};

function renderRecipes(recipeList){
    const html = document.querySelector('#recipes');
    let recipes = recipeList.map(recipeTemplate);
    recipes = recipes.join('');
    html.innerHTML = recipes;
}

function init(){
    const input = document.querySelector('#searchBar').value.toLowerCase();
    const sort = document.querySelector('#sort').value;
    const type = document.querySelector('#type').value;
    const maxTime = document.querySelector('#time').value.toLowerCase();
    const rating = document.querySelector('#rating').value;
    let recipesFound = filterRecipes(input, sort, type, maxTime, rating);
    renderRecipes(recipesFound);
}


function searchHandler(event){
    event.preventDefault();
    const input = document.querySelector('#searchBar').value.toLowerCase();
    const sort = document.querySelector('#sort').value;
    const type = document.querySelector('#type').value;
    const maxTime = document.querySelector('#time').value;
    const rating = document.querySelector('#rating').value;
    let recipesFound = filterRecipes(input, sort, type, maxTime, rating);
    renderRecipes(recipesFound);
}

// Filter Button
function filterHandler(event){
    event.preventDefault();
    this.classList.toggle('filterActive');
    const filters = document.querySelector('.filters');
    filters.classList.toggle('hidden');
}

function handleResize(){
    const filters = document.querySelector(".filters");
    const filterB = document.querySelector('.filterButton');
    filterB.classList.remove('filterActive')
    if (window.innerWidth > 768){
        filters.classList.remove("hidden");
        filterB.classList.add('hidden')
    } else {
        filters.classList.add("hidden");
        filterB.classList.remove('hidden');
 }
}

function viewerTemplate(recipe) {
    return `<div class="viewer">
            <article id="document">
                <button class="close-viewer">X</button>
                <h3>${recipe.name}</h3>
                <p id="description">${recipe.description}</p>
                <img src="${recipe.image}" alt="${recipe.name}">
                <h4>Total Prep Time: ${recipe.time} min</h4>
                <p id="directions">${recipe.instructions}</p>
            </article>
        </div>`;
  }

//Expand page.
function viewHandler(){
    const target = event.target;
    const article = target.closest('article');
    const name = article.querySelector('h2').innerText;
    console.log(name);
    const recipe = findRecipe(name);
    console.log(recipe)
    const html = viewerTemplate(recipe);
    document.body.insertAdjacentHTML("afterbegin", html);
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

function findRecipe(query){
        return recipes.find(item =>
            item.name.toLowerCase() === query.toLowerCase()
        );

}

function closeViewer(){
    const parent = event.target.closest('div');
    parent.remove();
}


// Main commands
init();
handleResize();
window.addEventListener('resize', handleResize);
document.querySelector('#searchButton').addEventListener('click', searchHandler);
document.querySelector('.filterButton').addEventListener('click', filterHandler);
document.querySelector('#recipes').addEventListener('click',viewHandler);

