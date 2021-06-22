// When user hits the search-btn
$("#search-btn").on("click", function (event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var bookSearched = $("#book-search").val().trim();
  // console.log(bookSearched);
  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/books/" + bookSearched, function (data) {
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);
    $("#book-search").val("");
  });
});

// When user hits the author-search-btn
$("#author-search-btn").on("click", function () {
  // Save the author they typed into the author-search input
  var authorSearched = $("#author-search").val().trim();
  // console.log(authorSearched);
  // Make an AJAX get request to our api, including the user's author in the url
  $.get("/api/authors/" + authorSearched, function (data) {
    // Log the data to the console
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);
    $("#author-search").val("");
  });
});

// When user hits the genre-search-btn
$("#genre-search-btn").on("click", function () {
  // Save the book they typed into the genre-search input
  var genreSearched = $("#genre-search").val().trim();
  // console.log(genreSearched);
  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/genres/" + genreSearched, function (data) {
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);
    $("#genre-search").val("");
  });
});

function renderBooks(data) {
  if (data.length !== 0) {
    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {
      var div = $("<div>");

      div.append("<h2>" + data[i].title + "</h2>");
      div.append("<p>Author: " + data[i].author + "</p>");
      div.append("<p>Genre: " + data[i].genre + "</p>");
      div.append("<p>Pages: " + data[i].pages + "</p>");
      div.append(
        "<button class='delete' data-id='" +
          data[i].id +
          "'>DELETE BOOK</button>"
      );

      $("#stats").append(div);
    }

    $(".delete").click(function () {
      // $.ajax({
      //   method: "DELETE",
      //   url: "/api/book/" + $(this).attr("data-id"),
      // })
      //   // On success, run the following code
      //   .then(function () {
      //     console.log("Deleted Successfully!");
      //   });

      $.ajax({
        type: "DELETE",
        url: "/api/book/" + $(this).attr("data-id"),
        // data: newBook,
        success: function (data) {
          $("#message")
            .fadeIn("slow")
            .html(
              "Deleted requested Book from Database!"
            );
          setTimeout(function () {
            $("#message").fadeOut("slow");
          }, 2000);
        },
        // dataType: "json"
      });

      $(this).closest("div").remove();
    });
  } else {
    $("#stats").empty();
    $("#stats").show();
    $("#stats").append("<h2>No Results Found</h2>");
  }
}
