// Scripts for To Do List app

$(document).ready(function() {
  // Hide duplicate message
  $(".alert-danger").hide();

  // ADD NEW TASK
  $(".btn-warning").on("click", function(e) {
    e.preventDefault();  // Prevent submit button from submitting text to the page

    var newWord = $("#newWord").val().trim();
    var isDuplicate = false;
    // Finds duplicate entries
    $("td.word-td").each(function(){
      if($(this).text().trim().toLowerCase() === newWord.toLowerCase()) {
        isDuplicate = true;
        return;
      }
    });
    // Runs duplicate entry message
    if(isDuplicate){
      $(".alert-danger").slideDown(1000);
      return;
    }
    // Inserts new row with new task item
    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td").append(newWord);
    var completedBtn = $("<button>").addClass("btn btn-default").append('<i class="fa fa-square-o">');
    var completedTd = $("<td>").append(completedBtn);
    var deleteBtn = $("<button>").addClass("btn btn-danger").append('<i class="fa fa-trash-o"></i>');
    var deleteTd = $("<td>").append(deleteBtn);

    newRow.append(wordTd).append(completedTd).append(deleteTd);
    $("#task-list").append(newRow);
    // Set newWord to become an empty string and clears the input field.
    // Also sets the focus back onto the input field. 
    $("#newWord").val("").focus();
  });
  // Fade out duplicate entry message when user begins typing again in input field
  $("#newWord").on("keydown", function() {
    $(".alert-danger").fadeOut(1500);

  })
  // End add new task

  // Mark complete
  $("table").on("click", ".btn-default", function(){
    var check = $("<i>").addClass("fa fa-check-square-o");
    $(this).replaceWith($("<button>").attr("type", "button").addClass("btn btn-success").append(check));
    $(".btn-success").parent().prev().css("text-decoration", "line-through");
  });

  // Mark not complete
  $("table").on("click", ".btn-success", function(){
    var uncheck = $("<i>").addClass("fa fa-square-o");
    $(this).replaceWith($("<button>").attr("type", "button").addClass("btn btn-default").append(uncheck));
    $(".btn-default").parent().prev().css("text-decoration", "none");
  });

  // Remove row
  // var rotatingTrashCan = ("<i>").addClass("fa fa-trash-o fa-spin");
  $("table").on("click", ".btn-danger", function() {
    console.log(this.parent());
    $(this).parent().parent().remove(); // Remove entire row
  });

});

// TO DO LIST (Oh the irony):
// Figure out strikethrough and unstrikethrough
// Add smiley face animation when marked complete
// Make delete animation when remove button is clicked


