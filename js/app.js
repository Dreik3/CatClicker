var allCatList = $(".list");
var areaForCats = $('.area');
//constructor for cats
function Cat(name, image) {
    this.name = name;
    this.image = image;
    this.count = 0;
    this.onScreen = false;
}
var catsArray = [];
//initializing cats
catsArray.push(new Cat("Eddy", "images/cat1.jpg"));
catsArray.push(new Cat("Diana", "images/cat2.jpg"));
catsArray.push(new Cat("Baron", "images/cat3.jpeg"));
catsArray.push(new Cat("Liza", "images/cat4.jpeg"));
catsArray.push(new Cat("Ksenia", "images/cat5.jpg"));
console.log(catsArray);
// add all our cats in array

catsArray.forEach(function(cat, i, catsArray){
    allCatList.append(`<li id="${i}"><a href='#'>${catsArray[i].name}</a></li>`);
});
// array for cats which we clicked
var catFromList = $("li");

var chosenArray = [];
catFromList.click(function(){
    var catId = $(this).attr('id');
    var check = false;
    for (i = 0; i < chosenArray.length; i++){
        if (chosenArray[i] === catsArray[catId]){
            check = true;
        };
    };
    if (check === false) {
        chosenArray.push(catsArray[catId]);
    }
    console.log(chosenArray);
    // display cats from chosenArray (only if not displayed yet)
    chosenArray.forEach(function(cat, i, chosenArray){
        if (chosenArray[i].onScreen === false){
            areaForCats.append("<div class='cats' id='cat" + i + "'></div>");
            $('#cat' + i).append("<h2>" + chosenArray[i].name + "</h2>");
            $('#cat' + i).append("<img height='400' width='500' id='catImg" + i + "' src='" + chosenArray[i].image + "'>");
            $('#cat' + i).append("<p>You clicked on this cat <span id='count" + i + "'>0</span> times!</p><br>");
            $('#catImg' + i).click(function(){
                chosenArray[i].count += 1;
                $('#count' + i).replaceWith('<span id="count'+ i +'">' + chosenArray[i].count + '</span>');
            });
            chosenArray[i].onScreen = true;
        };

    });
});

