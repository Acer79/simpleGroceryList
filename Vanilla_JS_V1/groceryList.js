// ********** My first Grocery List App all in Vanilla JS ***********


//Define the array

var list = [];

// It should be able to add an item to a list

function addItem (item, callback) {
    list.push(item);
    display(item);
}

// It should be able to delete an item from the list

function deleteItem (position, numberOfItemsToRemove) {
    list.splice(position, numberOfItemsToRemove);
}

//It should check to see if the item is on the list already

function checkList (item) {
    for (var i =0; i < list.length; i++) {
        if (list[i] === list[0]){
            var check = false;
            return check;
        } else if (list[i] === item) {
            alert("Item Already Exist!")
            var check = true;
            return check;
        } else {
            var check = false;
            return check;
        }
    }
}

// It should tell you how many items are on the list and Display all items

function display (item, callback) {
    
    if (checkList(item) === true) {
        return;
    } else {
        var i = list.length-1;
        var unorderList = document.getElementById('uList');
        
            var listOfItems = document.createElement("li");
            listOfItems.appendChild(document.createTextNode(list[i]));
            unorderList.appendChild(listOfItems);

        console.log("There are " + i + " Items in the list");
        
        return unorderList;
        }
}

// It should allow you to cross off items when they are completed

function getTheItemToStrike (item) {
    var itemStrike = list[item].strike();
    console.log(itemStrike);
}

// It should be able to get the form input

function getFormItem (item, callback) {
    var itemName = document.getElementById('itemName').value;
    addItem(itemName);
    
// Reset the form input field
    var form = document.getElementById("frm1");
    form.reset();
}


