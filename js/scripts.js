$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["input1", "input2", "input3",];
    var sortedBlanks = blanks.map(function(blank) {
      blank.sort();
    }
    var UpperBlanks = sortedBlanks.map(function(blank) {
      blank.toUpperCase();
    }
      $("#output").append(groceryList);

      $("#output").show();
      $("#blanks form").hide();
      event.preventDefault();

  });
});
