// The code in add.js handles what happens when the user clicks the "Add a book" button.
// When user clicks add-btn
$(document).ready(function () {
  console.log("window.location ::: ", GetParameterValues("id"));

  function GetParameterValues(param) {
    var url = window.location.href
      .slice(window.location.href.indexOf("?") + 1)
      .split("&");
    for (var i = 0; i < url.length; i++) {
      var urlparam = url[i].split("=");
      if (urlparam[0] == param) {
        return urlparam[1];
      }
    }
  }

  $.get("/api/books/" + GetParameterValues("id"), function (data) {
    console.log(data);
    $("#title").val(data[0].title);
    $("#author").val(data[0].author);
    $("#genre").val(data[0].genre);
    $("#pages").val(data[0].pages);
  });

  $("#add-btn").on("click", function (event) {
    event.preventDefault();

    if (
      $("#title").val().trim() == "" ||
      $("#author").val().trim() == "" ||
      $("#genre").val().trim() == "" ||
      $("#pages").val().trim() == ""
    ) {
      $("#message")
        .fadeIn("slow")
        .html(
          "All Fields marked with <span style='color: red;'>*</span> are Required"
        );
      setTimeout(function () {
        $("#message").fadeOut("slow");
      }, 2000);
    } else {
      $("#message").html("").hide();
      // Make a newBook object
      var newBook = {
        title: $("#title").val().trim(),
        author: $("#author").val().trim(),
        genre: $("#genre").val().trim(),
        pages: $("#pages").val().trim(),
      };

      $.ajax({
        type: "PUT",
        url: "/api/book/" + GetParameterValues("id"),
        data: newBook,
        success: function (data) {
          $("#message").fadeIn().html("Book updated to Databse");
          setTimeout(function () {
            $("#message").fadeOut("slow");
          }, 2000);
        },
        // dataType: "json"
      });

      // Empty each input box by replacing the value with an empty string
      $("#title").val("");
      $("#author").val("");
      $("#genre").val("");
      $("#pages").val("");

      document.location.replace(`/all`);
    }
  });
});
