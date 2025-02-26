const mobile=document.querySelector('.main-toggle');
const mobilelink=document.querySelector('.sidebar');
mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
});
mobilelink.addEventListener("click", function(){
    const menubars=document.querySelector("is-active");
    if(window.innerWidth<=768 && menubars){
        mobile.classList.toggle(".is-active");
        mobilelink.classList.toggle("active");
    }
});
var step=100;
var stepfilter=60;
var scrolling=true;
$(".back").bind("click",function(e){
  e.preventDefault();
$(".hilight-warapper").animate({
    scrollLeft:"-=" + step + "px"
})
});
$(".next").bind("click", function(e){
    e.preventDefault();
    $(".hilight-warapper").animate({
       scrollLeft: "+=" + step + "px"
    })
})
