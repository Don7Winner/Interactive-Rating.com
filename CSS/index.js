$(document).ready(function () {
  const form = $("#form");
  const submitbutton = $("#Submit");
  const ratAgain = $("#rat-again");
  form.submit(function (e) {
    e.preventDefault();
  });
  $("#p").addClass("TnxMessage").hide();

  $("button").each(function () {
    $(this).click(function () {
      $("#p")
        .text("You selected " + $(this).text() + " out of 5")
        .addClass("TnxMessage")
        .show();
    });
  });
  ratAgain.click(function () {
    $(".interactive-outcome").hide();
    form.show();
  });
  $(document).ready(function () {
    let ratingSelected = false;

    // When any rating button is clicked
    $(".clickButton button").on("click", function (event) {
      event.preventDefault(); // Prevent default button behavior
      $(".clickButton button").removeClass("selected"); // Remove selected class from all buttons
      $(this).addClass("selected"); // Add selected class to clicked button
      ratingSelected = true;
    });

    // When the submit button is clicked
    form.click("submit", function (e) {
      if (!ratingSelected) {
        e.preventDefault(); // Prevent form submission
        alert("Please select a rating before submitting.");
      } else {
        submitbutton.click(function () {
          form.hide();
          $(".interactive-outcome").show();
        });
      }
    });
  });
});
