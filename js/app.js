/*var count = 0;

$('#cat').click(function(){
    console.log(count);
    count += 1;
    $('#count').replaceWith('<span id="count">' + count + '</span>');
});
*/

//constructor for cats
function Cat(name, image) {
    this.name = name;
    this.image = image;
    this.count = 0;
}
var catsArray = [];
//initializing cats
catsArray[0] = new Cat("Дуся", "images/cat1.jpg");
catsArray[1] = new Cat("Маруся", "images/cat2.jpg");

catsArray.forEach(function(cat, i, catsArray){
    $('body').append("<div class='cats' id='cat" + i + "'></div>");
    $('#cat' + i).append("<h1>" + catsArray[i].name + "</h1>");
    $('#cat' + i).append("<img height='400' width='500' id='catImg" + i + "' src='" + catsArray[i].image + "'>");
    $('#cat' + i).append("<p>You clicked on this cat <span id='count" + i + "'>0</span> times!</p>");
    $('#catImg' + i).click(function(){
        catsArray[i].count += 1;
        $('#count' + i).replaceWith('<span id="count'+ i +'">' + catsArray[i].count + '</span>');
    });
});
