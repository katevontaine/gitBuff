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
     })
    });


////CLICK EVENTS INSIDE APPS//////////////////////////////


    $('nav').on('click',".not", function(event){
      console.log('clicked');
      event.preventDefault();
      $('.workout').addClass('hide');
      $('.notes').removeClass('hide');
      // $('.pagecontent').removeClass('hide');
    });

    $('nav').on('click',".work", function(event){
      console.log('clicked');
      event.preventDefault();
      $('.notes').addClass('hide');
      $('.workout').removeClass('hide');
      // $('.workout').addClass('display');
      $('.pagecontent').removeClass('hide');

    });



//////////////////////////////

// var currDate = moment().format("MMM Do YY");
//bower install moment --save
//////////////////////////////
