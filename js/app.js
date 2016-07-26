"use strict";
var cat1_count = 0;
var cat2_count = 0;
var cat3_count = 0;
var cat4_count = 0;
var cat5_count = 0;
var cat6_count = 0;

var cat_array = [
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
];
$(document).ready(function() {
    $(".start-game").click(function(event){
        event.preventDefault();
        $(".game-start").hide();
        $(".pics-view").show().css("display", "inline-block");
    });

    for (var i = 0; i < cat_array.length; i++) {
        var clickNum = cat_array[i].cc;
        
        var numUpdate = $(".count-num").text(clickNum);
    }

    $(".cat-menu").click()
    $(".cat-name").text();
    $(".meow2").text("FooFoo");
    $(".cat-pic1").on("click", function(event) {
        count1++;
        $(".count-num1").text(count1);
    });
    $(".cat-pic2").on("click", function(event) {
        count2++;
        $(".count-num2").text(count2);
    });
});




