

$('form').on('click','.mainLogIn', function(e){
        e.preventDefault();
        var user = $(this).siblings('input[name="username"]').val();
        var pwd = $(this).siblings('input[name="pass"]').val();
        console.log(pwd + " " + user);
        data = {
          username: user,
          password: pwd,
        }
        console.log(JSON.stringify(data));
        $.ajax({
          url:'/login',
          method:'POST',
          data: JSON.stringify(data),
          success:function(returndata){
            console.log("success: " + returndata);

          },
          failure:function(returndata){
            console.log("Fail: " +returndata);
          }

        })
});

$.ajax({
  url:'/login',
  method:'GET',
  success:function(data){
    console.log("Success: " + data);
  },
  failure:function(data){
    console.log("FAilure: "+ data);
  }
});



// /loggedin
