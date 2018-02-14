
var allCatList = $(".list");
var areaForCats = $(".area");
//constructor for cats

function Cat(id,name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.count = 0;
    //this.onScreen = false;
};
var model = {
    currentCat: null,
    catsArray: [
            new Cat(1,"Eddy", "images/cat1.jpg"),
            new Cat(2,"Diana", "images/cat2.jpg"),
            new Cat(3,"Baron", "images/cat3.jpeg"),
            new Cat(4,"Liza", "images/cat4.jpeg"),
            new Cat(5,"Ksenia", "images/cat5.jpg")
                ]
};

var octopus = {
    init : () => {
        model.catsArray.forEach(function(cat){
            view.createList(cat);
        });
    },
    setCurrentCatById: (id) => {
        model.currentCat = model.catsArray.find((cat) => cat.id == id);
        view.renderCat(model.currentCat);
    }
};

var view = {
    createList: (cat) => {
        allCatList.append(`<li><a href='#'  id="${cat.id}" >${cat.name}</a>  </li>`);
    },
    renderCat: (cat) => {
        areaForCats.html('');
        areaForCats.append(`<div class='cats' id='cat${cat.id}'></div>`);
        debugger;
        $(`#cat${cat.id}`).append(`<h2> ${cat.name} </h2>`);
        $(`#cat${cat.id}`).append(`<img height='400' width='500' id='catImg${cat.id}' src='${cat.image}'>`);
        $(`#cat${cat.id}`).append(`<p>You clicked on this cat <span id='count${cat.id}'>${cat.count}</span> times!</p><br>`);

        $(`#catImg${cat.id}`).click(function(){
            cat.count++;
            $(`#count${cat.id}`).replaceWith(`<span id="count${cat.id}">${cat.count} </span>`);
        });

    },
    initEvents: () => {
        allCatList.click((e) => {
            octopus.setCurrentCatById(e.target.id);
        })
    }
};
octopus.init();
view.initEvents();