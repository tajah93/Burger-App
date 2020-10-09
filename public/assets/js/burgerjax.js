
$(function() {
    $(".order").on("submit", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var order = { 
            burger_name: $("#inputBurger").val()
           }
        console.log(id);
        console.log(order);

        $.ajax("/api/burgers" + id, {
            type: "POST"

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
   
        console.log(id);
        console.log(dev);

        $.ajax("/api/burgers" + id, {
            type: "PUT"
        }).then(function() {
            console.log("Devoured");
            location.reload();
        }
        )
    })
})
// $(function() {
//      $("#inputBurger").on("submit", function(event) {
//          event.preventDefault();
//          var id = $(this).data("id");
//          var order = $("inputBurger").val();
//          console.log(id);
//          console.log(order);

//          $.ajax("/api/burgers" + id, {
//              type: "PUT"

//          }).then(
//              function() {
//                console.log("Order is in.");
//                location.reload();
//              }
//          );
//      });

//     //  $(".burger").on("submit", function(event) {
//     //      event.preventDefault();
//     //      var id = $(this).data("id");
//     //      var dev = $(this).children("inputBurger").val();
//     //      console.log(id);
//     //      console.log(dev);

//     //      $.ajax("/api/burgers" + id, {
//     //          type: "PUT"
//     //      }).then(function() {
//     //          console.log("Devoured");
//     //          location.reload();
//     //      }
//     //      )
//     //  })
// })

