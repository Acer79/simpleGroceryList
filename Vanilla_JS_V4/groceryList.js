// ********** My first Grocery List App all in Vanilla JS ***********
// V2 will have the improvement if the enter key is pressed in the form field it will go into the list
// V2 will also be able to cross off items
// V3 should display how many items there are
// V3 should display crossed off items as faded
// V3 should allow you to sort by completed
// V3 should allow you to delete the completed items
// V3 should allow you to hide crossed off items
// V4 should allow you to unhide crossed off items and show all items
// V4 should allow the number of items to update when hide button is pressed
// V4 should allow you to show only hidden items
// V4 should allow you to delete all completed items



//Define the array

var list = [];

setfocus();

// Function to focus in on the input box right away when page loads

function setfocus (){
  document.getElementById("itemName").focus();
}

// It should be able to add an item to a list

function addItem (item, callback) {
    var upperCaseItem = item.toUpperCase();
    if (checkList(upperCaseItem) === true) {
        return;
    } else {
        list.push(upperCaseItem);
        display(item);
        }
}

// function should calculate the number of active items

// It should be able to delete an item from the DOM and Array

function deleteItem () {
  var itemToDelete = this.getAttribute("id");
        for (var i=0; i < list.length; i++) {
            if (list[i] === itemToDelete) {
                list.splice(i, 1);
            }
    }
    var counter = document.getElementById("numberOfItems").innerHTML;
    document.getElementById("numberOfItems").textContent=counter - 1;
    var divItem = this.parentNode;
    var liItem = divItem.parentNode;
    liItem.parentNode.removeChild(liItem);
    }

//It should check to see if the item is on the list already
//It should check if the item is in the list regardless of case sensitivity

function checkList (item) {
    for (var i =0; i < list.length; i++) {
        if (list.length === 0){
            var check = false;
            return check;
        } else if (list[i] === item) {
            alert("Item Already Exist!");
            var check = true;
            return check;
        } else {
            var check = false;
        }
    }
    return check;
}

// It should tell you how many items are on the list and Display all items

function display (item, callback) {

    var i = list.length-1;
    var x = i+1;

    // create the element in the DOM
    var unorderList = document.getElementById('uList');
    var listItem = document.createElement("li");
    var listDiv = document.createElement("div");
    var listLabel = document.createElement("label");
    var listButton = document.createElement("button");

    listButton.innerHTML="Delete";
    listButton.setAttribute("id", item.toUpperCase());
    listLabel.appendChild(document.createTextNode(list[i]));
    listLabel.setAttribute("id", "label" + x);
    listDiv.appendChild(listLabel);
    listDiv.appendChild(listButton);
    listDiv.setAttribute("id", "div" + x);
    listItem.appendChild(listDiv);
    listItem.setAttribute("id", "alist" + x);
    unorderList.appendChild(listItem);
    listLabel.addEventListener("click", getTheItemToStrike);
    listButton.addEventListener("click", deleteItem);

    checkHideButton();

    // Display the number of items on the list
    document.getElementById("numberOfItems").textContent=x;

    return unorderList;
}

// creates the hide button

function createHideButton () {
    var messageDiv = document.getElementById('messageBar');
    var hideButton = document.createElement("button");
    hideButton.innerHTML="Hide Completed Items";
    hideButton.setAttribute("id", "hideButton");
    messageDiv.appendChild(hideButton);
    hideButton.addEventListener('click', hideCompletedItems);
}

// creates the unhide button

function createUnhideButton () {
    var messageDiv = document.getElementById('messageBar');
    var unhideButton = document.createElement("button");
    unhideButton.innerHTML="Unhide Completed Items";
    unhideButton.setAttribute("id", "unhideButton");
    messageDiv.appendChild(unhideButton);
    unhideButton.addEventListener('click', showAllItems);
}

// creates the show hidden items button

function createShowHideItemButton () {
    var messageDiv = document.getElementById('messageBar');
    var showHideItemButton = document.createElement("button");
    showHideItemButton.innerHTML="Show Completed Items";
    showHideItemButton.setAttribute("id", "showHideItemButton");
    messageDiv.appendChild(showHideItemButton);
    showHideItemButton.addEventListener('click', showOnlyCompletedItems);
}

// creates the delete completed button

