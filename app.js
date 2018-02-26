$(document).ready(function(){
    $("img").click(function(){
        //$(this).attr('src', $(this).attr('data-alt-src'));
        $(this).attr('src') === $(this).attr('src-ninja') ? 
            $(this).attr('src', $(this).attr('data-alt-src')) : 
            $(this).attr('src', $(this).attr('src-ninja'));;
    });
});