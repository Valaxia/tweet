   $(document).ready(function(){

   

      $("#tweet").on('click',function(){
        var mitexto = $("#mitexto").val()

        var contenido =   '<div class="note">'  
          + '<p>' + mitexto + '</p>' 
          + '<span class="glyphicon glyphicon-heart" aria-hidden="true"></span>' 
          + '<span class="output">0</span>'
          + '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'
          + '</div>' 



        $("#tweets").append(contenido)     
        $("#mitexto").val('')
        $("#mitexto").focus()

      });
    })

$(document).on('click','.glyphicon-heart',function() {
    $(this).siblings('.output').html(function(i, val) { return val*1+1 })
    
    $(this).css("color","red");
    setTimeout( function(){
      $('.glyphicon-heart').css('color',"grey")
    }, 300);
});


$(document).on('click','.glyphicon-trash',function(){
  $(this).parent().fadeOut();
})

