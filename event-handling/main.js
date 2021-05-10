$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
        $("h2").hide();
    });
    $("button").dblclick(function(){
        $("p").show();
        $("h2").hide();
    });

    $("input").focus(function(){
        $(this).css("background-color","yellow");
    });
    $("input").blur(function(){
        $(this).css("background-color","green");
    });
})

$(function(){
//code
//click method

// $("#demo").click(function(){
//     console.log("buttton clicked");
// });

//on() to handle click event
$("#demo1").on("click" ,function(){
    console.log("buttton clicked");
});
// on() to handle dblclick
$("#demo2").on("dblclick" ,function(){
    alert("buttton double clicked!");
});

//submit event
$("#sample-form1").submit(function(){
    var text=$("#sample-input1").val();
    console.log(text);
});
});