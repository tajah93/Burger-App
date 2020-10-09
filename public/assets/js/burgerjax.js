$(function() {
     $("#burgerBtn").on("click", function(event) {
         var id = $(this).data("id");
         var order = $(this).children("inputBurger").val();
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

     $(".burger").on("submit", function(event) {
         var id = $(this).data("id");
         var dev = $(this).children("inputBurger").val();
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