// SCRIPTS FOR TO DO LIST APP

$(document).ready(function() {
  // Hide duplicate message
  $(".alert-danger").hide();

  // TITLE PROJECT NAME
  $("#project-name-button").on("click", function(e) {
    e.preventDefault();
    var projectName = $("#project-name").val();
    var listTitle = $(".list-title");
    var renameButton = $("<button>").attr("id", "project-rename-button").attr("type", "submit").addClass("btn btn-default btn-block")

    renameButton.append("Rename Project");

    listTitle.replaceWith($("<h3>").addClass("list-title panel-title").append(projectName));
    $(".list-title").hide().fadeIn(1500);
    $("#project-name").delay(500).fadeOut(1000);
    $("#project-name-button").delay(500).fadeOut(1000);
    renameButton.hide().delay(1000).fadeIn(1500);
    $("#rename-placeholder").append(renameButton);

    // Rename Project
    $("#project-rename-button").on("click", function(e) {
      e.preventDefault();
      $(".list-title").val("").focus(); // Not sure why this isn't working
      $("#project-name").fadeIn(1500);
      $("#project-name-button").fadeIn(1500);
      $("#project-rename-button").delay(1000).fadeOut(500);
    });
  });

  // ADD NEW TASK
  $(".btn-warning").on("click", function(e) {
    e.preventDefault();  
    var newTask = $(".new-task").val().trim();
    var isDuplicate = false;
    // Finds duplicate entries
    $("td.word-td").each(function(){
      if($(this).text().trim().toLowerCase() === newTask.toLowerCase()) {
        isDuplicate = true;
        return;
      };
    });
    // Runs duplicate entry message
    if(isDuplicate){
      $("#duplicate-msg").slideDown(500);
      return;
    };

    // Runs empty message
    if(newTask === ""){
      $("#empty-msg").slideDown(500);
      return;
    };

    // Inserts new row with new task item
    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td").append(newTask);
    var completedBtn = $("<button>").addClass("unchecked btn btn-default").append('<i class="fa fa-square-o">');
    var completedTd = $("<td>").append(completedBtn);
    var deleteBtn = $("<button>").addClass("btn btn-danger").append('<i class="fa fa-trash-o"></i>');
    var deleteTd = $("<td>").append(deleteBtn);

    newRow.append(wordTd).append(completedTd).append(deleteTd).hide().fadeIn(2000);
    $("#task-list").append(newRow);
    $(".new-task").val("").focus();

    // Fade out duplicate entry message on keydown
    $(".new-task").on("keydown", function() {
      $(".alert-danger").fadeOut(500);
    });

    // Rotating gears icon
    // var rotatingGear = $("<i>").addClass("fa fa-cog fa-spin");
    // $(".btn-warning").replaceWith($("<button>").attr("type", "submit").addClass("btn btn-warning btn-block").append(rotatingGear));
    // rotatingGear.hide().fadeIn(1500).delay(500).fadeOut(500, function(){
    //   var plusSign = $("<i>").addClass("fa fa-plus");
    //   $(".btn-warning").replaceWith($("<button>").attr("type", "submit").addClass("btn btn-warning btn-block").append(plusSign));
    //   plusSign.hide().fadeIn(500);
    // });
    // Commented out until I can figure out why this prevents duplicate message from working and deletes the row it duplicates.

  }); // End add new task
  

  // MARK COMPLETE
  $("table").on("click", ".unchecked", function(){
    var smileAnimation = $("<i>").addClass("fa fa-smile-o").fadeIn(1000).delay(500).fadeOut(500);
    var check = $("<i>").addClass("fa fa-check-square-o").hide().delay(2000).fadeIn(1000);

    $(this).replaceWith($("<button>").attr("type", "button").addClass("btn btn-success btn-width").append(smileAnimation).append(check));
    $(".btn-success").parent().prev().css("text-decoration", "line-through").css("color", "#449D44");
  });

  // MARK NOT COMPLETE
  $("table").on("click", ".btn-success", function(){
    var meh = $("<i>").addClass("fa fa-meh-o").fadeIn(1000).delay(500).fadeOut(500);
    var uncheck = $("<i>").addClass("fa fa-square-o").hide().delay(2000).fadeIn(1000);
    $(this).replaceWith($("<button>").attr("type", "button").addClass("unchecked btn btn-default btn-width").append(meh).append(uncheck));
    $(".unchecked").parent().prev().css("text-decoration", "none").css("color", "white");
  });

  // REMOVE ROW
  $("table").on("click", ".btn-danger", function() {
    $(this).parent().prev().prev().css("color", "red");
    var fire = $("<span>").addClass("glyphicon glyphicon-fire").attr("aria-hidden", "true");
    $(this).replaceWith($("<button>").attr("type", "button").addClass("btn btn-danger btn-width").append(fire));
    fire.hide().fadeIn(750, function(){
        $(this).closest("tr").fadeOut(500, function(){
        $(this).remove();
      });
    });
  });
});

// TO DO LIST (Oh the irony):
// Clear text field when renaming
// Why doesn't rename button not work the second time?
// Finish gear icon animation