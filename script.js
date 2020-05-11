const about = $('.about');
const value = $('.value');
const next1_btn = $('.next1-btn');
const agree = $('.agree');
const often = $('.often');
const next2_btn = $('.next2-btn');
const info = $('.bike-info');
const next3_btn = $('.next3-btn');
const you = $('.you');
const club_list = $('.club-list');
const clubs = $('.clubs');
const club_btn = $('.club-btn');
const submit_btn = $('.submit-btn');


next1_btn.on('click', function(event) {
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

$('.light', '.med', '.heavy').on('click', function(event) {
    event.preventDefault();
    $('.active1').removeClass('active1');
    $(this).addClass('active1');
})

next2_btn.on('click', function(event) {
    event.preventDefault();
    often.hide();
    info.show();
});

$('.up, .down').on('click', function(event) {
    event.preventDefault();
    $('.active').removeClass('active');
    $(this).addClass('active');
});

club_btn.on('click', function(event) {
    event.preventDefault();
    const list_item = clubs.val();
    club_list.append('<li>' + list_item + '</li>');
    clubs.clear() = '';
});

next3_btn.on('click', function(event) {
    event.preventDefault();
    info.hide();
    you.show();
});

submit_btn.on('click', function(event) {
    event.preventDefault();
    alert('Coming Soon!');
});
