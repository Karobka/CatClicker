"use strict";




$(document).ready(function() {
/** model */
var model = {
    catFocus: null, 
    cat_array: [
        {
            name: "Fluffy",
            level: 0,
            pic: "images/Meow.jpg"
        },
        {
            name: "Socks",
            level: 0,
            pic: "images/Meow2.jpg"
        },
        {
            name: "Dr. Piggy",
            level: 0,
            pic: "images/Meow3.jpg"
        },
        {
            name: "Smasher",
            level: 0,
            pic: "images/Meow4.jpg"
        },
        {
            name: "Snuggles",
            level: 0,
            pic: "images/Meow5.jpg"
        },
        {
            name: "Furball",
            level: 0,
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
        catFace.initialrender();
    },
    getCatFocus: function() {
        return model.catFocus;
    },
    catsList: function() {
        return model.cat_array;
    },
    setCurrentCat: function(feline) {
        model.catFocus = feline;
    },
    levelup: function() {
        model.cat_array.level++;
        catFace.render();
    }
}

/** VIEWS */

var catFace = {
    initialrender: function(){
        
        this.felineElem = $(".the-catviewer");
        this.felineName = $(".cat-name");
        this.felineImage = $(".pics-view");
        this.counter = $(".count-num");
        $(this.felineImage).click(function() {
            controller.levelup();
        });
        this.render();
    },
    render: function() {
        var catFocus = controller.getCatFocus();
        $(this.counter).text(catFocus.level);
        $(this.felineName).text(catFocus.name);
        $(this.felineImage).append(
            "<img src=" + model.cat_array[catFocus].pic + ">"//NEED TO FIX THIS
        )
    }
};

var catMenu = {
    startUp: function() {
        $(".cat-menu").append
        this.displayme();
    },
    displayme: function(){
        var cat, i;
        var mycats = controller.catsList();

        var cat_element = function(catter) {
            //Need to add an on click event somewhere!!!!!!!!!
            $(".cat-menu").append("<li>" + catter + "</li>");
        } 
        $(".cat-menu").text('');
        // loop over the array getting the cats one by one
        for (var i = 0; i < mycats.length; i++) {
            cat_element.call(this, mycats[i].name);
 
            }
        }
    }



controller.start();
});