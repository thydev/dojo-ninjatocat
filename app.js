$(document).ready(function(){
    var isNinja = true;
    $("img").click(function(){
        $(this).attr('src', $(this).attr('data-alt-src'));
    });
});