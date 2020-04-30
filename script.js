const privacy = $(".privacy");
const next1 = $(".next1");
const agree = $(".agree");
const stolen = $(".stolen");


next1.on("click", function(event) {
    event.preventDefault();
    if (!agree.is(':checked')) {
        alert("You must agree to the Terms of Service & Privacy Policy to proceed.");
    } else {
        privacy.hide();
        stolen.show();
    }
})