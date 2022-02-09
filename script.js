$("document").ready(function() {
    window.addEventListener("scroll", function(event){
        var studiosectionwidth = $(".flexbox-item-studio").width() + 921 + 7;
        var clientsectionwidth = $(".flexbox-item-client-container").width() + 921;
        $(".flexbox-item-transparent-client").height(clientsectionwidth);
        $(".flexbox-item-transparent").height(studiosectionwidth);
        var scroll =this.scrollY;
        console.log(scroll)
        var scrollable = document.documentElement.scrollHeight - window.innerHeight
        $(".landscape").css("left" , (- (1*window.scrollY)) + "px");
        $(".landscape").css("top" , (0 + "px"));

        if (scroll > 5000){
            console.log("changeme")
            $(".gif").html("<img src='running.gif'>")
        }
        if (scroll > 8350){
            console.log("changeme")
            $(".gif").html("<img src='walking.gif'>")
        }
        if (scroll > 10230){
            console.log("changeme")
            $(".png").html("<img src='standing.png'>")
        }
    });
});

