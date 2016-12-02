$(function() {
    // setTimeout() function will be fired after page is loaded
    // it will wait for 5 sec. and then will fire
    // $("#successMessage").hide() function

   /* $("#navbarID").hide();
    setTimeout(function() {
        $("#navbarID").show();
    }, 5000);
*/

/*
    $(".typewriter").typed({
        strings: ["Hello ! I am Rashmi"],
        typeSpeed: 100
    });

*/
/*for navigation bar active mode */

    $.each($('.navbar').find('li'), function() {
        $(this).toggleClass('active',
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    });
});