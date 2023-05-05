$(function() {
    $('a[data-target^="listLink"]').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
var showAddPopup = function (){    
    $('#addPopup').modal({
        show:true
    });
};
var initBtn = function (){
    $ ('.show-info-popapp').click(showAddPopup);
};
initBtn();
});