function createDeleteCompletedButton () {
    var messageDiv = document.getElementById('messageBar');
    var deleteCompletedButton = document.createElement("button");
    deleteCompletedButton.innerHTML="Delete Completed Items";
    deleteCompletedButton.setAttribute("id", "deleteCompletedButton");
    messageDiv.appendChild(deleteCompletedButton);
    deleteCompletedButton.addEventListener('click', deleteAllCompletedItems);
}

// checks if the hide button is created or not and if the items is 0 then remove hide button

function checkHideButton () {
  var messageDiv = document.getElementById('messageBar');
  var counter = document.getElementById("numberOfItems").innerHTML;
  var hideElement = document.getElementById('hideButton');
    if (hideElement === null) {
      createHideButton ();
      createUnhideButton();
      createShowHideItemButton();
      createDeleteCompletedButton();
    } else if (counter === "0") {
        messageDiv.removeChild(hideElement);
    }
    else {
        return;
    }
}

// Function should show all Items

function showAllItems () {
  var allItems = document.getElementsByTagName("LI");
  var liIdStore = new Array();

  for (var i = 0; i < allItems.length; i++) {
    liIdStore.push(allItems[i].id);
  }
  for (var t = 0; t < liIdStore.length; t++) {
    document.getElementById(liIdStore[t]).style.display = "";
  }
}

// Function should hide all completed items

function hideCompletedItems () {
  var allCompletedItems = document.querySelectorAll(".strike");
  var divStore = new Array();
  var liIdStore = new Array();
  var liStore = new Array();

  for (var l = 0; l < allCompletedItems.length; l++) {
    divStore.push(allCompletedItems[l].parentNode);
  }
  for (var k = 0; k < divStore.length; k++){
    liStore.push(divStore[k].parentNode);
  }
  for (var j = 0; j < liStore.length; j++) {
    liIdStore.push(liStore[j].id);
  }
  for (var i = 0; i < liIdStore.length; i++) {
    document.getElementById(liIdStore[i]).style.display = "none";
  }
}

// function should show only completed items

function showOnlyCompletedItems () {
  var allOutstandingItems = document.querySelectorAll("label:not(.strike)");
  var allCompletedItems = document.querySelectorAll(".strike");

  var divStore = new Array();
      var liIdStore = new Array();
      var liStore = new Array();

      for (var l = 0; l < allOutstandingItems.length; l++) {
        divStore.push(allOutstandingItems[l].parentNode);
      }
      for (var k = 0; k < divStore.length; k++){
        liStore.push(divStore[k].parentNode);
      }
      for (var j = 0; j < liStore.length; j++) {
        liIdStore.push(liStore[j].id);
      }
      for (var i = 0; i < liIdStore.length; i++) {
        document.getElementById(liIdStore[i]).style.display = "none";
      }

      if (allCompletedItems.length === 0) {
        alert("There is No Items Here.");
  }
}

// function should delete all completed items

function deleteAllCompletedItems () {
  debugger;
  var allCompletedItems = document.querySelectorAll(".strike");
  var labelItems = new Array();
  var divItems = new Array();
  var liItems = new Array();


  for (var i = 0; i < allCompletedItems.length; i++) {
    labelItems.push(allCompletedItems[i].textContent);
  }
  for (var j = 0; j < list.length; j++) {
    for (var t = 0; t < labelItems.length; t++) {
      if (list[j] === labelItems[t]) {
        list.splice(j, 1);
      }
    }
  }
  for (var k =0; k < allCompletedItems.length; k++) {
    divItems.push(allCompletedItems[k].parentNode);
  }
  for (var l =0; l < divItems.length; l++) {
    liItems.push(divItems[l].parentNode);
  }
  for (var m = 0; m < liItems.length; m++) {
    liItems[m].parentNode.removeChild(liItems[m]);
  }
}



// It should allow you to cross off items when they are completed
// Function access CSS class to do the strike through effect and fade out

function getTheItemToStrike () {
  if (this.className != "strike") {
    this.className += "strike";
  } else {
    this.classList.toggle("strike");
  }
}

// It should be able to get the form input

function getFormItem (item, callback) {
    var itemName = document.getElementById('itemName').value;
    if (itemName === "") {
      return;
    } else {
        addItem(itemName);
    }

// Reset the form input field
    var form = document.getElementById("frm1");
    form.reset();
}

// Check to see if enter key was pressed in form

function handle(e, item, callback){
        if(e.keyCode === 13){
            e.preventDefault(); // Ensure it is only this code that rusn

            getFormItem(item);
        }
    }

