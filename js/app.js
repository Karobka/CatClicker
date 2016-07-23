"use strict";
var count = 0;
$(document).ready(function() {
    $(".cat-pic").on("click", function(event) {
        count++;
        $(".count-num").text(count);
    });
});