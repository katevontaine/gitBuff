(function() {
    $(document).ready(function() {
        page.init();
    });

    page = {
        userLoggedin: "",
        online: false,


        init: function() {
            page.events();

        },

        styling: function() {

        },

        events: function() {
            $('form').on('click', '.mainLogIn', function(e) {
                e.preventDefault();
                var user = $(this).siblings(
                    'input[name="username"]').val();
                var pwd = $(this).siblings(
                    'input[name="password"]').val();
                $.ajax({
                    url: "/login",
                    method: 'POST',
                    data: {
                        username: user,
                        password: pwd
                    },
                    success: function(data) {
                        $('.pagecontent').removeClass(
                            'hide');
                        $('.login').addClass(
                            'hide');
                        page.loggedIn(user);
                        $(
                            'input[name="username"]'
                        ).val("");
                        $(
                            'input[name="password"]'
                        ).val("");
                        page.getWorkOut();
                    },
                    failure: function(data) {
                        console.log(
                            "running but not working"
                        );
                    }

                });
            });



        },
        loggedIn: function(data) {
            page.userLoggedin = data;
            page.online = true;
            window.addEventListener('beforeunload', function() {
                page.userLoggedin = "";
                online = false;
            });

        },
        loggedOut: function(data) {
            page.userLoggedin = "";
            online = false;
        },

        getTemplate: function(tmpl) {
            return _.template(Ourtemplates[tmpl]);
        },

        loadTemplate: function($loc, el, tmpl) {
            var ourhtml = "";
            var thistmple = page.getTemplate(tmpl);
            _.each(el, function(curel) {
                ourhtml += thistmple(curel);
            });
            $loc.html(ourhtml);
        },

        getWorkOut: function() {
            $.ajax({
                url: "/randomWorkout",
                method: 'GET',
                success: function(data) {
                    var datArr = [];
                    datArr.push(JSON.parse(data));
                    page.loadTemplate($('.todaysWorkout'), datArr, 'workingOut');
                },
                failure: function() {
                    console.log("this didn't work");
                },
            });
        },






    };










})();
