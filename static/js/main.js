$( document ).ready(function() {
    var copyright = $("footer .copyright")
    var credits   = $("#footer .credits")
    $("#show-credits").click(function() {
        copyright.hide();
        credits.show();
        return true;
    });

    $("#hide-credits").click(function() {
        credits.hide();
        copyright.show();
        return true;
    })
});