

$(document).ready(function(){
//////////////////////////////////////////////////////////////////////

$('img').click(function(){
    // if ($('this').)
    // console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    // console.log($(this).attr("src"));

    var pictureTemp = '';
    pictureTemp = $(this).attr("src"); //sets the picture to a temp to hold.
    $(this).attr("src", $(this).attr('data-alt-src'));
    $(this).attr('data-alt-src', pictureTemp);
    // console.log($(this).attr("src"));

})
// console.log(elementName);



//////////////////////////////////////////////////////////////////////
    })