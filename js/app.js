"use strict";




$(document).ready(function() {
/** model */
var model = {
    catFocus: null, 
    cat_array: [
        {
            name: "Fluffy",
            cc: 0,
            pic: "images/Meow.jpg"
        },
        {
            name: "Socks",
            cc: 0,
            pic: "images/Meow2.jpg"
        },
        {
            name: "Dr. Piggy",
            cc: 0,
            pic: "images/Meow3.jpg"
        },
        {
            name: "Smasher",
            cc: 0,
            pic: "images/Meow4.jpg"
        },
        {
            name: "Snuggles",
            cc: 0,
            pic: "images/Meow5.jpg"
        },
        {
            name: "Furball",
            cc: 0,
            pic: "images/Meow6.jpg"
        }
    ]
};

/** CONTROLLER */

var controller = {
    start: function() {
        model.catFocus = model.cat_array[0];

        //fire up the views
        catMenu.startUp();
        catFace.make();
    },
    catsList: function() {
        return model.cat_array;
    }
}

/** VIEWS */

var catFace = {
    make: function(catFocus){
        $(".pics-view").append("<img src=" + model.cat_array[catFocus].pic + ">");
    },
}

var catMenu = {
    startUp: function() {
        $(".cat-menu").append
        this.displayme();
    },
    displayme: function(){
        var cat, element, i;
        var mycats = controller.catsList();
        // loop over the array getting the cats one by one
        for (var i = 0; i < mycats.length; i++) {
            cat = mycats[i];
            $(".cat-menu").append(
                "<li>" + cat.name + "</li>"
            );

        }
    }
}





controller.start();
});