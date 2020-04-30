const privacy = $(".privacy");
const next1 = $(".next1");
const agree = $(".agree");
const stolen = $(".stolen");
const up = $(".up");
const down = $(".down");
const next2 = $(".next2");
const type = $(".type");


next1.on("click", function(event) {
    event.preventDefault();
    if (!agree.is(':checked')) {
        alert("You must agree to the Terms of Service & Privacy Policy to proceed.");
    } else {
        privacy.hide();
        stolen.show();
    }
});

$('.up, .down').on("click", function(event) {
    event.preventDefault();
    $('.active').removeClass('active');
    $(this).addClass('active');
});

next2.on("click", function(event) {
    event.preventDefault();
    stolen.hide();
    type.show();
})
