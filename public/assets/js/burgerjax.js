
$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
        var order = { 
            burger_name: $("#inputBurger").val(),
            devoured: 0
           }
        // console.log(id);
        console.log(order);
        debugger;
        $.ajax("/api/burgers", {
            type: "POST",
            data: order
        }).then(
            function() {
              console.log("Order is in.");
              location.reload();
            }
        );
    });

    $("#dev").on("submit", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var dev = {
            devoured: 1
        };
   
        console.log(id);
        console.log(dev);

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: dev
        }).then(function() {
            console.log("Devoured");
            location.reload();
        }
        )
    })
})



