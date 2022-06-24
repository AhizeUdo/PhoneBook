var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem)
//to check for keys as you input immediately 
filter.addEventListener('keyup', filterItems)

//Add item
function addItem(e){
    e.preventDefault();
    // console.log('working')
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // console.log(li)
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

//Filter item 
function filterItems(e){
    var text = e.target.value.toLowerCase();
    // console.log(text);
    var items = itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    }); 
}