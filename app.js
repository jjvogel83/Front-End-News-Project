//-----------------------------------------------
//     DOCUMENT READY
//-----------------------------------------------

$(document).ready(function(){
  
//-----------------------------------------------
//     ADD LINK
//-----------------------------------------------
  $('.js-like').on('click', function(){
        event.preventDefault();
    
    
    $(this).text('Liked!')
    .closest('.news-item')
     .addClass('is-Liked');
   }); 
  
 $('.js-like').on('click', function(){
        event.preventDefault();
   
   $('.js-form').toggleClass('is-visible');
   }); 
});

//-----------------------------------------------
//     MODAL
//-----------------------------------------------

 $('.js-show-modal').on('click', function(){
        event.preventDefault();
   
   $('.js-modal').addClass('is-visible');
   $('.js-modal-overlay').addClass('is-visible');
   }); 
   $('.js-modal-overlay').on('click', function(){
     $('.js-modal').removeClass('is-visible');
     $('.js-modal-overlay').removeClass('is-visible');
   });

});