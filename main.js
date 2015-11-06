// (function(){
//   $(document).ready(){
//
//   }



        page = {


            userLoggedin: "",
            online: false,

            init:function(){

            },

            styling:function(){

            },

            events:function(){



            },
            loggedIn:function(data){
              page.userLoggedin = data;
              page.online = true;
              window.addEventListener('beforeunload', function(){
                page.userLoggedin= "";
                online: false;
              });

            },
            loggedOut:function(data){
              page.userLoggedin=""
              online:false;
            },



        };











// })
