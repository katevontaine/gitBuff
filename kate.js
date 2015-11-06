// postNote: function(){
//     $('.noteform').on('submit', function(event){
//           var theNote = {user: $('input[name="thoughts"]').val(), color: ''};
//
//             }
//           });
//           event.preventDefault();
//           $.ajax({
//             method:'POST',
//             url: page.notes,
//             data: theNote,
//             success: function(data){
//               page.currUser = data._id;
//               $('input[name="thoughts"]').val('');
//             }
//           });
//         });
//   },
//

$('form').on('click','.mainLogIn', function(e){
        e.preventDefault();
        $(this).siblings('section').removeClass('hide');
          });


  //
  // var clickedSection = "." + $(this).attr('rel');
  // $(clickedSection).addClass('clickedElement');
  // $(clickedSection).siblings('div').removeClass('clickedElement');
  // $(clickedSection).siblings('div').addClass('hideElement');
  // $(clickedSection).removeClass('hideElement');
  // $('.empty1').hide();
