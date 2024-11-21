import recipes from "./recipes.mjs";

function randomGen(max){
    return Math.floor(Math.random() * max)
}

function randomRecipe(list){
    const length = list.length;
    const recipeNumber = randomGen(length);
    return list[recipeNumber];
}

function recipeTemplate(recipe){
    const tags = tagsTemplate(recipe.tags)
    const rating = ratingTemplate(recipe.rating)
    return `<section class="recipe-container">
        <div id="recipe_image">
            <img src="${recipe.image}" alt="Image of ${recipe.name}">
        </div>
        <div id="recipe_content">
            <div class="tags">${tags}</div>
            <h2>${recipe.name}</h2>
            ${rating}
            <p>
                ${recipe.description}
            </p>

        </div>
    </section>`
}

function tagsTemplate(tags){
    let html=``;
    for ( let i = 0; i < tags.length; i++){
        html += `<h2>${tags[i]}</h2>`;
    }
    return html;
}

function ratingTemplate(rating){
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`

    for (let i = 1; i < 6; i++){
        if (i <= rating){
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;

    return html;

}

function renderRecipes(recipeList){
    const html = document.querySelector('#content');
    let code = recipeList.map(recipeTemplate);
    code = code.join("");
    html.innerHTML = code;
}

function init(){
    const recipe = randomRecipe(recipes);
    renderRecipes([recipe]);
}

function filterRecipes(query){
    const filtered = recipes.filter((item) => {
        return(
            item.name.includes(query) ||
            item.description.includes(query) ||
            item.tags.find((tag) => tag.toLowerCase().includes(query))
        );
    });

    const sortedRecipes = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sortedRecipes;
}

function searchHandler(event){
    event.preventDefault();
    const input = document.querySelector("#search").value.toLowerCase();
    let recipesFound = filterRecipes(input);
    renderRecipes(recipesFound);
}

init();
document.querySelector("#search-button").addEventListener('click', searchHandler);