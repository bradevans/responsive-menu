$(function(){
    var caret = $(".caret"),
        close_btn = $(".close-btn"),
        content_container = $(".content-container"),
        hamburger = $(".hamburger"),
        li = $("li"),
        nav = $(".nav-container"),
        nav_position;

    hamburger.click(function(){
        nav_position = nav.css("position");

        if(!caret.hasClass("active-hidden")){
            content_container.addClass("lightgray");
        }

        caret.each(function(){
            if($(this).hasClass("active-hidden")){
                $(this).removeClass("active-hidden")
                    .addClass("active")
                    .removeClass("hidden");
            }
        });

        if(nav_position === "absolute"){
            nav.css({
                top: "0px",
                left: "-250px"
            })
                .show()
                .animate({
                    left: "0px"
                }, 100);
        } else {
            nav.css({
                top: "-210px",
                left: "0px"
            })
                .show()
                .animate({
                    top: "0px"
                }, 200);
        }
    });

    close_btn.click(function(){
       nav_position = nav.css("position");

       caret.each(function(){
           if($(this).hasClass("active")){
               $(this).removeClass("active")
                   .addClass("active-hidden")
                   .addClass("hidden");
           }
       });

       content_container.addClass("gray").removeClass("lightgray");

       if(nav_position === "absolute"){
           nav.animate({
               left: "-1000px"
           }, 200)
       } else {
           nav.animate({
               top: "-1000px"
           }, 200);
       }
    });

    li.click(function(){
        nav_position = nav.css("position");

        li.each(function(){
            if($(this).hasClass("dark-blue")){
                $(this).removeClass("dark-blue").find(".caret").removeClass("active");
            }
        });

        content_container.addClass("gray").removeClass("lightgray");
        caret.addClass("hidden");
        $(this).find("span").removeClass("hidden").addClass("active");
        $(this).addClass("dark-blue");

        if(nav_position === "fixed"){
            nav.animate({
                top: "-1000px"
            }, 200);
        }
    });
});