const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const ingredientsBox = [];

function addingIngredients(ingredients) {
  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = document.createElement("li");
    ingredient.classList.add("item");
    ingredient.textContent = ingredients[i];
    ingredientsBox.push(ingredient);
  }
  ingredientsList.append(...ingredientsBox);
}

addingIngredients(ingredients);
