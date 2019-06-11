
//----- isElementFullyVisible
var isElementFullyVisible = function(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = elem.offset().top-80;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

//----------- know scroll %
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll);
});