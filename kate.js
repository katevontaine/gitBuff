/// SUMBIT/////////////////////////////////////////////////////////
var Herourl = "http://tiny-tiny.herokuapp.com/collections";

    $('form').on('click','.notesubmit', function(e){
     e.preventDefault();
     var theNote = $(this).siblings('input[name="thoughts"]').val();
     $.ajax({
       url:Herourl + "/mynotes",
       method:'POST',
       data: {notes: theNote},

       success:function(el){
         console.log("Success: "+ el);
         $('input[name="thoughts"]').val("");
         $(getNote);
       },
       failure:function(){
         console.log("didn't work");
       },
     });
   });

    var getNote = function(){
      // $('form').on('click','.notesubmit', function(e){
      //  e.preventDefault();
      // var theNote = page.notes;
      $.ajax({
        method:'GET',
        url:Herourl + "/mynotes",
        success: function(data){
          console.log(data);
          _.each(data, function(el){
        $('.noteable').append('<div actualNote data-index='+ el._id+ '><h3>' + "the date" +'</h3><br>' + '<p>' + el.notes + '</p>' + '<button type="submit" name="button" class="btn deleteNote">Delete</button>'+'</div>');
          })
        },
      });
    // })
};

$('.noteable').on('click','.deleteNote',function (event) {
  var theNote = $(this).siblings('input[name="thoughts"]').val();

var deleteNotes = function(){
     $.ajax({
       url: Herourl + '/mynotes' + '/'+ noteID,
       method:'DELETE',

       success: function(data){
         $('.deleteNote').closest('div').remove();
         console.log('got clicked', data);

       },
       failure: function(data){
       }
     });
   }
     var $deleteBtn = $(this)
     var noteID = $deleteBtn.closest('div').data('index');
     console.log('1delete clicked');
     deleteNotes();

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


// var currDate = moment().format("MMM Do YY");
//bower install moment --save
//////////////////////////////
