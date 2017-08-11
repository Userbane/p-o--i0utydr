

window.onload = function(){
    if(window.innerWidth < 778){

    }
    // var timeout = setTimeout(animateSDN, 2000);
    //altering elements based on the yOffset of the page.
    const sub = document.getElementsByClassName('sub')[0];
    const nav = document.getElementsByTagName('nav')[0];
    const title = document.getElementById('title-card');
    const SDNP = document.getElementById('scroll_down_notification_arrow');
    window.addEventListener('scroll', debounce(checkScroll));
    window.addEventListener('resize', resize);


    function checkScroll(){
        var y = pageYOffset;
        if(y <= 15){
            nav.style.height = 100+'vh';
            title.style.opacity = 100;
            title.style.display = 'inline-block';
        }
        else if( y > 15 && y < 60){
            nav.style.height = 300+'px';
            // title.style.opacity = 0;
            // title.style.display = 'none';
        }
    }
    function debounce(func, wait = 5, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    function resize(){
        sub.style.left = (window.innerWidth/100) * 5 +'px' ;
    
    }
    /*function animateSDN(){
        SDNP.className += 'SDNP';
    }*/
    

}


 
