var Herourl = "http://tiny-tiny.herokuapp.com/collections";

    $('form').on('click','.notesubmit', function(e){
     e.preventDefault();
     var theNote = $(this).siblings('input[name="thoughts"]').val();
     $.ajax({
       url:Herourl + "/notes",
       method:'POST',
       data: {notes: theNote},

       success:function(el){
         console.log("Success: "+ el);
         $('input[name="thoughts"]').val("");
       },
       failure:function(){
         console.log("didn't work");
       }
     })
    });



// $('form').on('click','.mainLogIn', function(e){
//         e.preventDefault();
//         $(this).siblings('section').removeClass('hide');
//           });
