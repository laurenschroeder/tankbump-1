document.getElementById("toggle").addEventListener("click", function(){
    $("#side-bar").toggleClass("collapsed");
    $("#toggle").toggleClass("glyphicon-menu-left");
    $("#toggle").toggleClass("glyphicon-menu-right");
});
