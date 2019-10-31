$(document).ready(function (){

$('#hidden-slidek').hide();
$('#hidden-slideE').hide();
$('#hidden-slideV').hide();
$('#hidden-slideI').hide();
$('#hidden-slideN').hide();

// Slide "K"
$('#slidek').mouseenter(function () {
    setTimeout(function(){
    $('#hidden-slidek').fadeIn(1000);
    $('#slide-titlek').text('Kevin Le');
}).fadeIn(3000);
});
$('#slidek').mouseleave(function (){
    $('#hidden-slidek').hide(1000);
    $('#slide-titlek').text('K');
});


// Slide "E"
$('#slideE').mouseenter(function () {
    setTimeout(function(){
    $('#hidden-slideE').fadeIn(3000);
    $('#slide-titleE').text('Experience');
}).fadeIn(3000);
});
$('#slideE').mouseleave(function (){
    $('#hidden-slideE').hide(1000);
    $('#slide-titleE').text('E')
});
// Slide "V"
$('#slideV').mouseenter(function () {
    setTimeout(function(){
    $('#hidden-slideV').fadeIn(3000);
    $('#slide-titleV').text('Values');
}).fadeIn(3000);
});
$('#slideV').mouseleave(function (){
    $('#hidden-slideV').hide(1000);
    $('#slide-titleV').text('V');
})
// Slide; "I"
$('#slideI').mouseenter(function () {
    setTimeout(function(){
    $('#hidden-slideI').fadeIn(3000);
    $('#slide-titleI').text('Interest');
}).fadeIn(3000);
})
$('#slideI').mouseleave(function (){
    $('#hidden-slideI').hide(1000);
    $('#slide-titleI').text('I');
});

// Slide "N"
$('#slideN').mouseenter(function () {
    setTimeout(function(){
    $('#hidden-slideN').fadeIn(3000);
    $('#slide-titleN').text('Next?');
}).fadeIn(3000);
});
$('#slideN').mouseleave(function (){
    $('#hidden-slideN').hide(1000);
    $('#slide-titleN').text('N');
});

})
