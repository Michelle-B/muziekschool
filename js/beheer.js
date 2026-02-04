$("#blogForm").submit(function (e) {
  e.preventDefault();

  $.ajax({
    url: "dummy.json",
    method: "POST",
    success: function () {
      $("#result").text("Artikel verzonden met AJAX.");
    }
  });
});