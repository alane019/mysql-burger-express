$(function() {

    // - - - Create new burger - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - 
    $(".create-form").on("submit", function(event){
        
        // prevent default html form submission action
        event.preventDefault();

        //var id = $(this).data("id"); [only need this for state change]
        let newBurger = {
            burger_name: $("#new_burger").val().trim(),
        }

        console.log("new burger: ", newBurger);

        // send new http POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger http POST request has been sent");
            window.location.reload();
        });
    });

// - - - Update the state of the burger - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - 

 $(".change-devoured").on("click", function(event){
    
  // Button element prepared in partials file includes
   // html data-id and data-newdevoured 
   // values are set by handlebars template engine at
   // the time the element is rendered to the web page
   var id = $(this).data("id");
   // var newDevoured = $(this).data("newdevoured");

     var newDevouredState = {
        devoured: true
    };

    // send the http PUT request to controllers to direct as needed
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(
        function() {
            console.log("Burger devoured");
            // this reloads the page, which will display the updated list
            location.reload();
        });
 });
 
 // - - - Delete burger - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - 



}); // - - - - - End of main jquery function  - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - 