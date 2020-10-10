
$(function() {
    $(".create-form").on("submit", function(event) {
        console.log("I'm clicked")
        event.preventDefault();
        
        var order = { 
            burger_name: $("#inputBurger").val(),
           }
        // console.log(id);
        console.log(order);
        debugger;
        $.ajax("/api/burgers", {
            type: "POST",
            data: order
        }).then(      
            function() {
                debugger;                
              console.log("Order is in.");
              location.reload();
            }
        );
    });

    $("#dev").on("submit", function(event) {
        console.log("Clicked")
        event.preventDefault();
        var id = $(this).data("id");
        var dev = {
            devoured: 1
        };
   
        console.log(id);
        console.log(dev);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: dev
        }).then(function() {
            console.log("Devoured");
            location.reload();
        }
        )
    })
})



