
var allCatList = $(`.list`);
var areaForCats = $(`.area`);
var adminButton = $(`#adminButton`)
var adminView = $(`.admin`);


//constructor for cats

function Cat(id,name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.count = 0;
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
        view.initEvents();
        model.catsArray.forEach(function(cat){
            view.createList(cat);
        });
    },
    setCurrentCatById: (id) => {
        model.currentCat = model.catsArray.find((cat) => cat.id == id)  ;
        view.renderCat(model.currentCat);
    },
    getCurrentCat: () => {
        return model.currentCat;
    },
    updateCurrentCat: (name, url, count) => {

        model.currentCat.name = name;
        model.currentCat.image = url;
        model.currentCat.count = count;
        view.renderCat(model.currentCat);
        view.updateList(model.currentCat);
    },
    closeAdminView: () => {

        $(`#name`).val(``);
        $(`#clicks`).val(``);
        $(`#imgURL`).val(``);
        adminView.hide();

    }
};

var view = {
    updateList:(cat) => {
        $(`#${cat.id}`).text(`${cat.name}`);
    },
    createList: (cat) => {
        allCatList.append(`<li><a href='#'  id="${cat.id}" >${cat.name}</a>  </li>`);
    },
    renderCat: (cat) => {
        areaForCats.empty();
        areaForCats.append(`<div class='cats' id='cat${cat.id}'></div>`);
        $(`#cat${cat.id}`).append(`<h2> ${cat.name} </h2>`);
        $(`#cat${cat.id}`).append(`<img height='400' width='500' id='catImg${cat.id}' src='${cat.image}'>`);
        $(`#cat${cat.id}`).append(`<p>You clicked on this cat <span id='count${cat.id}'>${cat.count}</span> times!</p><br>`);
        var name = $(`#name`);
        var clicks = $(`#clicks`);
        var url = $(`#imgURL`);
        $(`#catImg${cat.id}`).click(function(){
            cat.count++;
            $(`#count${cat.id}`).replaceWith(`<span id="count${cat.id}">${cat.count} </span>`);

            view.updateInput(name, clicks, url);
        });
    },
    initEvents: () => {
        var name = $(`#name`);
        var clicks = $(`#clicks`);
        var url = $(`#imgURL`);
        //set 'current cat' from list(which was clicked)
        allCatList.click((e) => {
            octopus.setCurrentCatById(e.target.id);
            view.updateInput(name, clicks, url);
        });
        //show admineView area
        adminButton.click((e) => {
                adminView.removeAttr(`style`);
                view.updateInput(name,clicks,url)
                //change information about cat
        });

        $(`#save`).click((e) => {
            octopus.updateCurrentCat(name.val(), url.val(), clicks.val());
            octopus.closeAdminView();
        })
        $(`#cancel`).click((e) => {
            octopus.closeAdminView();
        })
    },
    updateInput: (name, clicks, url) => {
        name.val(octopus.getCurrentCat().name);
        clicks.val(octopus.getCurrentCat().count);
        url.val(octopus.getCurrentCat().image);
    }
};
octopus.init();
