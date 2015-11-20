// Scripts for To Do List app

$(document).ready(function() {
  // Hide duplicate message
  $(".alert-danger").hide();

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
    if(isDuplicate) {
      $(".alert-danger").slideDown(1000);
      return;
    }
    // Inserts new row with new task item
    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td").append(newWord);
    var completedBtn = $("<button>").addClass("btn btn-success strikethrough-button").append('<i class="fa fa-check">');
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
});

// Variables
var i;
var remove = document.getElementsByClassName('remove-button');
var strikethrough = document.getElementsByClassName('strikethrough-button');
var task = document.getElementsByClassName('task');
var add = document.getElementById('addButton');

// Eventlistener for remove button
for (i = 0; i < remove.length; i++) {
  remove[i].addEventListener('click', rowRemove); 
};

// Function to remove row
function rowRemove() {
  this.parentNode.parentNode.remove();
};

// Eventlistener for strikethrough button
for (i = 0; i < strikethrough.length; i++) {
  strikethrough[i].addEventListener('click', rowStrikethrough);
};

// Function to strikeout completed task
function rowStrikethrough() {
  if (this.getAttribute('data-strikethrough') === 'false') {
    this.setAttribute('data-strikethrough', 'true');
    console.log("this = " + this);
    console.log(this.parentNode.previousSibling.previousSibling);
    this.parentNode.previousSibling.previousSibling.setAttribute('class', 'task strikethrough');
  } else {
    console.log("rowStrikethrough function did not run")
  }
};




  // for (i = 0; i < task.length; i++) {
  //   task[i].setAttribute('class', 'task strikethrough')
  // }



// Eventlistener for add button
// add.addEventListener("click", rowAdd);

// Function to add row
// function rowAdd() {
//   var firstName = document.getElementById("firstName").value;
//   var lastName = document.getElementById("lastName").value;
//   var email = document.getElementById("email").value;
//   var table = document.getElementsByTagName("tbody")[0];
//   var newRowEl = document.createElement("tr");
//   var inputsArray = [];
//   var elementText;
//   var firstNamesList = document.getElementsByClassName("first");
//   if (firstNamesList.constructor === Array) {
//     console.log("firstNamesList is an Array");
//   } else {
//     console.log("firstNamesList is not an Array");
//   };
//   for (i = 0; i < firstNamesList.length; i++) {
//     firstNamesList = firstNamesList.innerHTML;
//     console.log("firstNamesList Values: " + firstNamesList);
//   };


//   console.log(firstNamesList);
//   // Check for empty text fields
//   if ((firstName === "") || (lastName === "") || (email === "")) {
//     inputsArray = document.getElementsByTagName("input");
//     for (i = 0; i < inputsArray.length; i++) {
//       if (inputsArray[i].value === "") {
//         switch(i) {
//           case 0:
//             elementText = "first";
//             break;

//           case 1:
//             elementText = "second";
//             break;

//           case 2:
//             elementText = "third";
//             break;
//         }
//         alert("You have an empty input in the " + elementText + " input");
//         break;
//         // } else if ((firstName === firstNamesList[i]) && (lastName === lastNamesList[i]) && (e-mail === emailsList[i]) { // check for duplicate entries
        






//       } else { // add HTML for each new row
//       newRowEl.setAttribute("class", "visible inflow");
//       newRowEl.setAttribute("data-visible", "true");
//       newRowEl.innerHTML = "<td>" + firstName + "</td> \
//                       <td>" + lastName + "</td> \
//                       <td>" + email + "</td> \
//                       <td><button type='button' class='btn btn-danger \ removeButton'><i class='fa fa-times'></i></button></td>";
//       table.appendChild(newRowEl);
//       // Set Eventlisteners to listen to new buttons from added rows
//       add.addEventListener("click", rowAdd);  
//       for (i = 0; i < remove.length; i++) {
//         remove[i].addEventListener("click", rowRemove); 
//       };
//       // Reset form fields back to place-holders
//       var form = document.getElementById("form");
//       form.reset();
//       }
//     }
//   }
// };