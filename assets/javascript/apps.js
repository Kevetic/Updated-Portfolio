$('.hidden-slide').hide();


$('.slide').mouseenter(function () {
    $('.hidden-slide').show(1000);
})
$('.slide').mouseleave(function (){
    $('.hidden-slide').hide(1000);
})