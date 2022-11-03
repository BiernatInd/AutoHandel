/*Options*/
AOS.init({
    offset: 400,
    duration: 1000
});
/*Disable on mobile devices*/
AOS.init({
    disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    }
});