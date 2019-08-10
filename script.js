$(document).ready(function() {
    $('.teacher').click(function() {
        $('.teacher-stuff').toggleClass('open');
    });
    $('.musician').click(function() {
        $('.musician-stuff').toggleClass('open');
    });
    $('.coder').click(function() {
        $('.coder-stuff').toggleClass('open');
    });
});