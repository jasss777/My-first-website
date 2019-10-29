
// Header load
$("#header").load("header.html", function () {
    var pageID = $("body").attr("id");

    $(".navbar .collapse .nav-item").each(function (index, element) {

        if ($(element).hasClass(pageID)) {
            $(element).addClass("active");
        }
    });

});

//Footer load
$("#footer").load("footer.html");

//LightBox load
$(function () {
    $("#mdb-lightbox-ui").load("plugins/mdb-lightbox-ui.html");
});

// Register form Search
$(document).ready(function () {
    $('.mdb-select').materialSelect();
});

//Radio select appear
function showDiv() {
    getSelectValue = document.getElementById("opt-select").value;
    if (getSelectValue == "1") {
        document.getElementById("hidden_div").style.display = "block";
        document.getElementById("defaultGroupExample1").required = true;
        document.getElementById("defaultGroupExample2").required = true;
    } else {
        document.getElementById("hidden_div").style.display = "none";
    }
}


