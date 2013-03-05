
//global parram
var currentHashContent = "1";
var clickAble = true;

$(function() {
    var newHash      = "";
    
    $(".navigate").click(function() {
        if(!clickAble) return false;

        clickAble == false
        url = $(this).attr("href");
        window.location.hash = $(this).attr("href");/* set url to hash*/

        return false;
    });
    
    $(window).bind('hashchange', function(){
        newHash = window.location.hash.substring(1);
        newHashContent = newHash.substring(newHash.length-1);
        
        //animation
        if (newHash != '') {
            scrollerObj.animateContent(newHashContent, currentHashContent);
        }
        else{
            newHash = '!/content1';//default
            scrollerObj.animateContent(1, currentHashContent);
        }//end if

        //set active menu
            $(".blo_header a").removeClass("active");
            $('.blo_header a[href="'+newHash+'"]').addClass('active');
        
    });

    
    $(window).trigger('hashchange');

});