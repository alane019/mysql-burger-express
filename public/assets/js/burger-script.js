$(function() {

    // - - - Create new burger - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - 
    $(".create-form").on("submit", function(event){
        
        // prevent default html form submission action
        event.preventDefault();

        //var id = $(this).data("id"); [only need this for state change]
        let newBurger = {
            burger_name: $("#new_burger").val.trum,
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
     // this is referr

     var newDevouredState = {
        devoured: newDevoured
    };

    // send the http PUT request
    $.ajax("/api/burgers/" + IDBCursor, {
        type: "PUT",
        data: newDevouredState
    }).then(
        function() {
            console.log("changed devoured to", newDevoured);
            // this reloads the page, which will display the updated list
            location.reload();
        }
    );
 });
 
 // - - - Update the state of the burger - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - 



}); // - - - - - End of main jquery function  - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - 