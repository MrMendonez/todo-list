// Scripts for To Do List app

$(document).ready(function() {
  // Hide duplicate message
  $(".alert-danger").hide();


  // Title Project Name
  $("#project-name-button").on("click", function(e) {
    e.preventDefault();  // Prevent submit button from submitting text to the page
    var projectName = $("#project-name").val();
    var listTitle = $(".list-title");
    var renameButton = $('<button id="project-rename-button" type="submit" class="btn btn-default">Rename Project</button>');

    listTitle.replaceWith($("<h3>").addClass("list-title panel-title").append(projectName));
    $(".list-title").hide().fadeIn(1500);
    $("#project-name").delay(1000).fadeOut(1500);
    $("#project-name-button").delay(1000).fadeOut(1500);
    renameButton.hide().delay(2500).fadeIn(1500);
    $(".list-title").append(renameButton);

    // Rename Project
    $("#project-rename-button").on("click", function(e) {
      e.preventDefault(); // Still not sure what preventDefault does
      $(".list-title").val("").focus();
      $("#project-name").fadeIn(1500);
      $("#project-name-button").fadeIn(1500);
      $("#project-rename-button").delay(1500).fadeOut(1500);
    });

  });



  // Add New Task
  $(".btn-warning").on("click", function(e) {
    e.preventDefault();  // Prevent submit button from submitting text to the page

    var newTask = $(".new-task").val().trim();
    var isDuplicate = false;
    // Finds duplicate entries
    $("td.word-td").each(function(){
      if($(this).text().trim().toLowerCase() === newTask.toLowerCase()) {
        isDuplicate = true;
        return;
      }
    });
    // Runs duplicate entry message
    if(isDuplicate){
      $("#duplicate-msg").slideDown(1000);
      return;
    }

    // Runs empty message
    if(newTask === ""){
      $("#empty-msg").slideDown(1000);
      return;
    }

    // Inserts new row with new task item
    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td").append(newTask);
    var completedBtn = $("<button>").addClass("btn btn-default").append('<i class="fa fa-square-o">');
    var completedTd = $("<td>").append(completedBtn);
    var deleteBtn = $("<button>").addClass("btn btn-danger").append('<i class="fa fa-trash-o"></i>');
    var deleteTd = $("<td>").append(deleteBtn);

    newRow.append(wordTd).append(completedTd).append(deleteTd).hide().fadeIn(2000);
    $("#task-list").append(newRow);
    // Set newTask to become an empty string and clears the input field.
    // Also sets the focus back onto the input field. 
    $(".new-task").val("").focus();

    // Fade out duplicate entry message when user begins typing again in input field
    $(".new-task").on("keydown", function() {
      $(".alert-danger").fadeOut(1000);
    });

    // Rotating gears icon
    // var rotatingGear = $("<i>").addClass("fa fa-cog fa-spin");
    // $(this).replaceWith($("<button>").attr("type", "submit").addClass("btn btn-warning btn-block").append(rotatingGear));
    // rotatingGear.hide().fadeIn(1500).delay(500).fadeOut(500, function(){
    //   var plusSign = $("<i>").addClass("fa fa-plus").hide().fadeIn(500);
    //   $(this).replaceWith($(plusSign));
    // });
    // Commented out until I can figure out why this prevents duplicate message from working and deletes the row it duplicates.

  });
  // End add new task

  // Mark complete
  $("table").on("click", ".btn-default", function(){
    var smileAnimation = $("<i>").addClass("fa fa-smile-o").fadeIn(1000).delay(500).fadeOut(500);
    var check = $("<i>").addClass("fa fa-check-square-o").hide().delay(2000).fadeIn(1000);

    $(this).replaceWith($("<button>").attr("type", "button").addClass("btn btn-success btn-width").append(smileAnimation).append(check));
    $(".btn-success").parent().prev().css("text-decoration", "line-through");
  });

  // Mark not complete
  $("table").on("click", ".btn-success", function(){
    var meh = $("<i>").addClass("fa fa-meh-o").fadeIn(1000).delay(500).fadeOut(500);
    var uncheck = $("<i>").addClass("fa fa-square-o").hide().delay(2000).fadeIn(1000);
    $(this).replaceWith($("<button>").attr("type", "button").addClass("btn btn-default btn-width").append(meh).append(uncheck));
    $(".btn-default").parent().prev().css("text-decoration", "none");
  });

  // Remove row
  $("table").on("click", ".btn-danger", function() {
    var fire = $("<span>").addClass("glyphicon glyphicon-fire").attr("aria-hidden", "true");
    $(this).replaceWith($("<button>").attr("type", "button").addClass("btn btn-danger btn-width").append(fire));
    fire.hide().fadeIn(1500, function(){
        $(this).closest("tr").fadeOut(1000, function(){
        $(this).remove();
      });
    });
  });
});


// TO DO LIST (Oh the irony):
// Finish gear icon animation


