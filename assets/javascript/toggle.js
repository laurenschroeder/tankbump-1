document.getElementById("toggle").addEventListener("click", function(){
    $("#side-bar").toggleClass("collapsed");
    //$("#map-container").toggleClass("col-md-12 col-md-9");
    $("#toggle").toggleClass("glyphicon-menu-left");
    $("#toggle").toggleClass("glyphicon-menu-right");
});
