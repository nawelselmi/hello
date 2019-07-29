function bold(){
    document.getElementById("text").style.fontWeight="bold";
}
function italic(){
    document.getElementById("text").style.fontStyle="italic";
}
function underline(){
    document.getElementById("text").style.textDecoration="underline";
}
function liste1(){
    document.getElementById("text").style.fontSize=document.getElementById("v").value;
}
function liste2(){
    document.getElementById("text").style.fontFamily=document.getElementById("n").value;
}
$(document).ready(function(){
$(".test").hide();
$(".n").mouseenter(function(){
    $(this).find("button").show();
$(this).css({ "opacity" : "0.5"});
});
$(".n").mouseleave(function(){
    $(this).find("button").hide();
$(this).css({"opacity" : "1"});
});
});
