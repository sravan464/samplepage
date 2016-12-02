/**
 * Created by sravan on 11/30/2016.
 */
$(function(){
    var count1=0;
    var count2=0;
    $('#content-img1').on('mouseenter', function () {
        count1++;
        if(count1==1)
        {
           /* $(this).fadeOut(500, function() {
                $(this).attr("src", "http://placehold.it/150x150?text=hello hehe");
                $(this).fadeIn(500);
            });*/

            $(this).addClass("animated flipOutX").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {
                    $(this).attr("src", "http://placehold.it/150x150?text=2");
                    $(this).removeClass("animated flipOutX");
                    $(this).addClass("animated flipInX").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                        function () {
                            $(this).removeClass("animated flipInX");
                        });});
        }else if(count1==2)
        {
            /*$(this).slideUp(500, function() {
                $(this).attr("src", "http://placehold.it/150x150?text=baby");
                $(this).slideDown(500);
            });
*/
            $(this).addClass("animated flipOutX").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {
                    $(this).attr("src", "http://placehold.it/150x150?text=3");
                    $(this).removeClass("animated flipOutX");
                    $(this).addClass("animated flipInX").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                        function () {
                            $(this).removeClass("animated flipInX");
                        });});
        }
    });
    $('#content-img2').on('mouseenter', function () {
        count2++;
        if(count2==1)
        {
            //alert(count);
            $(this).addClass("animated fadeOutUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {
                    $(this).attr("src", "http://placehold.it/150x150?text=2");
                    $(this).removeClass("animated fadeOutUp");
                    $(this).addClass("animated fadeInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                        function () {
                            $(this).removeClass("animated fadeInUp");
                        });});


        }else if(count2==2)
        {
            $(this).addClass("animated fadeOutUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {
                    $(this).attr("src", "http://placehold.it/150x150?text=3");
                    $(this).removeClass("animated fadeOutUp");
                    $(this).addClass("animated fadeInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                        function () {
                            $(this).removeClass("animated fadeInUp");
                        });});
        }
    });

});