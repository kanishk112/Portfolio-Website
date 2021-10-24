// eye ball animation
document.querySelector('body').addEventListener('mousemove', eyeball);

        function eyeball(){
            const eye=document.querySelectorAll('.eye');
            eye.forEach(function(eye){
                let x=(eye.getBoundingClientRect().left)+(eye.clientWidth/2);
                let y=(eye.getBoundingClientRect().top)+(eye.clientHeight/2);
                let radian=Math.atan2(event.pageX-x,event.pageY-y);
                let rotation=(radian*(180/Math.PI)* -1)+270;
                eye.style.transform="rotate("+rotation+"deg)"
            })
        }

$(document).ready(function () {
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Tech Enthusisat" , "A Great Learner","A Beleiver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Tech Enthusisat" , "A Great Learner","A Beleiver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});