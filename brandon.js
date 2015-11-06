var Herourl = "http://tiny-tiny.herokuapp.com/collections"

$('form').on('click','.mainLogIn', function(e){
        e.preventDefault();
        var user = $(this).siblings('input[name="username"]').val();
        var pwd = $(this).siblings('input[name="pass"]').val();
        $.ajax({
          url:Herourl + '/login',
          method:'POST',
          data: {username: user, password:pwd},
            success: function(){
              console.log("this works");
          }
        })
});
