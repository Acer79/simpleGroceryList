// ********** My first Grocery List App all in Vanilla JS ***********
// V2 will have the improvement if the enter key is pressed in the form field it will go into the list
// V2 will also be able to cross off items


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

// It should be able to delete an item from the list

function deleteItem (position, numberOfItemsToRemove) {
    list.splice(position, numberOfItemsToRemove);
}

//It should check to see if the item is on the list already
//It should check if the item is in the list reguardless of case sensitivity

function checkList (item) {
    for (var i =0; i < list.length; i++) {
        if (list.length === 0){
            var check = false;
            return check;
        } else if (list[i] === item) {
            alert("Item Already Exist!")
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

        var listOfItems = document.createElement("li");
        listOfItems.appendChild(document.createTextNode(list[i]));
        listOfItems.setAttribute("id", item);
        unorderList.appendChild(listOfItems);
    // Attach an event handler to each li that is created
        listOfItems.addEventListener("click", getTheItemToStrike);

    console.log("There are " + x + " Items in the list");

    return unorderList;
}

// It should allow you to cross off items when they are completed
// Function access CSS class to do the strike through effect

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

