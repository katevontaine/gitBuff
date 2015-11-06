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


    $('.notes').on('click', function(event){
      event.preventDefault();
      $('.workouts').addClass('hide');
      $('.notes').removeClass('hide');
      $('.pagecontent').removeClass('hide');
    });

    $('.workouts').on('click', function(event){
      event.preventDefault();
      $('.notes').addClass('hide');
      $('.workouts').removeClass('hide');
      $('.pagecontent').removeClass('hide');

    });



//////////////////////////////

var currDate = moment().format("MMM Do YY");
//bower install moment --save
//////////////////////////////
