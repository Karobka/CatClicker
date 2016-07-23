"use strict";
var count = 0;
$(document).ready(function() {
    $(".meow1").text("Fluffy");
    $(".meow2").text("FooFoo");
    $(".cat-pic").on("click", function(event) {
        count++;
        $(".count-num").text(count);
    });
});