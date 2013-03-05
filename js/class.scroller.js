var scrollerObj = (function(){
	/**
	PARRAM
	**/

	/**
	PRIVATE
	**/

	/**
	PUBLIC
	**/
    function animateContent(showContent, hideContent){
        var hideContentID = "content" + hideContent;
        var showContentID = "content" + showContent;
        if(showContent > hideContent){//showContent will move right to center 
            $('#' + showContentID).css({'left':'100%', 'margin-left':'600px', 'opacity':0});
            $('#' + showContentID).stop(true, false).animate({'left':'50%', 'margin-left':'-250px', 'opacity':1}, 800, function(){
                currentHashContent = showContent;//set current Content
                clickAble = true;
            });

            //move hide content
            $('#' + hideContentID).stop(true, false).animate({'left':0, 'margin-left':'-600px', 'opacity':0}, 800);
        }
        else if(showContent < hideContent){//showContent will move left to center
            $('#' + showContentID).css({'left':'0px', 'margin-left':'-600px', 'opacity':0});
            $('#' + showContentID).stop(true, false).animate({'left':'50%', 'margin-left':'-250px', 'opacity':1}, 800, function(){
                currentHashContent = showContent;//set current Content
                clickAble = true;
            });

            //move hide content
            $('#' + hideContentID).stop(true, false).animate({'left':'100%', 'margin-left':'600px', 'opacity':0}, 800);
        }
        else
            return;
    }//end animation

    /**
	RETURN
	**/
	return{
		animateContent:animateContent
	}
})();