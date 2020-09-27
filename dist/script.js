$('.menu i').click(function(){
  if( $(this).attr('class') =="fas fa-bars"){
    $(this).attr('class', "fas fa-times");
    $('.mb-nav').css({
      visibility: "visible"
    })
  }
  else{
    $(this).attr('class',"fas fa-bars");
    $('.mb-nav').css({
      visibility: "hidden"
    })
  }
});