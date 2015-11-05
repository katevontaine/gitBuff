postNote: function(){
    $('.noteform').on('submit', function(event){
          var theNote = {user: $('input[name="thoughts"]').val(), color: ''};
          
            }
          });
          event.preventDefault();
          $.ajax({
            method:'POST',
            url: page.notes,
            data: theNote,
            success: function(data){
              page.currUser = data._id;
              $('input[name="thoughts"]').val('');
            }
          });
        });
  },
