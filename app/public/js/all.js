
// Make a get request to our api route that will return every book
$.get("/api/books", function(data) {
    // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data
      var wellSection = $("<div>");
      // Add a class to this div: 'well'
      wellSection.addClass("well");
      // Add an id to the well to mark which well it is
      wellSection.attr("id", "book-well-" + i);
      // Append the well to the well section
      $("#well-section").append(wellSection);
  
      // Now  we add our book data to the well we just placed on the page
      $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
      $("#book-well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
      $("#book-well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
      $("#book-well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");

      $("#book-well-" + i).append(
        "<button class='update' data-id='" +
          data[i].id +
          "'>UPDATE BOOK</button>"
      );
      $("#book-well-" + i).append(
        "<button class='delete' data-id='" +
          data[i].id +
          "'>DELETE BOOK</button>"
      );
    }

    $(".update").click(function () {  
      console.log("update button clicked, ", `/books/${$(this).attr("data-id")}`);
      document.location.replace(`/books/${$(this).attr("data-id")}`);
      // $.ajax({
      //   type: "GET",
      //   url: `/books/${$(this).attr("data-id")}`,        
      //   success: function (data) {          
      //   },        
      // });   
      // var url = "http://localhost:3001/books/" + $(this).attr("data-id");
      // $(location).attr('href',url);          
    });

    $(".delete").click(function () {     
      $.ajax({
        type: "DELETE",
        url: "/api/book/" + $(this).attr("data-id"),        
        success: function (data) {
          alert("Deleted requested Book from Database!");          
        },        
      });

      $(this).closest("div").remove();
    });
  });
  