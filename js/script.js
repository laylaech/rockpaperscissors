// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
Math.floor((Math.random() * 3) + 1);
var scissors= 1
var rock= 2
var paper = 3

$("#shoot").click(function() {
    var user_input = $("#input").val();
    $("#userChoice").text(user_input);
});

// DOCUMENT READY FUNCTION BELOW

