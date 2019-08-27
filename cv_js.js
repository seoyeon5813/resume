


/* cursor */ 
var cursor = $('.cursor');
var follower = $('.cursor_follower');

mouseX = 0,
mouseY = 0,
positionX = 0,
positionY = 0;

$(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;

    /* cursor movement speed control */ 
    positionX += (mouseX - positionX) / 15;
    positionY += (mouseY - positionY) / 15;

    /* cursor movement */ 
    cursor.css('left', mouseX).css('top', mouseY);

});


/* visual effect */ 

function scrollAppear(){
    var cv = document.querySelector('.cont_cv, .project, .work');
    var cvPosition = cv.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if(cvPosition < screenPosition){
        cv.classList.add('cv_appear');
    }
};

window.addEventListener('scroll', scrollAppear);