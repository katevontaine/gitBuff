

$('form').on('click','.mainLogIn', function(e){
        e.preventDefault();
        var user = $(this).siblings('input[name="username"]').val();
        var pwd = $(this).siblings('input[name="pass"]').val();
        $.ajax({
          url:'/login',
          method:'POST',
          data: {username: user, password:pwd},
          success:function(stuff){
            console.log("success: " + stuff);

          },
          failure:function(stuff){
            console.log("Fail: " +stuff);
          }

        })
});
