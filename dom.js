// var form = document.getElementById('addForm');

// var itemList = document.getElementById('items');

// form.addEventListener('submit', addItem);

// function addItem(e){
//     e.preventDefault();
//     // console.log('working')
//     var newItem = document.getElementById('item').value;
//     var li = document.createElement('li');
//     li.className = 'list-group-item';
//     // console.log(li)
//     li.appendChild(document.createTextNode(newItem));
//     var deleteBtn = document.createElement('button');
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//     deleteBtn.appendChild(document.createTextNode('X'));
//     li.appendChild(deleteBtn);
//     itemList.appendChild(li);
// }

// function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         var li = e.target.parentElement;
//         itemList.removeChild(li);
//     }
// }

// // Filter Item
// function filterItems(e){
//     // Convert text to lowercase
//     var text = e.target.value.toLowerCase();
//     // console.log(text);
//     var items = itemList.getElementsByTagName('li');
//     // Convert to an array
//     Array.from(items).forEach(function(item){
//       var itemName = item.firstChild.textContent;
//     //   console.log(itemName);
//     if(itemName.toLowerCase().indexOf(text) != -1){
//         item.style.display = 'block';
//     }else{
//         item.style.display = 'none';
//     }
//     });
// }








var form  = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete Item
itemList.addEventListener('click',removeItem);
// Filter
filter.addEventListener('keyup',filterItems);

// Add a function to add item
function addItem(e){
    e.preventDefault();
    // console.log(123);

    // Get the input value
    var newItem = document.getElementById('item').value;
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // console.log(li);

    // Add text node with input
    li.appendChild(document.createTextNode(newItem));
    
    //create delete button
    var deleteBtn = document.createElement('button');
    
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    // Append li to list 
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Filter Item
function filterItems(e){
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
    //   console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
    });
}