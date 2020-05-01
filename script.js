const about = $('.about');
const value = $('.value');
const next1 = $('.next1');
const agree = $('.agree');
const often = $('.often');
const up = $('.up');
const down = $('.down');
const next2 = $('.next2');
const type = $('.type');
const next3 = $('.next3');
const you = $('.you');



next1.on('click', function(event) {
    console.log(isNaN(value.val()));
    event.preventDefault();
    if (value.val() === '' || value.val() == ' ') {
        alert('Please estimate the value of your bike.')
    }
    if (isNaN(value.val())) {
        alert('Estimated value must be a numerical value.')
    }
    if (!agree.is(':checked')) {
        alert('You must agree to the Terms of Service & Privacy Policy to proceed.');
    }
    if (!isNaN(value.val()) && value.val() != '' && value.val() != ' ' && agree.is(':checked')) {
        about.hide();
        often.show();
    }
});

$('.up, .down').on('click', function(event) {
    event.preventDefault();
    $('.active').removeClass('active');
    $(this).addClass('active');
});

next2.on('click', function(event) {
    event.preventDefault();
    often.hide();
    type.show();
});

next2.on('click', function(event) {
    event.preventDefault();
    type.hide();
    you.show();
});

$('.light', '.med', '.heavy').on('click', function(event) {
    event.preventDefault();
    $('.active1').removeClass('active1');
    $(this).addClass('active1');
})