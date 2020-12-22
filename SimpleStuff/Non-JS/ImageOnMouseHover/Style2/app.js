var $img = $('img');
$img.hide();
$('div').mousemove(function(e) {
    $img.stop(1, 1).fadeIn();
    $('img').offset({
        top: e.pageY - $img.outerHeight(),
        left: e.pageX - ($img.outerWidth()/2)
    });
}).mouseleave(function() {
    $img.fadeOut();
});