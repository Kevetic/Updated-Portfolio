$('.hidden-slide').hide();


$('.slide').mouseenter(function () {
    setTimeout(function(){
    $('.hidden-slide').fadeIn(3000);
    $('.slide-title').text('Kevin Le');
}).fadeIn(3000);
})
$('.slide').mouseleave(function (){
    $('.hidden-slide').hide(1000);
    $('.slide').text('K')
})

