// Scripts for To Do List app

// Variables
var i;
var remove = document.getElementsByClassName('remove-button');
var add = document.getElementById('addButton');

// Eventlistener for remove button
for (i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", rowRemove); 
};

// Function to remove row
function rowRemove() {
  this.parentNode.parentNode.remove();
};

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