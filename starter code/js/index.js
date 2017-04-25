$(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');          
    
    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })
  $('.flexslider').flexslider({
    animation: "slide"
})
});

// $(document).ready(function(e) {
//     $('.flexslider2').flexslider({
// 		animation: "slide",
//         direction: "vertical"
// 	});
//   