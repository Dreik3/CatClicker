var ViewModel = function() {

    this.clickCount = ko.observable(0);
    this.name = ko.observable("Baron");
    this.imgUrl = ko.observable("images/cat1.jpg");
    this.incrementCount = () => {
        this.clickCount(this.clickCount() + 1);
        };
    this.level =ko.computed(() => {
        if (this.clickCount() < 10) {
            return "Newborn";
        } else if (this.clickCount() < 110) {
            return "Infant";
        } else {
            return "Teen";
        };
    }, this);
};



ko.applyBindings(new ViewModel());