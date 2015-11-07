/// SUMBIT/////////////////////////////////////////////////////////
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
     });
    });


////CLICK EVENTS INSIDE APPS//////////////////////////////


    $('nav').on('click',".not", function(event){
      event.preventDefault();
      $('.workout').addClass('hide');
      $('.notes').removeClass('hide');
      $('.noteBG').css("background-color","#F7840F");
      $('.workBG').css("background-color","#A2AB2A");
      // $('.pagecontent').removeClass('hide');
    });

    $('nav').on('click',".work", function(event){
      event.preventDefault();
      $('.notes').addClass('hide');
      $('.workout').removeClass('hide');
      // $('.workout').addClass('display');
      $('.pagecontent').removeClass('hide');
      $('.workBG').css("background-color","#F7840F");
      $('.noteBG').css("background-color","#A2AB2A");
    });



//////////////////////////////

// var currDate = moment().format("MMM Do YY");
//bower install moment --save
//////////////////////////////
