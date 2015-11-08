
    $('form').on('click','.notesubmit', function(e){
     e.preventDefault();
     var theNote = $(this).siblings('input[name="thoughts"]').val();
     $.ajax({
       url:'/create-note',
       method:'POST',
       data: {note: theNote},
       success:function(el){
         console.log("Success: "+ el);
         $('input[name="thoughts"]').val("");
         page.getNote();
       },
       failure:function(){
         console.log("didn't work");
       },
     });
   });

    var getNote = function(){

      $.ajax({
        method:'GET',
        url:'/notes',
        success: function(data){
          var newDat = (JSON.parse(data));
          console.log(newDat);
              page.loadTemplate($('.noteable'), newDat, 'noteTemp');
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
