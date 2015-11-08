// $('form').on('click','.mainLogIn', function(e){
//         e.preventDefault();
//         var user = $(this).siblings('input[name="username"]').val();
//         var pwd = $(this).siblings('input[name="password"]').val();
//           $.ajax({
//           url:"/login",
//           method:'POST',
//           data: {username:user, password:pwd},
//           success: function(data){
//               console.log("this works");
//               $('.pagecontent').removeClass('hide');
//               $('.login').addClass('hide');
//               page.loggedIn(user);
//               $('input[name="username"]').val("");
//               $('input[name="password"]').val("");
//           },
//           failure:function(data){
//             console.log("running but not working");
//           }
//
//         });
//     });
//
// $.ajax({
//     url:"/randomWorkout",
//     method:'GET',
//     success:function(data){
//       var datArr = [];
//       datArr.push(JSON.parse(data));
//       page.loadTemplate($('.todaysWorkout'), datArr, 'workingOut');
//     },
//     failure:function(){
//       console.log("this didn't work");
//     },
//   });
// },


    // $('form').on('click','.notesubmit', function(e){
    //  e.preventDefault();
    //  var theNote = $(this).siblings('input[name="thoughts"]').val();
    //  var theDate =
    //  $.ajax({
    //    url:"https://tiny-tiny.herokuapp.com/collections/notes/",
    //    method:'POST',
    //    data: {note: theNote},
    //    success:function(el){
    //      console.log("Success: "+ el);
    //      $('input[name="thoughts"]').val("");
    //      page.loadTemplate($('noteable'), el, 'noteTemp');
    //
    //    },
    //    failure:function(){
    //      console.log("didn't work");
    //    },
    //  });
    // });



      // $('.noteable').on('click','.deleteNote', function(e){
      //     e.preventDefault();
      //     var deleteItem = $(this);
      //     var delId = deleteItem.closest('div').data('index');
      //     $.ajax({
      //       url:'https://tiny-tiny.herokuapp.com/collections/notes/'+delId,
      //       method:'DELETE',
      //       success:funtion(el){
      //         console.log('Success! ', + el);
      //         deleteItem.closest('div').remove();
      //       },
      //       failure:function(){
      //
      //       }
      //     });
      // });
