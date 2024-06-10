const cocktails = [
  "50/50 Martini", "Amaretto Sour", "Aperol Spritz", "Appletini", "Bay Breeze", "Bellini", "Bloody Mary", "Boulevardier (rocks)", "Boulevardier (up)", "Brandy Flip", "Caipirinha", "Cosmopolitan", "Daiquiri", "Dark 'n' Stormy", "Death in the Afternoon (Hemingway Champagne)", "Dirty Martini", "Dry Manhattan", "Dry Martini", "Extra Dry Martini", "French 125", "French 75", "Gibson", "Gimlet", "Gin Sour", "Godfather", "John Collins", "Kamikaze", "Long Island Iced Tea", "Madras", "Mai Tai", "Martini", "Manhattan", "Margarita", "Midori Sour", "Mimosa", "Mojito (fresh)", "Mojito (shortcut)", "Moscow Mule", "Negroni", "New York Sour", "Old Fashioned", "Perfect Manhattan", "Paloma", "Pina Colada", "Pina Colada (shaken, rocks)", "Pisco Sour", "popular Highballs, general", "Rob Roy (Scotch Manhattan)", "Sangria (pitcher)", "Scotch Sour", "Screwdriver", "Sea Breeze", "Sex on the Beach", "Side Car", "Tequila Sunrise", "Tom Collins", "Vesper", "Vodka Collins", "Vodka Sour", "Wet Martini"
]

// draw 1 random cocktail name from array
function drawCocktail() {
  output.innerHTML = cocktails[Math.floor(Math.random() * cocktails.length)];
}