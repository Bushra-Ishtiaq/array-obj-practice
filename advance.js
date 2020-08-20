// THE RECIPE CARD 
let recipe ={
    name: "Biryani",
    serving: 3,
    ingredients: ["meat", "rice", "potato", "spices", "water", "onion"]
}
console.log("Recipe name " + recipe.name);
console.log("services: " + recipe.serving);
console.log("Ingredients of"+ " " + recipe.name +" " + "are")
recipe.ingredients.forEach(element => {
    console.log(element)
});


// THE READING LIST 
let book = [
    {
        title: "The Silent Cry",
        author: "Kenjaburo Ue",
        isRead: true,
    },
    {
        title: "Mother",
        author: "Maxim Gorky",
        isRead: false,
    },
    {
        title: "Black Taj",
        author: "Mohini Kent",
        isRead: true,
    },
    {
        title: "A Time to Be Happy",
        author: "Nayantara Sahgal",
        isRead: false,
    }
]

book.forEach(element =>{
    console.log(element.title + ' '+ 'by'+ ' '+ element.author)
    if(element.isRead == true){
        console.log (
           ' You already read' + ' '+ element.title + ' '+'by' + ' ' + element.author
        )
    } else{
        console.log (
            ' First You read ' + element.title + ' '+ 'by' + ' '+ element.author
         )
    }
    console.log ('============');
})

// ====================================THE END ADVANCE LEVEL =======================================