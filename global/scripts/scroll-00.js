// Create jQuery Method
jQuery.fn.isFullyVisible = function(){

var win = $(window);

var viewport = {
    top : win.scrollTop(),
    left : win.scrollLeft()
};
viewport.right = viewport.left + win.width();
viewport.bottom = viewport.top + win.height();

var elemtHeight = this.height();// Get the full height of current element
elemtHeight = Math.round(elemtHeight);// Round it to whole humber

var bounds = this.offset();// Coordinates of current element
bounds.top = bounds.top + elemtHeight;
bounds.right = bounds.left + this.outerWidth();
bounds.bottom = bounds.top + this.outerHeight();

return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}
