// The code in add.js handles what happens when the user clicks the "Add a book" button.
// When user clicks add-btn
console.log("update.js loaded");
$(document).ready(function () {
  console.log("window.location ::: ", window.location);
  // $.get("/api/books/:id", function (data) {
  //   $("#title").val() = data.title;
  //   $("#author").val() = data.author;
  //   $("#genre").val() = data.genre;
  //   $("#pages").val() = data.pages;
  // });

  // $("#add-btn").on("click", function (event) {
  //   event.preventDefault();

  //   if (
  //     $("#title").val().trim() == "" ||
  //     $("#author").val().trim() == "" ||
  //     $("#genre").val().trim() == "" ||
  //     $("#pages").val().trim() == ""
  //   ) {
  //     $("#message")
  //       .fadeIn("slow")
  //       .html(
  //         "All Fields marked with <span style='color: red;'>*</span> are Required"
  //       );
  //     setTimeout(function () {
  //       $("#message").fadeOut("slow");
  //     }, 2000);
  //   } else {
  //     $("#message").html("").hide();
  //     // Make a newBook object
  //     var newBook = {
  //       title: $("#title").val().trim(),
  //       author: $("#author").val().trim(),
  //       genre: $("#genre").val().trim(),
  //       pages: $("#pages").val().trim(),
  //     };

  //     $.ajax({
  //       type: "POST",
  //       url: "/api/new",
  //       data: newBook,
  //       success: function (data) {
  //         $("#message").fadeIn().html("Book added to Databse");
  //         setTimeout(function () {
  //           $("#message").fadeOut("slow");
  //         }, 2000);
  //       },
  //       // dataType: "json"
  //     });

  //     // // Send an AJAX POST-request with jQuery
  //     // $.post("/api/new", newBook)
  //     //   // On success, run the following code
  //     //   .done(function (data) {
  //     //     alert("second success");
  //     //     console.log(data);
  //     //     $("#message").fadeIn().html("<h2>Book added to Databse</h2>");
  //     //     setTimeout(function () {
  //     //       $("#message").fadeOut("slow");
  //     //     }, 2000);
  //     //   })

  //     // Empty each input box by replacing the value with an empty string
  //     $("#title").val("");
  //     $("#author").val("");
  //     $("#genre").val("");
  //     $("#pages").val("");
  //   }
  // });
});