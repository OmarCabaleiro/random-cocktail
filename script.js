var cocktails = ["Amaretto Sour", "Aperol Spritz", "Bay Breeze", "Bellini", "Cosmopolitan", "Dirty Martini", "French 75", "Gimlet", "Godfather", "Long Island Iced Tea", "Madras", "Martini", "Manhattan", "Margarita", "Mimosa", "Negroni", "New York Sour", "Old Fashioned", "Perfect Manhattan", "popular Highballs, general", "Rob Roy (Scotch Manhattan)", "Scotch Sour", "Sea Breeze", "Sex on the Beach", "Side Car", "Tequila Sunrise", "Tom Collins"]

// draw 1 random cocktail name from array
function drawCocktail() {
  output.innerHTML = cocktails[Math.floor(Math.random() * cocktails.length)];
}