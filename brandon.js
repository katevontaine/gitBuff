

$('form').on('click','.mainLogIn', function(e){
        e.preventDefault();
        var user = $(this).siblings('input[name="username"]').val();
        var pwd = $(this).siblings('input[name="password"]').val();
        $.ajax({
          url:'/login',
          method:'POST',
          data: {username:user, password:pwd},
          success: function(){
              console.log("this works");

          },
          failure:function(){
            console.log("running but not working");
          }

        });
});

// /randomWorkout
